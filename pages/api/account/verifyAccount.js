import {db} from '../../util/database'


export default async function handler(req, res) {

    let accounts;
    let patch = "../../util/teacher.json";
    const { method, body } = req;
    const data = body.data;

    if (method === 'POST') {

        if (data.toggle1) {
            console.log('kio');            
            accounts = await db.query('SELECT * FROM TEACHER t WHERE t.USERNAME = $1', [data.username])

        } else {
            console.log('hola');
            patch = "../../util/accounts.json";
            accounts = await db.query('SELECT * FROM STUDENT s WHERE s.USERNAME = $1', [data.username]);

        }

        //console.log(accounts);

        if (accounts.rows[0] === undefined) {

            if (data.toggle1) {

                let insert = await db.query('INSERT INTO TEACHER(NAME,USERNAME,PASSW) VALUES($1,$2,$3)',[data.name, data.username, data.password]);               

                /*

                accounts.push({
                    id: accounts.length + 1,
                    name: data.name,
                    username: data.username,
                    password: data.password,
                    exam: []
                });
                */
    
            } else {
                let insert = await db.query('INSERT INTO STUDENT(NAME,USERNAME,PASSW) VALUES($1,$2,$3)',[data.name, data.username, data.password]);               
            }

            res.send({
                success: true,
                message: "SingUp Successful"
            })
           
        }else{

            res.send({
                success: false,
                message: "SingUp Failed"
            })
           
        }        

        

    }

}