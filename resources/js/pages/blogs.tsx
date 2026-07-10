import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import HomepageLayout from '@/layouts/homepage-layout';
import BlogsListSection from '@/my-components/blogs/BlogsListSection';
import type { IBlogPost } from '@/types/models';

type Props = {
    posts: IBlogPost[];
};

function Blogs({ posts }: Props) {
    return (
        <>
            <Head title="Blog — Auto Lider" />
            <BlogsListSection posts={posts} />
        </>
    );
}

Blogs.layout = (page: ReactNode) => <HomepageLayout>{page}</HomepageLayout>;

export default Blogs;
