import {AppProps} from 'next/app';
import { ReactElement } from 'react';
import '../styles/globals.css';
import StyledLayouts from '../components/styled/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }:AppProps):ReactElement {
    const {AppView} = StyledLayouts;
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <AppView>
                <Component {...pageProps} />
            </AppView>
        </>
    );
}

export default MyApp;
