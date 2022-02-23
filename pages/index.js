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
          <Image width={300} height={120} src="/logo.png" alt="" />
        </h1>

        <p className={styles.description}>

          <code className={styles.code}>LINHA ECO FRIENDLY</code>
        </p>

        <div className={styles.grid}>
          <a href="folder_institucional.pdf" rel="noopener" target="__blank" className={styles.card}>
            <p>Institucional Folder {'>'}</p>
          </a>
          <a href="https://www.youtube.com/watch?v=vCkuaGq277c" target="__blank" className={styles.card}>
            <p>Hug Sofa Assembly {'>'}</p>
          </a>
          <a
            href="flyer_sofa.pdf"
            className={styles.card}
            target="__blank"
            rel="noopener"
          >
            <p>Hug Sofa Flyer {'>'}</p>
          </a>

          <a
            href="flyer_tree.pdf"
            className={styles.card}
            target="__blank"
            rel="noopener"
          >
            <p>
              Side Table &quot;Tree&quot; Flyer {'>'}
            </p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=gv0_nWE5Umg"
            className={styles.card}
            target="__blank"
            rel="noopener"
          >
            <p>
              Side Table &quot;Tree&quot; Assembly {'>'}
            </p>
          </a>
        </div>
      </main>

    </div>
  )
}
