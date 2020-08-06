import Head from 'next/head';
import Link from 'next/link';
import { ReactElement, Fragment } from 'react';
import StyledHome from '../components/styled/styledHome';
import Layout from '../components/styled/layout';
import {getSortedPostsData} from '../lib/posts';

export default function Home({allPostsData}:{allPostsData:BlogPost[]}):ReactElement {
    const {HomeView, Title, Center, AboutText} = StyledHome;
    const {AppLayout, Line, TextHighlighter, LinkHighlighter} = Layout;
    return (
        <HomeView>
            <Head>
                <title>Home — Aravind Reddy</title>
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
                <Center><Title><b><TextHighlighter>Hey</TextHighlighter>, I&apos;m Aravind Reddy!</b><br /></Title></Center>
                <AboutText>A passionately curious software developer from India in love with problem solving and playing with 0&apos;s and 1&apos;s (code💻 ).</AboutText>
                <AboutText>I have worked with multiple programming languages & Technologies like Javascript, c#, Typescript, ReactJs, React-Native till now and 
                 continue to add others in my arsenal.
                </AboutText>
                <AboutText>
                    Know more about me and my contact info <Link href='/about'><LinkHighlighter>here 👉</LinkHighlighter></Link>.
                </AboutText>
                <h2>Recent Articles</h2>
                <section>
                    {allPostsData.map(({ slug, publishedDate, title }, index) => (
                        <Fragment key={slug}>
                            <div>{title}-{publishedDate}</div>
                            {allPostsData.length > index + 1 && <Line />}
                        </Fragment>
                    ))}
                </section>
            </AppLayout>
        </HomeView>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    };
}