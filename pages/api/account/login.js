const fs = require('fs');

export default function Login(req, res) {

    let accounts = JSON.parse(fs.readFileSync("data/accounts.json"));
    console.log(accounts);

    if(req.method === 'POST'){
        accounts.forEach(element => {
            if(element.username === req.body.username && element.password === req.body.password){
                console.log("Login Successful");
                res.send({
                    success: true,
                    message: "Login Successful"
                })
    
            }
        });
    }
   

    res.send({
        success: false,
        message: "Login Failed"
    })


    

}