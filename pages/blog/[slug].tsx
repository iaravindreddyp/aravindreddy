import Layout from '../../components/styled/layout';
import dynamic from 'next/dynamic';
import {getAllPostIds, getPostData} from '../../lib/posts';
import {ReactElement} from 'react';
import StyledBlog from '../../components/styled/blog';

export default function BlogPost({ postData }: { postData:BlogPost}):ReactElement{
    const {AppLayout} = Layout;
    const { BlogPostMDXContent } = StyledBlog;
    const Post = dynamic(()=>import(`../../posts/${postData.slug}.mdx`));
    return(
        <AppLayout>
            {postData.title}
            <BlogPostMDXContent>
                <Post />
            </BlogPostMDXContent>
        </AppLayout>
    );

}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }:{params:{'slug':string}}) {
    
    
    const postData = getPostData(params.slug);
    return {
        props: {
            postData
        }
    };
}