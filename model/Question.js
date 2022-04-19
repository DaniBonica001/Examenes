export default class Question{

    constructor(question, answer, percentage){
        this.question = question;
        this.answer = answer;
        this.percentage = percentage/100;

    }

    getQuestion(){
        return this.question;
    }

    response(answer, maxGrade){
        if(answer == this.answer){
            return maxGrade*this.percentage;
        }
        return 0;
    }
}