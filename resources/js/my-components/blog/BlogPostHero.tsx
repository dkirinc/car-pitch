import { Link } from '@inertiajs/react';
import { ArrowLeft, CalendarDays, Tag } from 'lucide-react';

import { usePageText } from '@/hooks/usePageText';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { IBlogPostDetail } from '@/types/models';

type Props = {
    post: IBlogPostDetail;
};

export default function BlogPostHero({ post }: Props) {
    const { t } = usePageText();
    const brandName = post.car?.brand?.name ?? null;

    return (
        <section className="relative pb-20">
            <div className="relative h-72 overflow-hidden md:h-96">
                {post.cover_url ? (
                    <img
                        src={post.cover_url}
                        alt={post.title}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 bg-bg-surface-raised" />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-bg-base/70 via-bg-base/40 to-bg-base" />

                <div className="absolute bottom-6 left-0 w-full px-6 lg:px-12">
                    <div className="mx-auto max-w-4xl">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 border border-border-default bg-bg-base/60 px-4 py-2 text-[0.75rem] font-bold tracking-[0.1em] text-text-secondary uppercase backdrop-blur-sm transition-colors duration-200 hover:border-gold-border hover:text-gold"
                        >
                            <ArrowLeft className="size-4" />
                            {t('static', 'blogDetail.backCta')}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-20 max-w-4xl px-6 lg:px-12">
                <div className="border border-border-default bg-bg-surface p-8 md:p-12">
                    <div className="flex items-center gap-3">
                        {brandName && (
                            <span className="flex items-center gap-1.5 text-[0.75rem] font-bold tracking-[0.1em] text-gold uppercase">
                                <Tag className="size-3.5" />
                                {brandName}
                            </span>
                        )}
                        {post.published_at && (
                            <span className="flex items-center gap-1.5 text-[0.78rem] text-text-muted">
                                <CalendarDays className="size-3.5" />
                                {post.published_at}
                            </span>
                        )}
                    </div>

                    <Heading level="h1" extendClass="mt-4">
                        {post.title}
                    </Heading>

                    <Paragraph level="p1" extendClass="mt-6 text-gold">
                        {post.excerpt}
                    </Paragraph>

                    <div className="mt-8 border-t border-border-default pt-8">
                        <div
                            className="flex flex-col gap-4 text-text-secondary"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
