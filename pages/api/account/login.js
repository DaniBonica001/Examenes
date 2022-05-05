import {db} from '../../util/database'

export default async function Login(req, res) {

    let accounts;    
    const {method, body} = req;
    const data = req.body.data;    

    if(method === 'POST'){            

        if(data.toggle1){            
            console.log("teacher");
            accounts = await db.query('SELECT * FROM TEACHER t WHERE t.USERNAME = $1', [data.username])

        }else{    
            console.log("student");        
            accounts = await db.query('SELECT * FROM STUDENT s WHERE s.USERNAME = $1', [data.username]);
        }

        //console.log(accounts);

        if (accounts.rows.length>0){
            console.log('Existe');

            res.send({
                success: true,
                username: data.username,
                toggle: data.toggle1,
                message: "Login Successful"
            })
        }else{
            console.log('No existe');
            res.send({
                success: false,
                message: "Login Failed"
            })
        }
    }
}