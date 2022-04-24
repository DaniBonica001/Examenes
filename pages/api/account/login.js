const fs = require('fs');

export default function Login(req, res) {

    let accounts = JSON.parse(fs.readFileSync("data/accounts.json"));
    const {method, body} = req;
    
    if(method === 'POST'){
        accounts.forEach(element => {
            if(element.username === body.username && element.password === body.password){
                res.send({
                    success: true,
                    message: "Login Successful"
                })
    
            }
        });

        res.send({
            success: false,
            message: "Login Failed"
        })
    }
   


}