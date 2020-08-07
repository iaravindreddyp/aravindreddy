import React, { ReactElement } from 'react';
import Link from 'next/link';
import StyledNavBar from './styled/styledNav';
import NavLinkHoc from './navLinkHoc';

const name = 'Aravind Reddy';
const designation = 'Software Developer';

const NavBar=():ReactElement=>{
    const {NavContainer, Profile, ProfileImage, ProfileName,
        ProfileDesignation, ProfileText, ProfileImageContainer, Nav,
        NavItem} = StyledNavBar;
    return(
        <NavContainer>
            <Profile>
                <Link href="/"><ProfileImageContainer><ProfileImage src="/profile.webp" alt="aravind reddy's image" /></ProfileImageContainer></Link>
                <ProfileText>
                    <Link href='/'><ProfileName>{name}</ProfileName></Link>
                    <ProfileDesignation>{designation}</ProfileDesignation>
                </ProfileText>
            </Profile>
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