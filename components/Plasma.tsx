'use client';

/**
 * Plasma — WebGL2 shader background (OGL).
 * Adapted from the "Plasma Showcase" component for this design system:
 * - tinted monochrome by default (white), low opacity, decorative only
 * - renders a single still frame under prefers-reduced-motion
 * - pauses while off-screen or when the tab is hidden
 * - mouse parallax listens on window, so content layered on top doesn't block it
 * - renders nothing if WebGL2 is unavailable (the section keeps its black background)
 */

import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

export interface PlasmaProps {
    /** Hex tint for the plasma. */
    color?: string;
    /** Animation speed multiplier. */
    speed?: number;
    /** Temporal flow of the animation. */
    direction?: 'forward' | 'reverse' | 'pingpong';
    /** Zoom of the pattern. */
    scale?: number;
    /** Overall opacity of the rendered output. */
    opacity?: number;
    /** Subtle parallax distortion that follows the pointer. */
    mouseInteractive?: boolean;
    /** Upper bound for the device pixel ratio; lower is cheaper for full-screen use. */
    maxDpr?: number;
    className?: string;
}

const hexToRgb = (hex: string): [number, number, number] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [1, 1, 1];
    return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;

  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);

  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;
  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y));
    p.z -= 4.;
    S = p;
    d = p.y-T;

    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05);
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T));
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4;
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }

  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);

  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 finalColor = intensity * uCustomColor;

  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`;

const PINGPONG_SECONDS = 10;
// A pleasant frame to show when motion is reduced
const STILL_FRAME_SECONDS = 4;

export default function Plasma({
    color = '#ffffff',
    speed = 1,
    direction = 'forward',
    scale = 1,
    opacity = 1,
    mouseInteractive = true,
    maxDpr = 2,
    className = '',
}: PlasmaProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

        let renderer: Renderer;
        try {
            renderer = new Renderer({ webgl: 2, alpha: true, antialias: false, dpr });
        } catch {
            return;
        }
        const gl = renderer.gl;
        if (!renderer.isWebgl2) return;

        const canvas = gl.canvas as HTMLCanvasElement;
        canvas.style.display = 'block';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        container.appendChild(canvas);

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new Float32Array([1, 1]) },
                uCustomColor: { value: new Float32Array(hexToRgb(color)) },
                uSpeed: { value: speed * 0.4 },
                uDirection: { value: direction === 'reverse' ? -1 : 1 },
                uScale: { value: scale },
                uOpacity: { value: opacity },
                uMouse: { value: new Float32Array([0, 0]) },
                uMouseInteractive: { value: mouseInteractive && !reduceMotion ? 1 : 0 },
            },
        });
        const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

        const render = (seconds: number) => {
            program.uniforms.iTime.value =
                direction === 'pingpong'
                    ? PINGPONG_SECONDS - Math.abs((seconds % (PINGPONG_SECONDS * 2)) - PINGPONG_SECONDS)
                    : seconds;
            renderer.render({ scene: mesh });
        };

        const setSize = () => {
            const rect = container.getBoundingClientRect();
            renderer.setSize(Math.max(1, Math.floor(rect.width)), Math.max(1, Math.floor(rect.height)));
            const res = program.uniforms.iResolution.value as Float32Array;
            res[0] = gl.drawingBufferWidth;
            res[1] = gl.drawingBufferHeight;
            if (reduceMotion) render(STILL_FRAME_SECONDS);
        };
        const ro = new ResizeObserver(setSize);
        ro.observe(container);
        setSize();

        // gl_FragCoord is in device pixels with a bottom-left origin
        const handlePointer = (e: PointerEvent) => {
            const rect = container.getBoundingClientRect();
            const mouse = program.uniforms.uMouse.value as Float32Array;
            mouse[0] = (e.clientX - rect.left) * dpr;
            mouse[1] = (rect.height - (e.clientY - rect.top)) * dpr;
        };
        if (mouseInteractive && !reduceMotion) window.addEventListener('pointermove', handlePointer, { passive: true });

        // Animate only while visible
        let raf = 0;
        let visible = false;
        let elapsed = 0;
        let last = 0;
        const loop = (t: number) => {
            elapsed += (t - last) * 0.001;
            last = t;
            render(elapsed);
            raf = requestAnimationFrame(loop);
        };
        const start = () => {
            if (reduceMotion || raf || !visible || document.hidden) return;
            last = performance.now();
            raf = requestAnimationFrame(loop);
        };
        const stop = () => {
            cancelAnimationFrame(raf);
            raf = 0;
        };
        const io = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            if (visible) start();
            else stop();
        });
        io.observe(container);
        const onVisibility = () => (document.hidden ? stop() : start());
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
            stop();
            io.disconnect();
            ro.disconnect();
            document.removeEventListener('visibilitychange', onVisibility);
            window.removeEventListener('pointermove', handlePointer);
            if (canvas.parentNode === container) container.removeChild(canvas);
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, [color, speed, direction, scale, opacity, mouseInteractive, maxDpr]);

    return <div ref={containerRef} className={`w-full h-full relative overflow-hidden ${className}`} aria-hidden="true" />;
}
