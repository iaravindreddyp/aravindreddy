import React, { ReactElement, Fragment } from 'react';
import {GetStaticProps} from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Layouts from '../components/styled/layout';
import {getAllPosts} from '../lib/posts';
import StyledBlog from '../components/styled/blog';

const Index = ({posts}:{posts:BlogPost[]}): ReactElement => {
    const { AppLayout, Line } = Layouts;
    const { DateStamp,  BlogPostPreviewCard, PreviewTitle, PreviewSummary, RouteTitle} = StyledBlog; 
    return (
        <Fragment>
            <Head>
                <title>Blog &mdash; Aravind Reddy</title>
                <link rel="icon" href="/profile.webp" />
                <meta
                    name="description"
                    content="Aravind Reddy's list of blog posts"
                />
                <meta
                    name="author"
                    content="Aravind Reddy"
                />
            </Head>
            <AppLayout>
                <RouteTitle>Articles</RouteTitle>
                {posts.map((post, index)=>(
                    <Fragment key={`${post.slug}`}>
                        <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={`${post.slug}`}>
                            <BlogPostPreviewCard>
                                <PreviewTitle>{post.title}</PreviewTitle>
                                <DateStamp>
                                    {post.publishedDate}
                                </DateStamp>
                                <PreviewSummary>{post.summary}</PreviewSummary>
                            </BlogPostPreviewCard>
                        </Link>
                        {posts.length > index + 1 && <Line /> }
                    </Fragment>
                ))}
            </AppLayout>
        </Fragment>
    );
};

export async function getStaticProps() {
    const posts: BlogPost[] = getAllPosts();

    return {
        props: { posts },
    };
}

export default Index;