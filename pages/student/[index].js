import { Grid } from '@mui/material';
import Link from 'next/link'
import { continueSession } from 'pg/lib/sasl';
import styles from '../../styles/Home.module.css'


export default function Student({ data }) {

  let info = {
    id: '',
    password: '',
    
  }

  let handleChange = (event) => {
    info.password = event.target.value;

  };

  async function handleSubmit(event) {
    event.preventDefault();
    info.id = event.target.id;
   
    const response = await fetch('http://localhost:3000/api/student/verifyExam', {    
        method: 'POST',
        body: JSON.stringify({ info }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    const responseData = await response.json();
    console.log(responseData);

    if(responseData.success){
        window.location.href = 'http://localhost:3000/exam/' + responseData.id;
    }
  }

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
          {data.map(t => (
            <Grid item key={t.name} xs={6} md={4}>
              <div className="card" style={{ width: "350px", height: "200px" }}>
                <div className="card-body">
                  <h5 className="card-title">{t.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a onClick={handleSubmit} className="card-link" id ={t.idexamn}>Present</a>
                  <input type="text" name="password" placeholder="Password" onChange={handleChange}/>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

      </div>


    </div>
  );
}



Student.getInitialProps = async (req, res) => {
  const response = await fetch('http://localhost:3000/api/student/' + req.query.index, {

    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });

  const data = await response.json()

  return { data }

}

