import {db} from '../../util/database'

export default async function Found (req, res){
    
    const query = await db.query('SELECT * FROM EXAMN');   

    if (query.rows[0]!=null){
        res.send(query.rows);

    }else{
        res.send("No hay exámenes para mostrar");
    }
   


}