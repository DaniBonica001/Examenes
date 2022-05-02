import { Grid } from '@mui/material';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


export default function Home({ data }) {

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Examns Page</a>
          <Link href='/'>
            <input type="submit" value="Log out" />
          </Link>

        </div>
      </nav>

      <div>
        <br />
        <Grid container spacing={2}>
          {data[1].map(t => (
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
  );
}
Home.getInitialProps = async (req, res) => {
  let config = {    
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }

  const response = await fetch('/api/student/' + req.query.index,config);
  const data = await response.json()

  return { data }

}

