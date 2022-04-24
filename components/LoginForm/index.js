import react from "react"

export default class LoginForm extends react.Component{

    state = {
        username: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/account/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        
        const body = await response.json()

        if(body.success){
            window.location.href = '/signUp'
        }
    }

    render(){

        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div><input type="username" name="username" placeholder="Username" onChange={this.handleChange} /></div>
                    <div><input type="password" name="password" placeholder="Password" onChange={this.handleChange}/></div>

                    <button type="submit">Login</button>
                    
                </form>

                <a href="/signUp">Click here to Sign Up</a>

                <style jsx global>{`

                
                
                `}</style>

            </>


        )
    }
}