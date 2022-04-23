import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Login Exams</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Examns</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Login</h2>

            <input id="username" type="text" placeholder="Username" />
            <input id="password" type="password" placeholder="Password" />
            <br />
            <div class="toggle">
              <input text="Student" type="checkbox" id="toggle" />

            </div>
            <button id="loginButton">Login</button>
            <a href="https://nextjs.org">Click here to Sign Up</a>

          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

