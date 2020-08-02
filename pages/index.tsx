import Head from 'next/head';
import { ReactElement } from 'react';
import StyledHome from '../components/styled/styledHome';
import Layout from '../components/styled/layout';

export default function Home():ReactElement {
    const {HomeView, Title, Center, AboutText, TextHighlighter} = StyledHome;
    const {AboutLayout, List, ListItem, ExternalLink} = Layout;
    return (
        <HomeView>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/profile.png" />
                <meta
                    name="description"
                    content="intro to aravind reddy, where he works, what he loves doing" 
                />
                <meta
                    name="author"
                    content="Aravind Reddy"
                />
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
                <AboutText>Here are some things i do to keep my learning going:</AboutText>
                <AboutText>
                    <List>
                        <ListItem firstItem>I enjoy contributing to open source projects.
                        Currently am keeping an eye out for ROME and have already started contributing to it.
                          you can checkout my open source activity at <ExternalLink rel="noreferrer" href="https://github.com/aravind1078" target="_blank">Github</ExternalLink>.</ListItem>
                        <ListItem>am an active answerer on {' '}
                            <ExternalLink rel="noreferrer" href="https://stackoverflow.com/users/8034782/aravind-reddy?tab=profile" target="_blank">StackOverflow</ExternalLink> especially in Javascript, 
                            ReactJs and React-Native tags. This helps me to learn new things and patterns.I have more than 3k reputation on StackOverflow.</ListItem>
                    </List></AboutText>
            </AboutLayout>
        </HomeView>
    );
}
