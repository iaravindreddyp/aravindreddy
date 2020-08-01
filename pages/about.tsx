import React, {ReactElement} from 'react';
import Link from 'next/link';
import Layouts from '../components/styled/layout';

const About=():ReactElement=>{
    const {StyledBackHome} = Layouts;
    return(
        <>
            <img src="/comingsoon.gif" alt="coming soon gif" />
            <StyledBackHome>
                <Link href="/"><a>👈 Back Home</a></Link>
            </StyledBackHome>
        </>
    );
};

export default About;