'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

const projects = [
    {
        title: "Quinta da Marinha - Portugal",
        category: "Reels",
        year: "2025",
        videoUrl: "https://www.youtube.com/embed/QfPYwZ9exrQ"
    },
    {
        title: "WOW - Cyrela",
        category: "Reels",
        year: "2025",
        videoUrl: "https://www.youtube.com/embed/gZZNUYsEAH4"
    },
    {
        title: "Grand Village - Living",
        category: "Reels",
        year: "2025",
        videoUrl: "https://www.youtube.com/embed/ln-UC5qEoMQ"
    },
    {
        title: "Vila Real - Douglas Navarro",
        category: "Reels",
        year: "2025",
        videoUrl: "https://player.vimeo.com/video/1165466983"
    },
    {
        title: "Vila Real - Adore",
        category: "Reels",
        year: "2025",
        videoUrl: "https://www.youtube.com/embed/aCC6ZVRwVlg"
    },
    {
        title: "Xapada - Forbens",
        category: "Reels",
        year: "2025",
        videoUrl: "https://www.youtube.com/embed/_XvmToxEGhU"
    },
    {
        title: "Portugal - Apartamento Praia",
        category: "Reels",
        year: "2025",
        videoUrl: "https://www.youtube.com/embed/lLWfDYp2Ics"
    },
    {
        title: "Terras de Sao José I",
        category: "Reels",
        year: "2025",
        videoUrl: "https://www.youtube.com/embed/n_IGTUTiiRg"
    }
];

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen w-full bg-white px-4 md:px-6 py-16 md:py-32 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-6xl font-bold text-black mb-12 md:mb-24 tracking-tight"
                >
                    {t.projects.title}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            {/* Media Container */}
                            <div className="aspect-[9/16] md:aspect-[4/3] bg-zinc-900 rounded-lg mb-4 md:mb-6 overflow-hidden relative">
                                {project.videoUrl ? (
                                    <iframe
                                        src={project.videoUrl}
                                        className="absolute inset-0 w-full h-full"
                                        title={project.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-105" />
                                        {/* Simulate image */}
                                    </>
                                )}
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-zinc-200 pb-3 md:pb-4 gap-2 md:gap-0 transition-colors group-hover:border-black">
                                <h3 className="text-xl md:text-3xl font-medium text-black group-hover:text-zinc-600 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4 text-zinc-500 font-mono text-sm">
                                    <span>{project.category}</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
