import React, { ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StyledNav from './styled/styledNav';

const NavLinkHoc=({href, children}:{href:string, children:string}):ReactElement=>{
    const {NavLink} =  StyledNav;
    const router = useRouter();
    const isActiveRoute = router.pathname===href;
    return (
        <Link href={href}><NavLink isActiveRoute={isActiveRoute}>{children}</NavLink></Link>);
};

export default NavLinkHoc;