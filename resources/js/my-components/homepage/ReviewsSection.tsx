import { usePageText } from '@/hooks/usePageText';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { StarRating } from '@/my-components/shared/StarRating';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { IReview } from '@/types/models';

type Props = {
    reviews: IReview[];
};

function ReviewCard({ review }: { review: IReview }) {
    return (
        <div className="flex flex-col gap-5 border border-border-default bg-bg-surface p-6">
            <StarRating rating={review.rating} />

            <Paragraph level="p2" extendClass="text-text-secondary flex-1 leading-relaxed">
                {review.content}
            </Paragraph>

            <div className="flex items-center gap-3 border-t border-border-default pt-5">
                <div className="flex size-10 flex-none items-center justify-center bg-gold-subtle border border-gold-border">
                    <span className="font-display text-[0.78rem] font-semibold text-gold">
                        {review.author_initials}
                    </span>
                </div>
                <div>
                    <Paragraph level="p3" extendClass="text-text-primary font-semibold">
                        {review.author_name}
                    </Paragraph>
                    <Paragraph level="p4" extendClass="text-text-muted">
                        {review.car_model}
                    </Paragraph>
                </div>
            </div>
        </div>
    );
}

export default function ReviewsSection({ reviews }: Props) {
    const { t } = usePageText();

    if (reviews.length === 0) return null;

    return (
        <section className="bg-bg-surface py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mb-10">
                    <SectionEyebrow
                        label={t('static', 'reviews.eyebrow')}
                        title={t('static', 'reviews.title')}
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
