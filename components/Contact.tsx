'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';
import Button from '@/components/Button';

export default function Contact() {
    const { t } = useLanguage();

    const footerLinks = [
        { href: 'https://www.instagram.com/hvncreative/', label: 'Instagram' },
        { href: '#', label: 'LinkedIn' },
    ];

    return (
        <section id="contact" className="relative z-10 w-full">
            <div className="relative overflow-hidden">
                {/* Readability: soft dark pool behind the text over the site background */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.25)_55%,transparent_80%)]" />

                <div className="relative container-page min-h-[80svh] flex items-center justify-center py-(--section-y)">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-(--container-text) text-center flex flex-col items-center"
                    >
                        <p className="type-label text-fg-muted mb-6">{t.contact.next}</p>
                        <h2 className="type-display text-[clamp(1.375rem,6.5vw,3.5rem)] leading-[1.05] text-fg mb-10 md:mb-12 text-balance">
                            {t.contact.title}
                        </h2>
                        <Button href="https://wa.link/30umru" variant="primary" external>
                            {t.contact.cta}
                        </Button>
                    </motion.div>
                </div>
            </div>

            <footer className="border-t border-border pt-12 pb-16 md:pb-24 px-(--gutter) flex flex-col items-center gap-6 text-center">
                <ul className="flex flex-wrap justify-center items-center">
                    {footerLinks.map((link, i) => (
                        <li key={link.label} className="flex items-center">
                            {i > 0 && <span className="px-3 text-fg" aria-hidden="true">·</span>}
                            <a
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="type-label tracking-footer inline-flex items-center min-h-11 px-1 text-fg hover:text-fg-muted transition-colors duration-(--duration-color) ease-standard"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <span className="text-caption text-fg">{t.contact.rights}</span>
            </footer>
        </section>
    );
}
