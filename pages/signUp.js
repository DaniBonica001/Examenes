import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {

    let data = {
        name: '',
        email: '',
        password: '',
    }

    async function handleSubmit(event) {
        event.preventDefault();
        //console.log(data)
        const response = await fetch('/api/accounts/verifyAccount', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const responseData = await response.json();
    }


    let handleChange = (event) => {
         console.log(event.target.name);
        switch (event.target.name) {
            case 'name':
                data.name = event.target.value;
                break;
            case 'email':
                data.email = event.target.value;
                break;
            case 'password':
                data.password = event.target.value;
                break;
            default:
                break;
        }
    };


    return (

        <div className={styles.container}>
            <Head>
                <title>SignUp</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <form className='form' onSubmit={handleSubmit}>
                    <h2 className={styles.title}>Sign Up</h2>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h2>Lets' create your account</h2>

                            <input id="name" type="text" name='name' placeholder="Full Name" onChange={handleChange} />
                            <input id="email" type="email" name='email' placeholder="Email" onChange={handleChange} />
                            <input id="password" type="password" name='password' placeholder="Password" onChange={handleChange}/>
                            <input type="password" placeholder=" Confirm Password" />
                            <br />
                            <input type="submit" value="Create" />
                        </div>
                    </div>
                </form>
            </main>
        </div>

    )
}

