import { ReactElement } from 'react';
import Head from 'next/head';
const name = 'Aravind Reddy';

const Layout=({children}:{children:ReactElement}):ReactElement=>{
    return(<>
        <Head>
            <title>Home - {name}</title>
            <link rel="icon" href="/profile.png" />
        </Head>
        <main>{children}</main>
    </>);
};

export default Layout;