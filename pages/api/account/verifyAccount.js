const fs = require('fs');

export default function handler(req,res){

    let accounts = JSON.parse(fs.readFileSync("data/accounts.json"));
    const {method, body} = req;

    if(method === 'POST'){
        accounts.forEach(element => {
            if(element.username === body.username){
                res.send({
                    success: false,
                    message: "SingUp Failed"
                })

            }
        });

        accounts.push({
            id: accounts.length + 1,
            name: body.data.name,
            username: body.data.username,
            password: body.data.password,
        });

        fs.writeFileSync("data/accounts.json", JSON.stringify(accounts));

        res.send({
            success: true,
            message: "SingUp Successful"
        })

    }
    
}