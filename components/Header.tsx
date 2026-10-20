'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/utils/translations';

const languages: { code: Language; label: string; name: string }[] = [
    { code: 'pt', label: 'PT', name: 'Português' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'es', label: 'ES', name: 'Español' },
];

function CloudIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className={className} aria-hidden="true">
            <path fill="currentColor" d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
        </svg>
    );
}

export default function Header() {
    const { t, language, setLanguage } = useLanguage();
    const [open, setOpen] = useState(false);

    const links = [
        { href: '/#about', label: t.nav.about },
        { href: '/planos', label: t.nav.plans },
        { href: '/#contact', label: t.nav.contact },
    ];

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    const languageSwitch = (
        <div className="flex items-center" role="group" aria-label="Idioma / Language">
            {languages.map(({ code, label, name }) => (
                <button
                    key={code}
                    onClick={() => setLanguage(code)}
                    aria-label={name}
                    aria-pressed={language === code}
                    className={`type-label min-h-11 min-w-11 px-2 transition-colors duration-(--duration-color) ease-standard ${language === code ? 'text-fg' : 'text-fg-subtle hover:text-fg'}`}
                >
                    {label}
                </button>
            ))}
        </div>
    );

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full z-50 bg-background text-fg"
        >
            <div className="h-(--header-height) px-(--gutter) lg:px-10 flex items-center justify-between gap-6">
                <Link href="/#about" className="flex items-center gap-3 min-h-11" onClick={() => setOpen(false)}>
                    <CloudIcon className="w-5 h-5" />
                    <span className="type-wordmark text-sm">Heaven Creative</span>
                </Link>

                {/* Desktop nav: uppercase links split by thin vertical rules */}
                <nav className="hidden lg:flex items-center" aria-label="Principal">
                    {links.map((link, i) => (
                        <div key={link.href} className="flex items-center">
                            {i > 0 && <span className="w-px h-4 bg-border" aria-hidden="true" />}
                            <Link
                                href={link.href}
                                className="type-label px-8 py-7 text-fg-muted hover:text-accent-text transition-colors duration-(--duration-color) ease-standard"
                            >
                                {link.label}
                            </Link>
                        </div>
                    ))}
                </nav>

                <div className="hidden lg:block">{languageSwitch}</div>

                <button
                    type="button"
                    className="lg:hidden min-h-11 min-w-11 -mr-2 flex flex-col items-center justify-center gap-1.5"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label="Menu"
                    onClick={() => setOpen(!open)}
                >
                    <span className={`block w-6 h-0.5 bg-fg transition-transform duration-(--duration-fast) ease-out-quint ${open ? 'translate-y-2 rotate-45' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-fg transition-opacity duration-(--duration-fast) ${open ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-fg transition-transform duration-(--duration-fast) ease-out-quint ${open ? '-translate-y-2 -rotate-45' : ''}`} />
                </button>
            </div>

            {/* Mobile drawer */}
            <div
                id="mobile-menu"
                hidden={!open}
                className="lg:hidden bg-surface-overlay border-t border-border h-[calc(100svh-var(--header-height))] overflow-y-auto"
            >
                <nav className="flex flex-col px-(--gutter) py-6" aria-label="Principal">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="type-display text-h1 py-4 border-b border-border"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="px-(--gutter)">{languageSwitch}</div>
            </div>
        </motion.header>
    );
}
