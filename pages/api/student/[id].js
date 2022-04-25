const fs = require('fs');

export default async function Found (req, res){
    const data = await JSON.parse(fs.readFileSync("data/accounts.json"));
    const {id} = req.query;
    
    data.forEach(element => {
        if(element.username === id){
            console.log(element);
            res.json(element);
        }
    });

    res.send("No user found");


}