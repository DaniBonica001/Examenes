import {db} from '../../util/database'

export default async function Found (req, res){

    //const student = await JSON.parse(fs.readFileSync("../../util/accounts.json"));
    //const teacher = await JSON.parse(fs.readFileSync("../../util/teacher.json"));
    
    //let exams = [];

    const query = await db.query('SELECT * FROM EXAMN');   

    if (query.rows>0){
        res.send(query.rows);
    }else{
        res.send("No hay exámenes para mostrar");
    }
    /*
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
    */  


}