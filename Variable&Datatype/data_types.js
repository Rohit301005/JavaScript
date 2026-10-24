// data type
// perimitive datatype
// permitive data is immutable (once it created it cannot be changed)
// 1.number,2.string,3.boolean,4.undefine,5.null,6.bigint,7.sysmbol
// number
let a = 10;
let b = 2.36;
// console.log(a,b);
console.log(typeof a);  // type pta chalate h 


// string
let c = "rohit";
let d = 'kumar';
console.log(c,d);

// boolean true or false
let login = true;
let f = false
console.log(login,f);

// undefine
let user;
// const p;  const me undefine use nhi hota h
console.log(user);

// bigint
let num = 1223456777789n;
console.log(num);

// null
let weather = null;
console.log(weather);
console.log(typeof weather);

// sysmbol
const id1 = Symbol("id");
console.log(id1)





// non permitive datatype
// 1.array,2.object,3.function
// non permitive data are mutable it can be changed after they created
// array
let arr = [10,11,12,'rohit',true];
console.log(arr);
console.log(typeof arr);   // har non permitive datatype ka typeof object hi hota h 

// object
// rohit 12312 18 gen
let obj = {
    name:'rohit',
    account:12312,
    age:18,
    category:'gen'
}
console.log(obj)
console.log(typeof obj);

// function
function add(){
    console.log("hello");
}
add();

// let s = function add(){
//     console.log("hello");
// }
// console.log(s);           
// s();
