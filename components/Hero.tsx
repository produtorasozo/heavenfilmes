'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="about" className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center relative z-10 px-4"
            >
                <h1 className="text-4xl md:text-8xl font-display tracking-widest text-white mb-4 md:mb-6 uppercase">
                    Heaven Filmes
                </h1>
                <p className="text-sm md:text-2xl text-white font-light tracking-[0.3em] md:tracking-[0.5em] uppercase px-2">
                    {t.hero.role}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-xs uppercase tracking-widest text-zinc-400">{t.hero.scroll}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-400 to-transparent" />
            </motion.div>
        </section>
    );
}
