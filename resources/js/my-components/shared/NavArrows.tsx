import { ArrowLeft, ArrowRight } from 'lucide-react';

import { usePageText } from '@/hooks/usePageText';

type Props = {
    onPrev?: () => void;
    onNext?: () => void;
};

export function NavArrows({ onPrev, onNext }: Props) {
    const { t } = usePageText();

    return (
        <div className="flex gap-2">
            <button
                type="button"
                onClick={onPrev}
                aria-label={t('static', 'navArrows.prevAria')}
                className="flex size-10 items-center justify-center border border-border-default text-text-secondary transition-colors duration-200 hover:border-gold-border hover:text-gold"
            >
                <ArrowLeft className="size-4" />
            </button>
            <button
                type="button"
                onClick={onNext}
                aria-label={t('static', 'navArrows.nextAria')}
                className="flex size-10 items-center justify-center border border-border-default text-text-secondary transition-colors duration-200 hover:border-gold-border hover:text-gold"
            >
                <ArrowRight className="size-4" />
            </button>
        </div>
    );
}
