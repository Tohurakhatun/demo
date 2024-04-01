// const f=document.getElementById("ffrom");

// console.dir(f);

// const t=document.getElementById("test");

// console.dir(t);

const f =document.forms["test"];
let text="";
let i;
for(i=0;i <f.length; i++){
    text+= f.elements[i].value + "<br>";  
}

document.getElementById("demo").innerHTML=text;
