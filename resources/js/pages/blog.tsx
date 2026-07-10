import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import HomepageLayout from '@/layouts/homepage-layout';
import BlogGallery from '@/my-components/blog/BlogGallery';
import BlogPostCta from '@/my-components/blog/BlogPostCta';
import BlogPostHero from '@/my-components/blog/BlogPostHero';
import type { IBlogPostDetail } from '@/types/models';

type Props = {
    post: IBlogPostDetail;
};

function Blog({ post }: Props) {
    return (
        <>
            <Head title={`${post.title} — Auto Lider`} />
            <BlogPostHero post={post} />
            <BlogGallery images={post.gallery} />
            <BlogPostCta />
        </>
    );
}

Blog.layout = (page: ReactNode) => <HomepageLayout>{page}</HomepageLayout>;

export default Blog;
