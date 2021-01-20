import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TodoList from 'components/TodoList'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recoil sample</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="recoil sample" />
        <meta property="og:description" content="Recoil sample" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:url" content="https://google.com" />
        <meta property="og:site_name" content="recoil sample" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://google.com" />
        <meta name="twitter:title" content="recoil sample" />
        <link rel="canonical" href="hhttps://google.com" />
      </Head>
      <main>
        <TodoList></TodoList>
      </main>
    </div>
  )
}
