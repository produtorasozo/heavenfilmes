'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

// Portfolio videos hosted on Wistia (all vertical, 720×1280).
// `type` maps to the localized service names used on the plans page.
type Project = {
    title: string;
    type: 'shootAndEdit' | 'edit';
    wistiaId: string;
};

const projects: Project[] = [
    { title: 'Oakland Florida', type: 'edit', wistiaId: 'v1jpr7zbzk' },
    { title: 'Living', type: 'shootAndEdit', wistiaId: 'qjsro1i26p' },
    { title: 'Living', type: 'shootAndEdit', wistiaId: 'fojpg2tb1u' },
    { title: 'Winter Garden', type: 'edit', wistiaId: 'hensgjz8zw' },
    { title: 'Cyrela', type: 'shootAndEdit', wistiaId: '6rtgj4jso6' },
    { title: 'Living', type: 'shootAndEdit', wistiaId: 'lkdgrnss93' },
    { title: 'Living', type: 'shootAndEdit', wistiaId: '230i0v3saz' },
    { title: 'Orlando', type: 'edit', wistiaId: 'vhcdmxspcr' },
    { title: 'Cyrela', type: 'shootAndEdit', wistiaId: 'kx12qx1s7m' },
];

const wistiaEmbed = (id: string) => `https://fast.wistia.net/embed/iframe/${id}?playerColor=ffffff`;

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="work" className="relative z-10 w-full py-(--section-y) lg:py-30">
            <div className="container-page">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center mb-14 md:mb-20"
                >
                    <span className="type-label text-fg mb-4">{t.hero.role}</span>
                    <h2 className="type-display text-[clamp(1.375rem,6.5vw,2rem)] md:text-h1 leading-[1.05] text-fg text-balance md:whitespace-nowrap">{t.projects.title}</h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 md:gap-y-16 max-w-sm sm:max-w-none mx-auto">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Media Container */}
                            <div className="aspect-[9/16] bg-surface overflow-hidden relative">
                                <iframe
                                    src={wistiaEmbed(project.wistiaId)}
                                    className="absolute inset-0 w-full h-full"
                                    title={project.title}
                                    loading="lazy"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>

                            <div className="mt-5 text-center [text-shadow:var(--shadow-text-on-media)]">
                                <h3 className="type-display text-h3 text-fg">
                                    {project.title}
                                </h3>
                                <p className="type-label text-caption text-fg mt-2">
                                    {project.type === 'shootAndEdit' ? t.plans.toggle.realEstate : t.plans.toggle.videomaker}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
