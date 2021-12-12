import Head from 'next/head';
import { ReactElement } from 'react';
import StyledHome from '../components/styled/styledHome';
import Layouts from '../components/styled/layout';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillMail, AiFillGithub } from 'react-icons/ai';
import { DiStackoverflow } from 'react-icons/di';

export default function Home():ReactElement {
    const { HomeView, Center, ContactHeading, ContactIconsContainer, ContactLink  } = StyledHome;
    const { LinkHighlighter, AboutText, AppLayout, TextHighlighter } = Layouts;
    const iconValue = { color: '#5B34DA', style: { verticalAlign: 'middle', fontSize: '30px' } };
    return (
        <HomeView>
            <Head>
                <title>Home &mdash; Aravind Reddy</title>
                <link rel="icon" href="/profile.webp" />
                <meta
                    name="description"
                    content="intro to aravind reddy, what he does" 
                />
                <meta
                    name="author"
                    content="Aravind Reddy"
                />
            </Head>
            <AppLayout>
                <Center><h1><b><TextHighlighter>Hey</TextHighlighter>, I&apos;m Aravind Reddy!</b><br /></h1></Center>
                <AboutText>A passionate software developer/engineer from India.</AboutText>
                <AboutText>I currently work as a {' '}
                    <TextHighlighter>Software Engineer</TextHighlighter> 
                    {' '}at Spreadsheet.com. My current role involve working with tech including but not limited to Nodejs, 
                    Express and ReactJs.</AboutText>
                <AboutText>Outside of my work, I enjoy contributing to open source projects and answering questions on Stackoverflow.
                </AboutText> 
                <AboutText>I&apos;m an active answerer/user on Stackoverflow especially in Javascript,
                            ReactJs and React-Native tags,I&apos;m also part of the top 5% answerers in ReactJs & Javascript technologies on {' '}
                <LinkHighlighter rel="noreferrer" href="https://stackoverflow.com/users/8034782/aravind-reddy?tab=profile" target="_blank">Stackoverflow</LinkHighlighter>
                            , with more than 4k reputation overall.
                </AboutText>
                <ContactHeading>Contact</ContactHeading>
                <AboutText> If you want to get in touch, send me an email at {' '}
                    {' '}or find me else where on the internet.
                </AboutText>
                <ContactIconsContainer>
                    <IconContext.Provider value={iconValue}>
                        <ContactLink 
                            href="mailto:reddy.aravind178@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Aravind Reddy's Email">
                            <AiFillMail />
                        </ContactLink>
                        <ContactLink
                            href="https://www.linkedin.com/in/aravind-reddy-parapatakam-0a4b21106/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Aravind Reddy's Linkedin"
                        >
                            <AiFillLinkedin />
                        </ContactLink>
                        <ContactLink
                            href="https://stackoverflow.com/users/8034782/aravind-reddy?tab=profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Aravind Reddy's Stackoverflow"
                        >
                            <DiStackoverflow />
                        </ContactLink>    
                        <ContactLink
                            href="https://github.com/iaravindreddyp"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Aravind Reddy's github"
                        >
                            <AiFillGithub />
                        </ContactLink>
                        <ContactLink 
                            href="https://twitter.com/iaravindreddyp"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Aravind Reddy's twitter"
                        >
                            <AiFillTwitterCircle />
                        </ContactLink>
                    </IconContext.Provider>
                </ContactIconsContainer>
            </AppLayout>
        </HomeView>
    );
}