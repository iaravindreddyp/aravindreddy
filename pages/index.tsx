import Head from 'next/head';
import Link from 'next/link';
import { ReactElement, Fragment } from 'react';
import StyledHome from '../components/styled/styledHome';
import Layout from '../components/styled/layout';
import { getAllPosts} from '../lib/posts';
import StyledBlog from '../components/styled/blog';

export default function Home({allPostsData}:{allPostsData:BlogPost[]}):ReactElement {
    const { HomeView, Center, AboutText, RecentArticlesHeader} = StyledHome;
    const {AppLayout, Line, TextHighlighter, LinkHighlighter} = Layout;
    const { DateStamp, BlogPostPreviewCard, PreviewTitle, PreviewSummary } = StyledBlog; 
    return (
        <HomeView>
            <Head>
                <title>Home &mdash; Aravind Reddy</title>
                <link rel="icon" href="/profile.webp" />
                <meta
                    name="description"
                    content="intro to aravind reddy, what he does, recent articles he posted" 
                />
                <meta
                    name="author"
                    content="Aravind Reddy"
                />
            </Head>
            <AppLayout>
                <Center><h1><b><TextHighlighter>Hey</TextHighlighter>, I&apos;m Aravind Reddy!</b><br /></h1></Center>
                <AboutText>A passionately curious software developer from India in love with problem solving and playing with 0&apos;s and 1&apos;s (code💻 ).</AboutText>
                <AboutText>I have worked with multiple programming languages & Technologies like Javascript, c#, Typescript, ReactJs, React-Native till now and 
                 continue to add others in my arsenal.
                </AboutText>
                <AboutText>
                    Know more about me and my contact info <Link href='/about'><LinkHighlighter>here 👉</LinkHighlighter></Link>.
                </AboutText>
                <RecentArticlesHeader>Recent Articles</RecentArticlesHeader>
                <section>
                    {allPostsData.slice(0, 2).map(({ slug, publishedDate, title, summary }, index) => {
                        return (
                            <Fragment key={`${slug}`}>
                                <Link href="/blog/[slug]" as={`/blog/${slug}`} key={`${slug}`}>
                                    <BlogPostPreviewCard>
                                        <PreviewTitle>{title}</PreviewTitle>
                                        <DateStamp>
                                            {publishedDate}
                                        </DateStamp>
                                        <PreviewSummary>{summary}</PreviewSummary>
                                    </BlogPostPreviewCard>
                                </Link>
                                {index<1 && <Line />}
                            </Fragment>
                        );})}
                </section>
            </AppLayout>
        </HomeView>
    );
}

export async function getStaticProps() {
    const allPostsData = getAllPosts();
    return {
        props: {
            allPostsData
        }
    };
}