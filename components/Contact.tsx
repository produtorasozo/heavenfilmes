'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="min-h-screen w-full bg-black flex flex-col justify-center items-center px-4 md:px-6 py-12 md:py-0 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <p className="text-zinc-500 uppercase tracking-widest mb-8">{t.contact.next}</p>
                <h2 className="text-3xl md:text-8xl font-bold text-white mb-8 md:mb-12 max-w-4xl leading-tight px-4">
                    {t.contact.title}
                </h2>

                <a
                    href="https://wa.link/30umru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 md:px-12 py-4 md:py-6 bg-white text-black text-base md:text-lg font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                >
                    {t.contact.cta}
                </a>
            </motion.div>

            <div className="absolute bottom-4 md:bottom-12 w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-4 md:px-12 text-zinc-500 text-xs md:text-sm font-mono">
                <span>{t.contact.rights}</span>
                <div className="flex gap-4 md:gap-8">
                    <a href="https://www.instagram.com/hvncreative/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </section>
    );
}
