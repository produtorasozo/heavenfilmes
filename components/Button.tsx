import Link from 'next/link';
import { ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'link';

const base =
    'type-label inline-flex items-center justify-center whitespace-nowrap rounded-none ' +
    'transition-colors ease-standard';

const variants: Record<Variant, string> = {
    // Solid fill: white on black, the strongest action on a page
    primary:
        'min-h-11 px-7 bg-accent text-accent-fg duration-(--duration-instant) hover:bg-accent-hover',
    // 1px white outline that inverts on hover (used over imagery)
    outline:
        'min-h-11 min-w-[12.5em] px-6 border border-border-strong bg-ghost text-fg ' +
        'duration-(--duration-instant) hover:bg-fg hover:text-fg-inverse',
    // Underlined text link; underline drops on hover
    link:
        'min-h-11 underline underline-offset-4 text-fg duration-(--duration-base) ease-out-cubic hover:no-underline',
};

type ButtonProps = {
    href: string;
    variant?: Variant;
    external?: boolean;
    className?: string;
    children: ReactNode;
};

export default function Button({ href, variant = 'outline', external = false, className = '', children }: ButtonProps) {
    const classes = `${base} ${variants[variant]} ${className}`;

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}
