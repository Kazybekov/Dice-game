


   var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var name="images/dice" + randomNumber1 + ".png";

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

     var name2="images/dice" + randomNumber2 + ".png";

   document.querySelectorAll("img")[0].setAttribute('src',name);
   document.querySelectorAll("img")[1].setAttribute('src',name2);

   if(randomNumber1==randomNumber2){
      document.querySelectorAll("h1")[0].innerHTML="Draw ";
   }
   else if(randomNumber1>randomNumber2){
     document.querySelectorAll("h1")[0].innerHTML="Player 1 won ";
   }
   else{
     document.querySelectorAll("h1")[0].innerHTML="Player 2 won ";
   }




  //document.getElementsByClassName("img1")[0].setAttribute('src','images/dice1.pn
