//[1] When we are going to compare two different memory locations
// let a = [];
// let b = [];

// console.log( a == b );
// console.log( a === b );

/* ......................................................................................................................*/

// [2] related to upper one but here memory location won't change:-
// let a = [];
// let b = a;

// console.log( a == b );
// console.log( a === b );

/* ......................................................................................................................*/

// [3] 

// let a = [20];
// let b = [20];
// console.log( a[0] == b[0] );
// console.log( a[0] === b[0] );

/* ......................................................................................................................*/

// [4] spread operator is here which will destructure our array and object and the a is given us to distract ourself.
// let z = [1,2,3,4];
// let a = { name: 'Lokesh' };
// console.log(...z);

/* ......................................................................................................................*/

// [5] NAN ia type of number we will get it when we will perform any mathematical operation on non-mathematical expressions
// it is a special type of number in javascript
// console.log(typeof(NaN));

/* ......................................................................................................................*/

// [6] minus minus will convert in plus.
// let data = 10 - -10;
// console.log(data);

/* ......................................................................................................................*/

// [7] set will remove duplicates from array and covert it into object.
// const set = new Set([1,1,2,3,3,4,5,5]);
// console.log(set);

/* ......................................................................................................................*/

// [8] It will print boolean values on the basis of operations if our operation will done then it will return true else it will return false.
// let data = {name: 'Lokesh'};
// console.log(delete data.name);

/* ......................................................................................................................*/

// [9] we can not delete data with the delete operation we can only delete value of data.
// let data = {name: 'Lokesh'};
// console.log(delete data);

/* ......................................................................................................................*/

// [10] when we will do this operation then if we are using only one value inside arr then first value of array of string will come.
// const data = ['Lokesh', 'Ali', 'Abhinav', 'Ashish', 'Anjali'];
// const [x] = data;
// console.log(x);
// const [x,y] = data;
// console.log(x,y);
// const [x,y,z] = data;
// console.log(x,y,z);
// const [a,b,c,d] = data;
// console.log(a,b,c,d);


/* ......................................................................................................................*/

// [11] If we want only second value then just use comma beafore x.
// const data = ['Lokesh', 'Ali', 'Abhinav', 'Ashish', 'Anjali'];
// const [,x] = data;  // how to get second element.
// console.log(x);
// const [,,x] = data;
// console.log(x);

/* ......................................................................................................................*/

// [12] How to get individual item without dot(.) operator?
// const data = { name: 'Lokesh', age: 24, skill: 'js'};
// const {name} = data;
// const {age} = data;
// const {skill} = data;
// console.log(skill);

/* ......................................................................................................................*/

// [13] Merge two objects:-
// let data = {name: 'Lokesh', age: 24, skill: 'js'};
// let info = {city: 'Badagaon', mail: 'lokesh@gmail.com'};
// data= {...data, ...info};
// console.log(data);

/* ......................................................................................................................*/

// [14] What if data will not destruture only info will destructure?
// let data = {name: 'Lokesh', age: 24, skill: 'js'};
// let info = {city: 'Badagaon', mail: 'lokesh@gmail.com'};
// data= {data, ...info};
// console.log(data);

/* ......................................................................................................................*/

// [15] merge 2 obj, both objects contains same key then what happen?
// positionof key will be sae as in first obj but vaue will assign from second object.
// let data = {name: 'Lokesh', age: 24, skill: 'js'};
// let info = {city: 'Badagaon', skill: 'Moongo DB'};
// data= {...data, ...info};
// console.log(data);

/* ......................................................................................................................*/

// [16] Error-
// const name = 'Lokesh';
// console.log(name());  // will show error:- (TypeError: name is not a function)

/* ......................................................................................................................*/

// [17] Positive value:-
// const result = false || {} || null;
// console.log(result);  // will give {}

// how to check a positive value:-
// if(false){
//     console.group("poitive value");
// }
// if({}){
//     console.group("poitive value");
// }
// if(null){
//     console.group("poitive value");
// }

