import react from "react"


export default class LoginForm extends react.Component{

    state = {
        username: '',
        password: '',
        toggle1: false
    }

    handleChange = (event) => {
        if(event.target.name === 'toggle1'){
            this.setState({
                toggle1: event.target.checked
            })
        }else{
            this.setState({
                [event.target.name]: event.target.value
            }
        )}
        
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
            if(body.toggle){
                window.location.href = '/signUp'
            }else{
                window.location.href = 'https://www.youtube.com/watch?v=Y2FpY61h5Z8&ab_channel=UskoKruM2010'
            }
            
        }
    }

    render(){

        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div><input type="username" name="username" placeholder="Username" onChange={this.handleChange} /></div>
                    <div><input type="password" name="password" placeholder="Password" onChange={this.handleChange}/></div>
                    <div>
                        <input type="checkbox" name="toggle1" onChange={this.handleChange} id="xd"/>

                    </div>

                    <button type="submit">Login</button>
                    
                </form>

                <a href="/signUp">Click here to Sign Up</a>

                <style jsx global>{`

                
                
                `}</style>

            </>


        )
    }
}