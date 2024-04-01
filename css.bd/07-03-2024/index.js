 function myfun(Text){
    //  let x= document.querySelector("#test");
    //  x.innerHTML="Hello"
    let x= document.getElementById("test")
    x.innerHTML=Text;
    console.log(Text);
 }


const b= document.getElementById("demo");

b.addEventListener('click', function(){
    myfun("Hello")
})


// const d= document.getElementById("divv");

// b.addEventListener('click',function(){
//          console.log("bnt")
//      },true);


//      d.addEventListener('click',function(){
//         console.log("div")
//     },true);
    



// b.addEventListener('mouseover',function(){
//     console.log("Hello")
// })
