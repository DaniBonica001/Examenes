const fs = require('fs');

export default async function Found (req, res){

    const student = await JSON.parse(fs.readFileSync("data/accounts.json"));
    const teacher = await JSON.parse(fs.readFileSync("data/teacher.json"));
    
    let exams = [];
    
    student.forEach(element => {
        if(element.username === req.query.id){

            
            
            teacher.forEach(Telement => {
                if(Telement.exam[0] != null){
                    for (let index = 0; index < Telement.exam.length; index++) {
                        exams.push(Telement.exam[index])
                       
                    }
                    
                }
            });


            res.json(JSON.stringify([element, exams]))
        }
    });

    res.send("No user found");


}