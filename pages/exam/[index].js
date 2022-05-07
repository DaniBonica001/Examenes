import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'



export default function ExamPage({ data }) {

  let info = {
    id: data.id,
    password: '',
    
  }

  let handleChange = (event) => {
    data.result[event.target.name] = event.target.value

  };

  let handleSubmit = async (event) => {
    event.preventDefault();
   
    const response = await fetch('http://localhost:3000/api/exam/score', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    const responseData = await response.json();

    alert("Su calificacion es: " + responseData.score)

    if(responseData.success){
      window.location.href = '/';

    }

    
  };

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand">{data.exam[0].name}</h1>
          <Link href='/'>
            <input type="submit" value="Log out" />
          </Link>

        </div>
      </nav>

      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {data.questions.map(t => (
              <Grid item key={t.name} xs={6} md={4}>
                <div className="card" style={{ width: "350px", height: "200px" }}>
                  <div className="card-body">
                    <h5 className="card-title">{t.question}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Score: {t.score}</h6>
                    {t.options.map(o => (
                      <div>
                        <input type="radio" name={t.id} value={o.correct} onChange={handleChange} />
                        {o.description}
                      </div>

                    ))}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>

          <div>
            <button type="submit">Submit</button>
          </div>

        </form>

       

      </div>


    </div>
  );
}

ExamPage.getInitialProps = async (req, res) => {

  const response = await fetch('http://localhost:3000/api/exam/' + req.query.index, {

    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });

  const data = await response.json()
  return { data }

}

