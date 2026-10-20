'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Button from '@/components/Button';

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="about"
            className="relative mt-(--header-height) h-[calc(100svh-var(--header-height))] min-h-[520px] w-full overflow-hidden"
        >
            {/* Readability: soft dark pool behind the copy over the site background */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.2)_55%,transparent_80%)]" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-(--gutter)">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOutQuint }}
                    className="flex flex-col items-center [text-shadow:var(--shadow-text-on-media)]"
                >
                    <h1 className="type-wordmark text-display text-fg mb-4 md:mb-6">
                        Heaven Creative
                    </h1>
                    <p className="type-label text-lead text-fg">
                        {t.hero.role}
                    </p>
                    <Button href="#contact" variant="outline" className="mt-8 md:mt-10">
                        {t.contact.cta}
                    </Button>
                </motion.div>
            </div>

            {/* Scroll cue */}
            <a
                href="#work"
                className="group absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 min-h-11 px-4 text-fg"
            >
                <span className="type-label text-caption opacity-70 group-hover:opacity-100 transition-opacity duration-(--duration-base)">
                    {t.hero.scroll}
                </span>
                <svg viewBox="0 0 16 10" className="w-4 h-2.5 opacity-70 group-hover:opacity-100 transition-opacity duration-(--duration-base)" aria-hidden="true">
                    <path d="M1 1l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </a>
        </section>
    );
}
