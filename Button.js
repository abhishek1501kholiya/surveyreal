class Form {

    constructor(b1x , b1y , b2x , b2y) {
    
      this.button = createButton('Yes');
      this.button2 = createButton('No');
      this.button.position(b1x ,b1y);
      this.button2.position(b2x,b2y)

    }
    hide(){
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h1')
      title.html("this is a Survey");
      title.position(100,100);

     
  
      this.button.mousePressed(()=>{
        
        noYEs+=1;

      });

      this.button2.mousePressed(()=>{
          
          noNo+=1;
      })
  
    }
  }
  