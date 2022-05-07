import {db} from '../../util/database'

export default async function Found (req, res){

    const {id} = req.query
    const exam = await db.query('SELECT * FROM EXAMN WHERE IDEXAMN = $1', [id]);   
    const questions = await db.query('SELECT * FROM QUESTION WHERE IDEXAMN = $1', [id]); 
    const options = await db.query('SELECT * FROM ANSWER'); 
    let body = []
    let result = {}

    questions.rows.map(question => {
        let Aoptions = []
        options.rows.map(option => {
            if(question.idquestion === option.idquestion){
                Aoptions.push(option)
            }

        })

        result[question.idquestion] = false

        let data = {
            id: question.idquestion,
            question: question.question,
            score: question.score,
            options: Aoptions

        }
       
        body.push(data)

    })

    
    res.json({
        exam: exam.rows,
        questions: body,
        result: result

    })

   
}