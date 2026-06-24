import { type ReactNode, useMemo } from 'react';

type HeadingLevel = 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
    children: ReactNode;
    level?: HeadingLevel;
    extendClass?: string;
    overrideClass?: string;
    skipMdBreakpoint?: boolean;
};

export const Heading = ({
    children,
    level = 'h6',
    extendClass = '',
    overrideClass = '',
}: HeadingProps) => {
    const renderClass = useMemo(() => {
        const classNames: Record<HeadingLevel, string> = {
            h0: 'text-foreground text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05]',
            h1: 'text-foreground text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-[1.1]',
            h2: 'text-foreground text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.15]',
            h3: 'text-foreground text-[1.3rem] font-semibold leading-[1.3]',
            h4: 'text-foreground text-[1.1rem] font-semibold leading-[1.4]',
            h5: 'text-foreground text-[0.95rem] font-semibold leading-[1.4]',
            h6: 'text-foreground text-[0.85rem] font-semibold leading-[1.4]',
        };

        return classNames[level];
    }, [level]);

    const totalClassName =
        overrideClass === ''
            ? `cursor-default ${renderClass} font-display ${extendClass}`
            : overrideClass;

    switch (level) {
        case 'h0':
            return <span className={totalClassName}>{children}</span>;
        case 'h1':
            return <h1 className={totalClassName}>{children}</h1>;
        case 'h2':
            return <h2 className={totalClassName}>{children}</h2>;
        case 'h3':
            return <h3 className={totalClassName}>{children}</h3>;
        case 'h4':
            return <h4 className={totalClassName}>{children}</h4>;
        case 'h5':
            return <h5 className={totalClassName}>{children}</h5>;
        default:
            return <h6 className={totalClassName}>{children}</h6>;
    }
};
