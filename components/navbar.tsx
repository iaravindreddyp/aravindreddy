import React, { ReactElement } from 'react';
import Link from 'next/link';
import StyledNavBar from './styled/styledNav';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiStackoverflow } from 'react-icons/di';
import NavLinkHoc from './navLinkHoc';

const name = 'Aravind Reddy';
const designation = 'Software Developer';

const NavBar=():ReactElement=>{
    const {NavContainer, Profile, ProfileImage, ProfileName,
        ProfileDesignation, ProfileText, ContactLinks, IconContainer, ProfileImageContainer, Nav,
        NavItem, NavLink} = StyledNavBar;
    const iconValue = { color: '#000', style: { verticalAlign: 'middle', fontSize: '30px' } };
    return(
        <NavContainer>
            <Profile>
                <Link href="/"><ProfileImageContainer><ProfileImage src="/profile.jpg" srcSet="profile@64.jpg 64w, profile.jpg 414w" sizes="414px" alt="aravind reddy's image" /></ProfileImageContainer></Link>
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
                    <NavItem><NavLinkHoc href="/">Home</NavLinkHoc></NavItem>
                    <NavItem><NavLinkHoc href="/blog">Blog</NavLinkHoc></NavItem>
                    <NavItem><NavLinkHoc href="/about">About</NavLinkHoc></NavItem>
                </ul>
            </Nav>
        </NavContainer>
    );
};

export default NavBar;