/* ......................................................................................................................*/

// [18] If there is no possitive value thn it wil take last value from here:-
// const result = null || false || " ";
// console.log(result);  // will give " "

/* ......................................................................................................................*/

// [19] 
// const result = [] || 0 || true;
// const result = 0 || [] || true;
// const result = [] || 0 || true;
// console.log(result);  // will give []

/* ......................................................................................................................*/

// [20] it will fullfil condition: 
// console.log(Promise.resolve(5));

/* ......................................................................................................................*/

// [21] Unicode compaison:- (same unicodes there)
// console.log("💝" === "💝");

/* ......................................................................................................................*/

// [22]
// JSON.parse() 
// what this will do?

// (a): Parse JSON to a javascript value.       // `Correct answer`
// (b): Parse a javascript object to JSON.
// (c): Parses any javascript value to JSON.
// (d): Parses JSON to a javascript object only.

/* ......................................................................................................................*/

// [23] In hoisting that is the that we can use any veriable before declearing that we can decleared that later as well 

// let name = 'Patidar';
// function getName() {
//     console.log(name);
//     let name = 'Lokesh';
// }
// getName(); // ReferenceError: Cannot access 'name' before initialization

/* ......................................................................................................................*/

// [24]

// let name = `Lokesh`;  // litteral used
// function getName() {
//     console.log(name);
// }
// getName();

/* ......................................................................................................................*/

// [25]
// console.log(`${(x => x) ('I Love')} to program`);

/* ......................................................................................................................*/

// [26] find correct format?

// function sumValues(x,y,z) {
//     return x+y+z;
// }
// (A): sumValues(...[1,2,3])
// (B): sumValues([...[1,2,3]])
// (C): sumValues([...1,2,3])
// (D): sumValues([1,2,3])
// console.log(sumValues(...[1,2,3]));

/* ......................................................................................................................*/

// [27]
// const name = 'code step by step';
// console.log( !typeof name === 'object');
// console.log( !typeof name === 'string');
// console.log( !typeof name === false );

/* ......................................................................................................................*/

// [28]
// const temp = "Subscribe";
// const age = 24;
// console.log(isNaN(temp));
// console.log(isNaN(age));

/* ......................................................................................................................*/

// [29] seal will not allow us to add more keys and value in object we can only update the values of keys which are already present inside it.
// let person = { name: "Lokesh" };
// // what can modify person object
// Object.seal(person); 
// person.name = 'Patidar';
// person.age = 24;
// console.log(person);

/* ......................................................................................................................*/

// [30] Remove first element-
// const arr = [1,2,3,4,5,6];
// arr.shift();
// console.log(arr); 

/* ......................................................................................................................*/

// [30] Remove last element-
// const arr = [1,2,3,4,5,6];
// arr.pop();
// console.log(arr); 

/* ......................................................................................................................*/

// [31]
// let data = { name: "Lokesh" };
// delete data.name;
// console.log(data);

/* ......................................................................................................................*/

// [32] coversion of true to false and vice-versa:-
// let data = true;
// console.log(!data);

/* ......................................................................................................................*/

// [33] delete method
// let data = ['lokesh','deepak','Ali'];
// delete data[2];
// console.log(data);
// console.log(data.length);

/* ......................................................................................................................*/

// [34] merge two array:-
// let a = [1,2,3];
// let b = [4,5,6];
// let c = [...a,...b];
// console.log(c);

/* ......................................................................................................................*/

// [35] merge two array:-
// let a = [1,2,3,4];
// let b = [4,5,6];
// let c = [...a,...b];
// console.log(c);

/* ......................................................................................................................*/

// [36] Squaring:
// let a = 3 ** 3;
// console.log(a);

/* ......................................................................................................................*/

// [37] 
// let a = 2;
// setTimeout(() => {
//     console.log(a);
// },2000);
// a = 100;

/* ......................................................................................................................*/


/* ......................................................................................................................*/
