/*const person ={
     //age:26;
     
};
person.fname='MD';
person.lname='tohura';
person.agr=26;

console.log(person.fname);
console.log(person);*/

const person ={
    fname:'MD',
    lname:'tohura',
    agr:26,

    fullName: function(){
        return  this.fname+" "+ this.lname;
    },
};

console.log(person.fullName());

console.log(person.fname);

delete person.agr;

console.log(person);

//function fullName(){

//}

const sub={
    ban:80,
    eng:70,
    math:60,

    firstNumber:function(){
        return this.ban+this.eng+this.math;
    },
    firstNumber1:function(){
        return this.firstNumber();
    }
};
console.log(sub.firstNumber());
console.log(sub.firstNumber());

document.getElementById("demo").innerHTML=person.fname+" "+person.lname