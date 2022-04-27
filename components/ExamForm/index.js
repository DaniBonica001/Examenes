import react from "react"


export default class ExamForm extends react.Component{

    state = {
        username: '',
        password: '',
        toggle1: false
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

    }

    render(){

        return(
            <div className="container">
                <h1>Hola</h1>
            </div>

        )
    }
}