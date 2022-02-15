import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mundo Movéis</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <img width="300em" src="logo.png" alt="" srcset="" />
        </h1>

        <p className={styles.description}>

          <code className={styles.code}>LINHA ECO FRIENDLY</code>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <p>Video de Montagem &rarr; </p>
          </a>

          <a href="" className={styles.card}>
            <p>Folder Institucional &rarr;</p>
          </a>
          <a
            href=""
            className={styles.card}
          >
            <p>Flyer Sofá Hug &rarr;</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <p>
              Flyer Mesa lateral Tree &rarr;
            </p>
          </a>
        </div>
      </main>

    </div>
  )
}
