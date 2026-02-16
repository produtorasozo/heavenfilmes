'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Header() {
    const { t, setLanguage } = useLanguage();

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 flex justify-between items-center text-white backdrop-blur-sm bg-black/20"
        >
            <nav className="flex items-center gap-4 md:gap-8 font-medium text-xs md:text-base tracking-widest uppercase">
                <a href="/#about" className="hover:text-zinc-300 transition-colors">{t.nav.about}</a>
                <a href="/planos" className="hover:text-zinc-300 transition-colors">{t.nav.plans}</a>
                <a href="/#contact" className="hover:text-zinc-300 transition-colors">{t.nav.contact}</a>
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
                <button onClick={() => setLanguage('pt')} className="hover:scale-110 transition-transform" aria-label="Português">
                    <span className="text-xl">🇧🇷</span>
                </button>
                <button onClick={() => setLanguage('en')} className="hover:scale-110 transition-transform" aria-label="English">
                    <span className="text-xl">🇺🇸</span>
                </button>
                <button onClick={() => setLanguage('es')} className="hover:scale-110 transition-transform" aria-label="Español">
                    <span className="text-xl">🇪🇸</span>
                </button>
            </div>
        </motion.header>
    );
}
