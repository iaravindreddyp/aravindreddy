import React, { ReactElement } from 'react';
import Link from 'next/link';
import StyledNavBar from './styled/styledNav';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiStackoverflow } from 'react-icons/di';

const name = 'Aravind Reddy';
const designation = 'Software Developer';

export const NavBar=():ReactElement=>{
    const {NavContainer, Profile, ProfileImage, ProfileName,
        ProfileDesignation, ProfileText, ContactLinks, IconContainer, ProfileImageContainer, Nav,
        NavItem, NavLink} = StyledNavBar;
    const iconValue = { color: '#000', style: { verticalAlign: 'middle', fontSize: '30px' } };
    return(
        <NavContainer>
            <Profile>
                <Link href="/"><ProfileImageContainer><ProfileImage src="/profile.jpg" alt="aravind reddy's image" /></ProfileImageContainer></Link>
                <ProfileText>
                    <Link href='/'><ProfileName>{name}</ProfileName></Link>
                    <ProfileDesignation>{designation}</ProfileDesignation>
                </ProfileText>
            </Profile>
            {/* <ContactLinks>
                <IconContext.Provider value={iconValue}>
                    <IconContainer>
                        <AiFillLinkedin /></IconContainer>
                    <IconContainer>
                        <AiFillTwitterCircle /></IconContainer>
                    <IconContainer>
                        <DiStackoverflow /></IconContainer>
                </IconContext.Provider>
            </ContactLinks> */}
            <Nav>
                <ul style={{padding:0}}>
                    <NavItem><NavLink>Home</NavLink></NavItem>
                    <NavItem><NavLink>Blog</NavLink></NavItem>
                    <NavItem><NavLink>About</NavLink></NavItem>
                </ul>
            </Nav>
        </NavContainer>
    );
};