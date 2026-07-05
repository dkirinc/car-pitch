import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Heading } from '@/my-components/typography/Heading';
import { Paragraph } from '@/my-components/typography/Paragraph';
import type { IBlogPost } from '@/types/models';

type Props = {
    posts: IBlogPost[];
};

function LargeBlogCard({ post }: { post: IBlogPost }) {
    const brandName = post.car?.brand?.name ?? null;

    return (
        <Link href={`/blog/${post.slug}`} className="group relative block h-full min-h-[500px] overflow-hidden bg-bg-surface-raised">
            {/* Image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-bg-surface-raised transition-transform duration-500 group-hover:scale-105">
                <Paragraph level="p3" extendClass="text-text-muted">
                    Slika objave
                </Paragraph>
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/60 to-transparent" />

            {/* Content at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
                {brandName && (
                    <Paragraph
                        level="p4"
                        extendClass="text-gold uppercase tracking-[0.15em] mb-2"
                    >
                        {brandName}
                    </Paragraph>
                )}
                <Heading level="h3" extendClass="text-text-primary line-clamp-2">
                    {post.title}
                </Heading>
            </div>
        </Link>
    );
}

function SmallBlogCard({ post }: { post: IBlogPost }) {
    const brandName = post.car?.brand?.name ?? null;

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-1 overflow-hidden border border-border-default bg-bg-surface transition-colors duration-200 hover:border-gold-border"
        >
            {/* Image */}
            <div className="relative w-36 flex-none overflow-hidden bg-bg-surface-raised">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <Paragraph level="p4" extendClass="text-text-muted text-center px-2">
                        Slika
                    </Paragraph>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-1.5 p-4">
                {brandName && (
                    <Paragraph
                        level="p4"
                        extendClass="text-gold uppercase tracking-[0.15em]"
                    >
                        {brandName}
                    </Paragraph>
                )}
                <Heading level="h4" extendClass="line-clamp-2 text-text-primary">
                    {post.title}
                </Heading>
            </div>
        </Link>
    );
}

export default function BlogSection({ posts }: Props) {
    if (posts.length === 0) return null;

    const [featured, ...rest] = posts;

    return (
        <section className="bg-bg-base py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Section header */}
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <Paragraph
                            level="p4"
                            extendClass="text-gold uppercase tracking-[0.25em] mb-3 flex items-center gap-3"
                        >
                            <span className="inline-block h-px w-6 bg-gold" />
                            Blog
                        </Paragraph>
                        <Heading level="h2">Najnovije objave</Heading>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="flex size-10 items-center justify-center border border-border-default text-text-secondary transition-colors duration-200 hover:border-gold-border hover:text-gold"
                                aria-label="Prethodno"
                            >
                                <ArrowLeft className="size-4" />
                            </button>
                            <button
                                type="button"
                                className="flex size-10 items-center justify-center border border-border-default text-text-secondary transition-colors duration-200 hover:border-gold-border hover:text-gold"
                                aria-label="Sljedeće"
                            >
                                <ArrowRight className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Asymmetric grid */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {/* Left — large featured card */}
                    {featured && <LargeBlogCard post={featured} />}

                    {/* Right — 3 smaller stacked cards */}
                    <div className="flex flex-col gap-5">
                        {rest.map((post) => (
                            <SmallBlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>

                {/* Footer link */}
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/blog"
                        className="text-[0.78rem] font-bold uppercase tracking-[0.15em] text-gold underline-offset-4 hover:underline"
                    >
                        Pogledaj sve objave →
                    </Link>
                </div>
            </div>
        </section>
    );
}
