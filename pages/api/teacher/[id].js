import {db} from '../../util/database'

export default async function Found (req, res){
    const data = await JSON.parse(fs.readFileSync("../../util/teacher.json"));
    const {id} = req.query;
    
    data.forEach(element => {
        if(element.username === id){
            console.log(element);
            res.json(element);
        }
    });

    res.send("No user found");


}