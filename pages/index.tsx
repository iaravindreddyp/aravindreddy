import Head from 'next/head';
import { ReactElement } from 'react';
import StyledHome from '../components/styled/styledHome';
import Layout from '../components/styled/layout';

export default function Home():ReactElement {
    const {HomeView, Title, Center, AboutText, TextHighlighter} = StyledHome;
    const {AboutLayout} = Layout;
    return (
        <HomeView>
            <Head>
                <title>Home - Aravind Reddy</title>
                <link rel="icon" href="/profile.png" />
            </Head>
            <AboutLayout>
                <Center><Title><b><TextHighlighter>Hey</TextHighlighter>, I&apos;m Aravind Reddy!</b><br /></Title></Center>
                <AboutText>A passionately curious software developer from India in love with problem solving and playing with 0&apos;s and 1&apos;s (code💻).</AboutText>
                <AboutText>I have worked with multiple programming languages & Technologies like Javascript, c#, Typescript, ReactJs, React-Native till now and 
                 continue to add others in my arsenal.
                </AboutText>
                <AboutText>
                    I&apos;m currently working as <TextHighlighter>Applications Engineer</TextHighlighter> at <TextHighlighter>Oracle</TextHighlighter>. My day to day work involve working with tech including but not limited to Nodejs, 
                    Express and Typescript in the backend and Ojet in the UI.
                </AboutText>
                <AboutText>I also enjoy contributing to open source and writing automation scripts.</AboutText>
            </AboutLayout>
        </HomeView>
    );
}
