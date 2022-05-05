import { Grid } from '@mui/material';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({ data }) {

  return (
    <div >
      <Head>
        <title>Login Exams</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <h1>teacher</h1>
        <Link href='/teacher/newExamn'>
          <input type="submit" value="Create a new examn" />
        </Link>
        <br />
        <Link href='/'>
          <input type="submit" value="Log out" />
        </Link>
      </main>

      <div>
        <br />
        <Grid container spacing={2}>
          {data.exam.map(t => (
            <Grid item key={t.name} xs={6} md={4}>
              <div className="card" style={{ width: "350px", height: "200px" }}>
                <div className="card-body">
                  <h5 className="card-title">{t.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

      </div>


    </div>
  )
}

Home.getInitialProps = async (req, res) => {
  let config = {    
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }

  const response = await fetch('/api/teacher/' + req.query.index,config);
  const data = await response.json();
  console.log(data);
  return { data }

}

