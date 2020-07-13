var canvas ;
var   Onebutton , Twobutton ;
var ScreenO = 0;
var noYEs = 0;
var noNo =  0 ;
var question1 , question2 , question3 , question4 , question5;
function setup (){
  canvas = createCanvas(400,1200);
  Onebutton =  new Form( 200,300,250,300);
  question1 = new Text("do you want to help others",105,200);
  question2 = new Text("do you want help the school",105,400);
  Twobutton = new Form(200,500,250,500);
  question3 = new Text("do you want to support us ",105,600);
  Threebutton = new Form(200,700,250,700);
  question4 = new Text("do you support Black Lives matter",45,800);
  Fourbutton = new Form(200,900,250,900);
  question5 = new Text("do you want to be a member ",105,1000);
  Fivebutton = new Form(200,1100,250,1100);
  Statement = new Text("Thankyou for attempting the servey if we need your help we will mail you ",35,1200);

  

}
function draw(){
    background("yellow");

     
       // question2 = new Text("do you want to help school",105,200);
   // }
    //if(ScreenO === 2){

      //  question3 = new Text("do you want to support us ",105,200);
   // }
    Onebutton.display();

}