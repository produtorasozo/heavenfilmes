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
                <a href="/#about" className="hover:text-zinc-300 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-3 h-3 md:w-4 md:h-4">
                        <path fill="currentColor" d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
                    </svg>
                    {t.nav.about}
                </a>
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
