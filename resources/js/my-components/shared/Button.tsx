import { Download, Search, SlidersHorizontal } from 'lucide-react';
import { forwardRef } from 'react';

type ButtonColor =
    | 'black'
    | 'white'
    | 'download'
    | 'red'
    | 'search'
    | 'blue'
    | 'orange'
    | 'filter';

type Props = {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    color?: ButtonColor;
    onClick: () => void;
    extendClass?: string;
    overrideClass?: string;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
    (
        {
            label,
            color = 'black',
            onClick,
            extendClass = '',
            type = 'button',
            overrideClass = '',
            disabled = false,
        },
        ref,
    ) => {
        const renderColorClass = (color: ButtonColor) => {
            const map = {
                black: 'bg-bg-base text-text-primary hover:bg-bg-surface',
                white: 'bg-white text-bg-base hover:bg-white/90 border border-border',
                download: 'bg-bg-surface text-text-primary hover:bg-bg-surface-raised border border-border-default',
                red: 'bg-destructive text-white hover:bg-destructive/80',
                search: 'bg-bg-base text-text-primary hover:bg-bg-surface',
                blue: `border border-gold-border text-gold bg-transparent ${disabled ? '' : 'hover:border-gold/60'}`,
                orange: `bg-gold text-bg-base ${disabled ? '' : 'hover:bg-gold-dark'}`,
                filter: 'bg-transparent text-text-primary border border-border-default hover:border-gold-border flex gap-2',
            };

            return map[color];
        };

        const baseClass =
            'inline-flex items-center justify-center px-[30px] py-[14px] text-[0.78rem] font-bold tracking-[0.15em] ';

        const className =
            overrideClass === ''
                ? `${baseClass} ${renderColorClass(color)} ${extendClass} ${disabled ? 'opacity-50 ' : 'transition-colors duration-200 cursor-pointer'}`
                : overrideClass;

        return (
            <button
                ref={ref}
                className={className}
                onClick={disabled ? () => {} : onClick}
                type={type}
            >
                {color === 'download' ? (
                    <span className="flex items-center gap-2 text-sm leading-5.25">
                        <Download className="size-4" color="gray" />
                        {label}
                    </span>
                ) : color === 'search' ? (
                    <span className="flex items-center gap-2 text-sm leading-5.25">
                        <Search className="size-4" color="white" />
                        {label}
                    </span>
                ) : color === 'filter' ? (
                    <span className="flex items-center gap-2 text-sm leading-5.25">
                        <SlidersHorizontal className="size-4" color="black" />
                        {label}
                    </span>
                ) : (
                    <span className="text-sm leading-5.25">{label}</span>
                )}
            </button>
        );
    },
);

Button.displayName = 'Button';
