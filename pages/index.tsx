import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ReactElement } from 'react';

export default function Home():ReactElement {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Aravind Reddy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            HI
        </div>
    );
}
