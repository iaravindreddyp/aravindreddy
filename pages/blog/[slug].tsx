import Layout from '../../components/styled/layout';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import {getAllPosts} from '../../lib/posts';
import {ReactElement, Fragment} from 'react';
import StyledBlog from '../../components/styled/blog';

export default function BlogPost({ post }: { post: BlogPost}):ReactElement{
    const {AppLayout} = Layout;
    const { BlogPostMDXContent, BlogTitle, DateStamp, Author } = StyledBlog;
    const Content = dynamic(()=>import(`../../posts/${post.slug}.mdx`));
    return(
        <Fragment>
            <Head>
                <title>Blog &mdash; Aravind Reddy</title>
                <link rel="icon" href="/profile.webp" />
                <meta
                    name="description"
                    content="Aravind Reddy's blog article"
                />
                <meta
                    name="author"
                    content="Aravind Reddy"
                />
            </Head>
            <AppLayout>
                <BlogTitle>
                    {post.title}
                </BlogTitle>
                <Author>Aravind Reddy - </Author>
                <DateStamp>
                    {post.publishedDate}
                </DateStamp>
                <BlogPostMDXContent>
                    <Content />
                </BlogPostMDXContent>
            </AppLayout>
        </Fragment>
    );

}

export async function getStaticPaths() {
    const paths = getAllPosts().map(post=>({params:{slug:post.slug}}));
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }:{params:{'slug':string}}) {
    
    const post = getAllPosts().find((post)=>post.slug===params.slug);
    return {
        props: {
            post
        }
    };
}