// function myfun(hello){
//    let x=hello;
//    console.log(x)
// }

// const myobj={
//     fname:"tohura",
//     lname:"khatun",

//     myfun:function(){
//         return this.fname+" "+this.lname
//     }
    
// }
// console.log(myobj.myfun())
// console.log(myobj)

const p= document.createElement("p");

const t= document.createTextNode('MD');

p.appendChild(t);

const d= document.querySelector("#d1")

d.appendChild(p);

const pp= document.querySelector("#p1")

d.insertBefore(p,pp)