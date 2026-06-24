import { type ReactNode, forwardRef } from 'react';

type ParagraphLevel = 'p1' | 'p2' | 'p3' | 'p4' | 'p0';

type ParagraphProps = {
    children: ReactNode;
    level?: ParagraphLevel;
    mdLevel?: ParagraphLevel | '';
    lgLevel?: ParagraphLevel | '';
    xlLevel?: ParagraphLevel | '';
    xxlLevel?: ParagraphLevel | '';
    extendClass?: string;
    overrideClass?: string;
};

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
    (
        {
            children,
            level = 'p1',
            mdLevel = '',
            lgLevel = '',
            xlLevel = '',
            xxlLevel = '',
            extendClass = '',
            overrideClass = '',
        },
        ref,
    ) => {
        const renderClass = (payload: ParagraphLevel | '', size: string) => {
            const classNames = [
                {
                    id: 'p0',
                    classes: ['text-[1.2rem]', 'leading-[1.85]', 'text-foreground'],
                },
                {
                    id: 'p1',
                    classes: ['text-[1.05rem]', 'leading-[1.85]', 'text-foreground'],
                },
                {
                    id: 'p2',
                    classes: ['text-[0.9rem]', 'leading-[1.75]', 'text-foreground'],
                },
                {
                    id: 'p3',
                    classes: [
                        'text-[0.78rem]',
                        'leading-[1.6]',
                        'text-foreground',
                    ],
                },
                {
                    id: 'p4',
                    classes: ['text-[0.68rem]', 'leading-[1]', 'text-foreground'],
                },
            ];

            const temp = classNames.find((pClass) => pClass.id === payload);

            if (!temp) return '';

            return temp.classes
                .map((cls) => (size === 'sm' ? cls : `${size}:${cls}`))
                .join(' ');
        };

        const className = [
            renderClass(level, 'sm'),
            renderClass(mdLevel, 'md'),
            renderClass(lgLevel, 'lg'),
            renderClass(xlLevel, 'xl'),
            renderClass(xxlLevel, '2xl'),
        ].join(' ');

        const totalClassName =
            overrideClass === ''
                ? `cursor-default ${className} font-sans ${extendClass}`
                : overrideClass;

        return (
            <p ref={ref} className={totalClassName}>
                {children}
            </p>
        );
    },
);

Paragraph.displayName = 'Paragraph';
