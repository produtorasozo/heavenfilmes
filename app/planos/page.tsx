'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

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
        <main className="relative z-10 min-h-screen text-fg pt-[calc(var(--header-height)+3rem)] md:pt-[calc(var(--header-height)+5rem)] pb-(--section-y)">
            <div className="container-page">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="type-display text-display mb-4 md:mb-6">
                        {currentPlans.title}
                    </h1>
                    <p className="type-label text-fg max-w-2xl mx-auto mb-10">
                        {currentPlans.subtitle}
                    </p>

                    {/* Toggle: square segmented control */}
                    <div className="flex justify-center">
                        <div className="inline-grid grid-cols-2 border border-border-strong bg-background relative" role="group">
                            <motion.div
                                className="absolute inset-y-0 left-0 w-1/2 bg-fg z-0"
                                initial={false}
                                animate={{ x: activeTab === 'realEstate' ? 0 : '100%' }}
                                transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
                                aria-hidden="true"
                            />
                            <button
                                aria-pressed={activeTab === 'realEstate'}
                                onClick={() => setActiveTab('realEstate')}
                                className={`type-label relative z-10 min-h-11 px-4 sm:px-6 py-3 transition-colors duration-(--duration-instant) ease-standard ${activeTab === 'realEstate' ? 'text-fg-inverse' : 'text-fg-muted hover:text-fg'}`}
                            >
                                {t.plans.toggle.realEstate}
                            </button>
                            <button
                                aria-pressed={activeTab === 'videomaker'}
                                onClick={() => setActiveTab('videomaker')}
                                className={`type-label relative z-10 min-h-11 px-4 sm:px-6 py-3 transition-colors duration-(--duration-instant) ease-standard ${activeTab === 'videomaker' ? 'text-fg-inverse' : 'text-fg-muted hover:text-fg'}`}
                            >
                                {t.plans.toggle.videomaker}
                            </button>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-14 md:mb-20">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-6 md:p-8 border transition-colors duration-(--duration-base) ease-out-cubic ${pkg.highlight
                                ? 'border-border-strong'
                                : 'border-border hover:border-border-muted'
                                } bg-surface`}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 right-0 bg-fg text-fg-inverse type-label text-caption px-3 py-1.5">
                                    Popular
                                </div>
                            )}

                            <h3 className="type-display text-h2 mb-6 pr-16">
                                {pkg.name}
                            </h3>

                            <ul className="space-y-3 mb-10 flex-grow">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-fg-muted">
                                        <span className="mt-2 w-1.5 h-1.5 bg-fg flex-shrink-0" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                href="https://wa.link/30umru"
                                external
                                variant={pkg.highlight ? 'primary' : 'outline'}
                                className="w-full min-w-0"
                            >
                                {activeTab === 'realEstate' ? t.plans.cta : t.plans_videomaker.cta}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button href="https://wa.link/30umru" external variant="link">
                        {t.plans.contact_button}
                    </Button>
                </div>
            </div>
        </main>
    );
}
