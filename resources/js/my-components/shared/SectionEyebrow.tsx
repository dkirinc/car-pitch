import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';

type Props = {
    label: string;
    title?: string;
    align?: 'left' | 'center';
    extendClass?: string;
};

export function SectionEyebrow({ label, title, align = 'left', extendClass = '' }: Props) {
    const alignClass = align === 'center' ? 'justify-center' : '';

    return (
        <div className={`flex flex-col gap-3 ${extendClass}`}>
            <Paragraph
                level="p4"
                extendClass={`text-gold uppercase tracking-[0.25em] flex items-center gap-3 ${alignClass}`}
            >
                <span className="inline-block h-px w-6 flex-none bg-gold" />
                {label}
            </Paragraph>
            {title && <Heading level="h2">{title}</Heading>}
        </div>
    );
}
