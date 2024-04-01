 /*function Add(fastNumber,secondNumber){
    console.log(fastNumber+secondNumber);
 }
 Add(78,20)

 function Sub(fastNumber,secondNumber){
    console.log(fastNumber-secondNumber);
 }
 Sub(50,20)

 function Division(fastNumber,secondNumber){
    console.log(fastNumber/secondNumber);
 }
 Division(30,20)*/

 function Add(fast,send){
    return fast+send;
 }

 /*const result= Add(20,22);
 console.log(result)*/

 function ISLP(y)
 {
    if((y % 400 == 0) ||
      (y % 100 != 0) &&
      (y % 4 == 0))
   {
    return 1;
   }
   else
   {
    return 0;
   }   
 }
 // Driver code
 var year = 2020;
 document.write(ISLP(year));