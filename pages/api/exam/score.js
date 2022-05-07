export default async function Score(req, res) {
   
    const {data} = req.body
    let score = 0;

    
    data.questions.map(question => {
        if(data.result[question.id] === "true"){
            score += parseInt(question.score);
            
        }
    })

    res.send({
        success: true,
        score: (score*5)/100,
        message: "Nice"
    })

}