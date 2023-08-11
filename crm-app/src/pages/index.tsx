import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Login from '@/components/Login';

export default function Home() {
  return (
    <>
      <Head>
        <title>CRM #5</title>
        <meta name="description" content="crm facturation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Login />  
      </main>
    </>
  )
}
