import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { useEffect } from 'react';
// import style from './style.css';

export default function Success() {
  useEffect(() => {
    confirm('Open Master Control + Agent?');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>CMID</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Login success! redirecting to electron app...
        </h1>
      </main>
    </div>
  );
}
