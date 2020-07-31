import Head from 'next/head';
import { ReactElement } from 'react';
import StyledHome from '../components/styled/styledHome';
import Layout from '../components/layout';

export default function Home():ReactElement {
    const {HomeView} = StyledHome;
    return (
        <Layout isHome>
            <HomeView>
                <Head>
                    <title>Home - Aravind Reddy</title>
                    <link rel="icon" href="/profile.png" />
                </Head>
            </HomeView>
        </Layout>
    );
}
