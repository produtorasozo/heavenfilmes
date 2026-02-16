'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Plans() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-white text-black pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-24"
                >
                    <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
                        {t.plans.title}
                    </h1>
                    <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide uppercase">
                        {t.plans.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-24">
                    {/* Single Video Plan */}
                    <div className="bg-black text-white p-8 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col">
                        <h3 className="text-2xl font-bold mb-6">{t.plans.packages.single.name}</h3>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {t.plans.packages.single.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="https://wa.link/30umru" target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center bg-white text-black hover:bg-zinc-200 transition-colors rounded-full font-medium tracking-wide text-sm">
                            {t.plans.cta}
                        </a>
                    </div>

                    {/* 5 Videos Plan */}
                    <div className="bg-black text-white p-8 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col relative overflow-hidden group border-2 border-zinc-800">
                        <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                            Popular
                        </div>
                        <h3 className="text-2xl font-bold mb-6">{t.plans.packages.pack5.name}</h3>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {t.plans.packages.pack5.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="https://wa.link/30umru" target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center bg-white text-black hover:bg-zinc-200 transition-colors rounded-full font-medium tracking-wide text-sm">
                            {t.plans.cta}
                        </a>
                    </div>

                    {/* 10 Videos Plan */}
                    <div className="bg-black text-white p-8 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col">
                        <h3 className="text-2xl font-bold mb-6">{t.plans.packages.pack10.name}</h3>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {t.plans.packages.pack10.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="https://wa.link/30umru" target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center bg-white text-black hover:bg-zinc-200 transition-colors rounded-full font-medium tracking-wide text-sm">
                            {t.plans.cta}
                        </a>
                    </div>

                    {/* Ultra Plan */}
                    <div className="bg-zinc-950 text-white p-8 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col relative overflow-hidden">
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">{t.plans.packages.ultra.name}</h3>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {t.plans.packages.ultra.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="https://wa.link/30umru" target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center border border-zinc-700 hover:bg-white hover:text-black hover:border-white transition-colors rounded-full font-medium tracking-wide text-sm">
                            {t.plans.cta}
                        </a>
                    </div>
                </div>

                <div className="text-center">
                    <a
                        href="https://wa.link/30umru"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-200 rounded-full hover:border-black hover:bg-black hover:text-white transition-all text-zinc-600 uppercase tracking-widest text-sm"
                    >
                        {t.plans.contact_button}
                    </a>
                </div>
            </div>
        </main>
    );
}
