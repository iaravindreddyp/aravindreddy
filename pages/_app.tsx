import {AppProps} from 'next/app';
import {MDXProvider} from '@mdx-js/react';
import { ReactElement } from 'react';
import '../styles/globals.css';
import StyledLayouts from '../components/styled/layout';
import Head from 'next/head';
import NavBar from '../components/navbar';
import {MDXCodeBlock} from '../lib/mdx';
import StyledBlog from '../components/styled/blog';

const MDXComponents = {
    p: StyledBlog.Text,
    pre: MDXCodeBlock,
    code: MDXCodeBlock
    // eslint-disable-next-line react/display-name
    //code: (props: JSX.IntrinsicAttributes & import('react').ClassAttributes<HTMLPreElement> & import('react').HTMLAttributes<HTMLPreElement>) => <pre style={{ color: 'tomato' }} {...props} />
};

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
            <MDXProvider components={MDXComponents}>
                <AppView>
                    <NavBar />
                    <Component {...pageProps} />
                </AppView>
            </MDXProvider>
        </>
    );
}

export default MyApp;
