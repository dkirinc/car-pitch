import { ArrowLeft, ArrowRight } from 'lucide-react';

type Props = {
    onPrev?: () => void;
    onNext?: () => void;
};

export function NavArrows({ onPrev, onNext }: Props) {
    return (
        <div className="flex gap-2">
            <button
                type="button"
                onClick={onPrev}
                aria-label="Prethodno"
                className="flex size-10 items-center justify-center border border-border-default text-text-secondary transition-colors duration-200 hover:border-gold-border hover:text-gold"
            >
                <ArrowLeft className="size-4" />
            </button>
            <button
                type="button"
                onClick={onNext}
                aria-label="Sljedeće"
                className="flex size-10 items-center justify-center border border-border-default text-text-secondary transition-colors duration-200 hover:border-gold-border hover:text-gold"
            >
                <ArrowRight className="size-4" />
            </button>
        </div>
    );
}
