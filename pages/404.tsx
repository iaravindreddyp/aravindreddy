import React from 'react';
import Link from 'next/link';
import Layouts from '../components/styled/layout';

const PageNotFound=()=>{
    const {StyledBackHome} = Layouts;
    return(
        <>
            <img src="/404.gif" alt="coming soon gif" />
            <StyledBackHome>
                <Link href="/"><a>👈 Back Home</a></Link>
            </StyledBackHome>
        </>
    );
};

export default PageNotFound;