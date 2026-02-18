'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Plans() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'realEstate' | 'videomaker'>('realEstate');

    const currentPlans = activeTab === 'realEstate' ? t.plans : t.plans_videomaker;

    // Helper to get packages as array
    const getPackages = () => {
        if (activeTab === 'realEstate') {
            return [
                { ...t.plans.packages.single, highlight: false, isUltra: false },
                { ...t.plans.packages.pack5, highlight: true, isUltra: false },
                { ...t.plans.packages.pack10, highlight: false, isUltra: false },
                { ...t.plans.packages.ultra, highlight: false, isUltra: true }
            ];
        } else {
            return [
                { ...t.plans_videomaker.packages.starter, highlight: false, isUltra: false },
                { ...t.plans_videomaker.packages.pro, highlight: true, isUltra: false },
                { ...t.plans_videomaker.packages.expert, highlight: false, isUltra: false },
                { ...t.plans_videomaker.packages.agency, highlight: false, isUltra: true }
            ];
        }
    };

    const packages = getPackages();

    return (
        <main className="min-h-screen bg-white text-black pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
                        {currentPlans.title}
                    </h1>
                    <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide uppercase mb-8">
                        {currentPlans.subtitle}
                    </p>

                    {/* Toggle Switch */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-zinc-100 p-1 rounded-full inline-flex relative">
                            <motion.div
                                className="absolute top-1 bottom-1 bg-black rounded-full shadow-md z-0"
                                initial={false}
                                animate={{
                                    x: activeTab === 'realEstate' ? 0 : '100%',
                                    width: '50%'
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                            <button
                                onClick={() => setActiveTab('realEstate')}
                                className={`relative z-10 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 w-40 ${activeTab === 'realEstate' ? 'text-white' : 'text-zinc-500 hover:text-black'
                                    }`}
                            >
                                {t.plans.toggle.realEstate}
                            </button>
                            <button
                                onClick={() => setActiveTab('videomaker')}
                                className={`relative z-10 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 w-40 ${activeTab === 'videomaker' ? 'text-white' : 'text-zinc-500 hover:text-black'
                                    }`}
                            >
                                {t.plans.toggle.videomaker}
                            </button>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-24">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col relative overflow-hidden ${pkg.isUltra ? 'bg-zinc-950 text-white' : 'bg-black text-white'
                                } ${pkg.highlight ? 'border-2 border-zinc-800' : ''}`}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                                    Popular
                                </div>
                            )}

                            <h3 className={`text-2xl font-bold mb-6 ${pkg.isUltra ? 'bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent' : ''}`}>
                                {pkg.name}
                            </h3>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.link/30umru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full py-4 text-center rounded-full font-medium tracking-wide text-sm transition-colors ${pkg.isUltra
                                    ? 'border border-zinc-700 hover:bg-white hover:text-black hover:border-white'
                                    : 'bg-white text-black hover:bg-zinc-200'
                                    }`}
                            >
                                {activeTab === 'realEstate' ? t.plans.cta : t.plans_videomaker.cta}
                            </a>
                        </div>
                    ))}
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
