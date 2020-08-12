import React, {ReactElement} from 'react';
import Head from 'next/head';
import Layouts from '../components/styled/layout';
import StyledAbout from '../components/styled/styledAbout';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillMail, AiFillGithub } from 'react-icons/ai';
import { DiStackoverflow } from 'react-icons/di';


const About=():ReactElement=>{
    const { LinkHighlighter, AboutText, AppLayout, TextHighlighter } = Layouts;
    const { SectionHeading, ContactHeading, ContactIconsContainer, ContactLink } = StyledAbout;
    const iconValue = { color: '#5B34DA', style: { verticalAlign: 'middle', fontSize: '30px' } };
    return(
        <>
            <Head>
                <title>About — Aravind Reddy</title>
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
                <SectionHeading>About</SectionHeading>
                <AboutText><b>Hi</b>, I&apos;m Aravind Reddy a passionate software developer/engineer from India.</AboutText>
                <AboutText>I currently work as a {' '}
                    <TextHighlighter>Applications Engineer</TextHighlighter> 
                    {' '}at Oracle. My current role involve working with tech including but not limited to Nodejs, 
                    Express and Typescript in the backend and Oracle-jet in the UI.</AboutText>
                <AboutText>Outside of my work, I enjoy contributing to open source projects,
                        Currently am keeping an eye out for <LinkHighlighter rel="noreferrer" href="https://github.com/romefrontend/rome" target="_blank">rome</LinkHighlighter> and have made some contributions to it as well.
                          Checkout my open source activity at <LinkHighlighter rel="noreferrer" href="https://github.com/aravind1078" target="_blank">Github</LinkHighlighter>. 
                </AboutText> 
                <AboutText>I&apos;m an active answerer/user on Stackoverflow especially in Javascript,
                            ReactJs and React-Native tags,I&apos;m also part of the top 5% answerers in ReactJs & Javascript technologies on {' '}
                <LinkHighlighter rel="noreferrer" href="https://stackoverflow.com/users/8034782/aravind-reddy?tab=profile" target="_blank">Stackoverflow</LinkHighlighter>
                            , with more than 3k reputation overall.
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
                            href="https://github.com/aravind1078"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Aravind Reddy's github"
                        >
                            <AiFillGithub />
                        </ContactLink>
                        <ContactLink 
                            href="https://twitter.com/_aravindreddy_"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Aravind Reddy's twitter"
                        >
                            <AiFillTwitterCircle />
                        </ContactLink>
                    </IconContext.Provider>
                </ContactIconsContainer>
            </AppLayout>
        </>
    );
};

export default About;
