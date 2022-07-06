import Head from 'next/head'
import Image from 'next/image'
import {
  WhatsAppOutlined,
  SendOutlined
} from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import { Button } from 'antd';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Diego Gewehr</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <img src="/logo.png" alt="" />
        </h1>
        <h1 className={styles.title}>
          <img src="/hugo.jpeg" alt="" />
        </h1>

        <p className={styles.description}>

          <code className={styles.code}>Diego Nelson Gewehr</code>
        </p>

        <div className={styles.grid}>

          <a target="__blank" href="https://wa.me/5518991341176">
            <Button
              size={'large'}
              className={styles.button}
              icon={<WhatsAppOutlined style={{ fontSize: '16px' }} />}
              onClick={() => { }}
            >
              WhatsApp
            </Button>
          </a>

          <a>
            <Button
              size={'large'}
              className={styles.buttonEmail}
              icon={<SendOutlined style={{ fontSize: '16px' }} />}
              onClick={() => { }}
            >
              E-Mail: diego@mundomoveis.com.br
            </Button>
          </a>

          <a target="__blank" href={'https://www.google.com.br/maps/place/R.+Izaura+Boteon,+701+-+Res.+Sao+Jose,+Birigui+-+SP,+16201-024/@-21.2766815,-50.3451249,15.5z/data=!4m5!3m4!1s0x94961524ad9731e1:0xf9d8b4773481d35d!8m2!3d-21.2751967!4d-50.3333069'}>
            <p>
              Rua Dona Izaura Boteon, 701 - Birigui
            </p>
          </a>
        </div>
      </main>

    </div>
  )
}
