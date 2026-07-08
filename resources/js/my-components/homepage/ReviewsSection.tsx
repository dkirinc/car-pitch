import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { IReview } from '@/types/models';

type Props = {
    reviews: IReview[];
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    className={`size-3.5 ${i < rating ? 'text-gold' : 'text-border-default'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

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
    if (reviews.length === 0) return null;

    return (
        <section className="bg-bg-surface py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mb-10">
                    <SectionEyebrow label="Recenzije" title="Zadovoljne stranke" />
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
