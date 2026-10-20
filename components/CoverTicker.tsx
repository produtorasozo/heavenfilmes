'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Cover, covers } from '@/utils/covers';

// Seconds each cover takes to cross the strip; keeps the speed constant
// no matter how many covers there are.
const SECONDS_PER_COVER = 5;
const MIN_SET = 12;

export default function CoverTicker() {
    const { t } = useLanguage();

    if (covers.length === 0) return null;

    // One "set" must be wider than the widest screen (12 × 225px ≈ 2700px),
    // so short lists are repeated until they reach MIN_SET covers.
    const set: Cover[] = [];
    while (set.length < MIN_SET) set.push(...covers);

    // The set is rendered twice so translating by -50% loops seamlessly
    const loop = [...set, ...set];

    return (
        <section
            aria-label={t.projects.title}
            className="relative z-10 h-70 md:h-100 w-full overflow-hidden select-none"
        >
            <div
                className="cover-ticker flex h-full w-max"
                style={{ animationDuration: `${set.length * SECONDS_PER_COVER}s` }}
            >
                {loop.map((cover, i) => (
                    <div key={i} className="relative h-full aspect-[9/16] shrink-0" aria-hidden={i >= covers.length}>
                        <Image
                            src={cover.src}
                            alt={i < covers.length ? cover.title : ''}
                            fill
                            loading="eager"
                            sizes="(min-width: 768px) 225px, 158px"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Radial shade so the brand reads over the covers */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-(image:--gradient-ticker) pointer-events-none">
                <p className="type-wordmark text-[clamp(1.125rem,5.6vw,1.75rem)] sm:text-h1 md:text-display text-fg whitespace-nowrap [text-shadow:var(--shadow-text-on-media)]">
                    Created in Heaven
                </p>
                <p className="type-label text-fg [text-shadow:var(--shadow-text-on-media)]">
                    {t.hero.role}
                </p>
            </div>
        </section>
    );
}
