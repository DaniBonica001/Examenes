import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({data}) {

  return (
    <div >
      <Head>
        <title>Login Exams</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <h1>teacher</h1>
        <Link href='https://www.youtube.com/watch?v=MFuwkrseXVE&t=2492s&ab_channel=Academind'>
          <input type="submit" value="Create a new examn" />
        </Link>
        <br/>
        <Link href='/'>
          <input type="submit" value="Log out" />
        </Link>
      </main>


    </div>
  )
}

Home.getInitialProps = async (req, res) => {

  const response = await fetch('http://localhost:3000/api/teacher/' + req.query.index)
  const data = await response.json()
  return { data }
  
}

