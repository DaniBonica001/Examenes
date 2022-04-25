const fs = require('fs');

export default function Login(req, res) {

    let accounts;
    let patch = "data/teacher.json";
    const {method, body} = req;

    if(method === 'POST'){
        if(body.toggle1){
            accounts = JSON.parse(fs.readFileSync(patch));

        }else{
            patch = "data/accounts.json";
            accounts = JSON.parse(fs.readFileSync(patch));
        }
        
        accounts.forEach(element => {
            if(element.username === body.username && element.password === body.password){
                res.send({
                    success: true,
                    username: element.username,
                    toggle: body.toggle1,
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