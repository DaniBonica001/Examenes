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
            console.log('valor del login: '+event.target.checked);
        }else{
            this.setState({
                [event.target.name]: event.target.value
            }
            
        )}

        console.log('valor del login: '+event.target.checked);

        
        
    }

    handleSubmit = async (event) => {
        let data = this.state;
        
        event.preventDefault();
        const response = await fetch('http://localhost:3000/api/account/login', {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        
        const body = await response.json();       

        if(body.success){

            
            if(body.toggle){
                
                window.location.href = 'http://localhost:3000/teacher/' + body.username
            }else{
                
                window.location.href = 'http://localhost:3000/student/' + body.username
            }
            
        }
    }

    render(){

        return(
            <div>
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

            </div>


        )
    }
}