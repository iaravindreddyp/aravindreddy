import Layout from '../../components/styled/layout';
import dynamic from 'next/dynamic';
import {getAllPosts, getPostData} from '../../lib/posts';
import {ReactElement} from 'react';
import StyledBlog from '../../components/styled/blog';

export default function BlogPost({ post }: { post: BlogPost}):ReactElement{
    const {AppLayout} = Layout;
    const { BlogPostMDXContent, BlogTitle, DateStamp } = StyledBlog;
    const Content = dynamic(()=>import(`../../posts/${post.slug}.mdx`));
    return(
        <AppLayout>
            <BlogTitle>
                {post.title}
            </BlogTitle>
            <DateStamp>
                {post.publishedDate}
            </DateStamp>
            <BlogPostMDXContent>
                <Content />
            </BlogPostMDXContent>
        </AppLayout>
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