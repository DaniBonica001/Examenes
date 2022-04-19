export default class Exam{

    constructor(id, code, name, question){
        this.id = id;
        this.code = code;
        this.name = name;
        this.question = question;

    }

    getId(){
        return this.id;
    }

    getCode(){
        return this.code;
    }

    getName(){
        return this.name;
    }

    getQuestion(){
        return this.question;
    }

}