import React, { ReactElement } from 'react';
import StyledNavBar from './styled/styledNav';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiStackoverflow } from 'react-icons/di';

export const NavBar=():ReactElement=>{
    const {NavContainer} = StyledNavBar;
    const iconValue = { color: '#000', style: { verticalAlign: 'middle', fontSize: '25px' } };
    return(
        <NavContainer>
            <IconContext.Provider value={iconValue}>
                <AiFillLinkedin />
                <AiFillTwitterCircle />
                <DiStackoverflow />
            </IconContext.Provider>
        </NavContainer>
    );
};