# Heaven Creative — Design system

Linguagem visual inspirada na RED Digital Cinema (análise completa em [design-system/reference-analysis.md](design-system/reference-analysis.md)). Nenhum asset, fonte ou texto da RED é usado.

- **Tokens:** [design-system/tokens.css](design-system/tokens.css), importado em `app/globals.css`. Use sempre os utilitários semânticos (`bg-surface`, `text-fg-muted`, `border-border`, `text-h1`, `ease-out-quint`…), nunca cores literais.
- **Utilitários de tipo** (em `app/globals.css`): `type-wordmark` (Michroma, só o nome da marca), `type-display` (Archivo expandida 900, caixa alta), `type-outline` (título em contorno) e `type-label` (Barlow 500, caixa alta, tracking 0,1em).
- **Fundo animado:** `components/Plasma.tsx` (WebGL2 via `ogl`), fixo atrás do site todo (em `app/layout.tsx`), branco a 30% de opacidade e renderizado em 1x. As seções são transparentes. Texto solto sobre o fundo usa `text-fg`; o cinza (`fg-muted`/`fg-subtle`) só pode ir sobre superfície sólida ou com o degradê radial escuro por trás.
- **Botões:** use `components/Button.tsx`, com as variantes `primary` (branco sólido), `outline` (borda branca que inverte no hover) e `link` (sublinhado).

## Regras
- Preto absoluto como palco e acento **monocromático**: o destaque é a inversão branco/preto. Sem o vermelho da RED.
- Raio 0 e bordas de 1px. Sem sombras na interface; só `--shadow-text-on-media` sobre fotos.
- Títulos de seção: rótulo pequeno (`type-label`) acima de um título sólido (`type-display`), sem contorno atrás.
- Texto secundário nunca abaixo de `fg-subtle` (#999, 7.4:1).
- Foco: contorno branco de 2px em todo elemento focável. Motion: durações vêm dos tokens e zeram com `prefers-reduced-motion`; o Framer Motion segue a preferência via `MotionConfig`, e o Lenis é desligado.
