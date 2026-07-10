import { Link } from '@inertiajs/react';

import { usePageText } from '@/hooks/usePageText';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { IBlogPost } from '@/types/models';

export default function BlogCard({ post }: { post: IBlogPost }) {
    const { t } = usePageText();
    const brandName = post.car?.brand?.name ?? null;

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col border border-border-default bg-bg-surface transition-colors duration-200 hover:border-gold-border"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-bg-surface-raised">
                {post.cover_url ? (
                    <img
                        src={post.cover_url}
                        alt={post.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Paragraph level="p3" extendClass="text-text-muted">
                            {t('static', 'blogsPage.imagePlaceholder')}
                        </Paragraph>
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-center gap-2">
                    {brandName && (
                        <Paragraph
                            level="p4"
                            extendClass="text-gold uppercase tracking-[0.15em]"
                        >
                            {brandName}
                        </Paragraph>
                    )}
                    {brandName && post.published_at && (
                        <span className="text-text-muted">·</span>
                    )}
                    {post.published_at && (
                        <Paragraph level="p4" extendClass="text-text-muted">
                            {post.published_at}
                        </Paragraph>
                    )}
                </div>

                <Heading level="h4" extendClass="text-text-primary">
                    {post.title}
                </Heading>

                <Paragraph
                    level="p3"
                    extendClass="text-text-secondary line-clamp-3"
                >
                    {post.excerpt}
                </Paragraph>
            </div>
        </Link>
    );
}
