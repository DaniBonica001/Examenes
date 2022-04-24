const fs = require('fs');

export default function handler(req,res){

    let accounts;
    let patch = "data/teacher.json";
    const {method, body} = req;
    const data = body.data;

    if(method === 'POST'){

        if(data.toggle1){
            accounts = JSON.parse(fs.readFileSync(patch));
            
        }else{
            patch = "data/accounts.json";
            accounts = JSON.parse(fs.readFileSync(patch));
        }

        accounts.forEach(element => {
            if(element.username === data.username || data.username === '' || data.password === '' || data.name === ''){
                res.send({
                    success: false,
                    message: "SingUp Failed"
                })

            }
        });

        accounts.push({
            id: accounts.length + 1,
            name: data.name,
            username: data.username,
            password: data.password,
        });

        fs.writeFileSync(patch, JSON.stringify(accounts));
        

        res.send({
            success: true,
            message: "SingUp Successful"
        })

    }
    
}