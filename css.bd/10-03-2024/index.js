// const way1= document.getElementById("demo") .innerHTML;
// console.log(way1);

// const way2= document.getElementById("demo").firstChild.nodeValue;
// console.log(way2);

// const way3= document.getElementById("demo").childNodes[0].nodeValue;
// console.log(way3);

// document.getElementById("dm").innerHTML=document.getElementById("demo").innerHTML;

//  document.getElementById("dm").innerHTML=document.getElementById("demo").firstChild.nodeValue;

// document.getElementById("dm").childNodes[0].nodeValue=document.getElementById("demo").childNodes[0].nodeValue;

const p= document.createElement("p");

const t= document.createTextNode('Md');

p.appendChild(t);

const d= document.querySelector("#d1")

d.appendChild(p);

const pp= document.querySelector("#p2")

d.insertBefore(p,pp)



