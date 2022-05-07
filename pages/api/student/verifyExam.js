import {db} from '../../util/database'

export default async function VerifyExam(req, res) {
  
    const {method, body} = req;
    const data = req.body.info;  
    const query = await db.query('SELECT * FROM EXAMN WHERE IDEXAMN = $1', [data.id]);   

    if(method === 'POST'){  
        
        if(query.rows[0] == null){
            res.send({
                success: false,
                message: "Not exam found"
            })

        }else if(query.rows[0].code != data.password){
            res.send({
                success: false,
                message: "Incorrect password"
            })
        }else{
            res.send({
                success: true,
                id: query.rows[0].idexamn,
                message: "Nice"
            })

        }

        
       
    }

    
}