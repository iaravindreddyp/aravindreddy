import React, { ReactElement, Fragment } from 'react';
import {GetStaticProps} from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Head from 'next/head';
import Layouts from '../components/styled/layout';
import {getAllPosts} from '../lib/posts';
import StyledBlog from '../components/styled/blog';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Index = ({posts, files, DIR}:{posts:BlogPost[], files:any, DIR:any}): ReactElement => {
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
                {(posts.length>0)?posts.map((post, index)=>(
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
                )):<Fragment>
                    <div>goneee</div>
                    <div>{DIR}</div>
                    <div>{files}</div>
                </Fragment>}
            </AppLayout>
        </Fragment>
    );
};

export async function getStaticProps() {
    const posts: BlogPost[] = getAllPosts();
    const DIR = path.join(process.cwd(), 'posts');
    const files = fs.readdirSync(DIR).filter((file) => file.endsWith('.mdx'));
    return {
        props: { posts, files, DIR },
    };
}

export default Index;