import { usePageText } from '@/hooks/usePageText';
import { SectionEyebrow } from '@/my-components/shared/SectionEyebrow';
import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { IBlogPost } from '@/types/models';

import BlogCard from './BlogCard';

type Props = {
    posts: IBlogPost[];
};

export default function BlogsListSection({ posts }: Props) {
    const { t } = usePageText();

    return (
        <section className="bg-bg-base pt-36 pb-20 md:pt-44">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <SectionEyebrow label={t('static', 'blog.eyebrow')} />
                <Heading level="h1" extendClass="mt-4">
                    {t('static', 'blog.title')}
                </Heading>
                <Paragraph
                    level="p1"
                    extendClass="mt-4 max-w-2xl text-text-secondary"
                >
                    {t('static', 'blogsPage.subtitle')}
                </Paragraph>

                {posts.length > 0 ? (
                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-12 flex h-64 items-center justify-center border border-border-default bg-bg-surface">
                        <Paragraph level="p2" extendClass="text-text-muted">
                            {t('static', 'blogsPage.emptyState')}
                        </Paragraph>
                    </div>
                )}
            </div>
        </section>
    );
}
