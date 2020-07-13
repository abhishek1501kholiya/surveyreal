class Text{
    constructor(questionname,qx , qy){
        
       this.question = createElement('h2');
       this.question.html(questionname);
        this.question.position(qx , qy);

    }
   hide(){
       
        this.question.hide();
    }
}

