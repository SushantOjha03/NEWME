//first day//

const accounId = 14453
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
accountEmail = "HC@Hhc.com"
accountPassword = "21212121"
accountCity="Pune"
// don't use var 
console.log(accountEmail);
console.table([accounId, accountEmail, accountPassword,accountCity])





// second day//


let name = "Sushant"
let age = 18
let isloggedIn = false
let state = null
 
//null is a also a datatype and a standalone value too i.e 0
// undefined is khaali value
//symbol = unique
//NAN is not a number but its datatype is 0 
//true=1 false=0, any name= true and empty string is always false
//null ka datatype is object and undefined ka undefined hi hai

let score= "33"
let amt =  "33abc"
let temp = 33


console.log(typeof score);
console.log(typeof temp);

 let valueInNumber = Number(amt)
// console.log(typeof valueInNumber);
// console.log(typeof amt);
console.log(valueInNumber);

let value = 3
let negValue = -value


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


let str1 = "hello"
let str2 = "hitesh"

let str3 = str1 + str2

console.log(str3); 



console.log("1" + 2);
console.log(1 + "2");



//third day







//primitive data types = string,number,boolean,NULL,undefined,symbol
// non primitive call by reference data type= array,objects,functions


const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id==anotherId)

const heros = ["shaktiman", "nagraj", "djknsjd" ];
let myObj = {
    name: "hitesh" ,
     age : 22,

}


const myFunction = function (){
    console.log("hello world");
}

console.log(typeof myObj);


 //Primitive DataTypes:


// 1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
// 2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

// 3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

// 4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

// 5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

// 6.Symbol (ES6): it is mostly used used to find uniqnece.

// 7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

//  Refence (Object Data Types):

// 1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

// 2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

// 3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

// 4.Date: Represents dates and times.

// 5.RegExp: Represents regular expressions for pattern matching.



// lets talk about some Range of Primitive DataType:

//     1.Number:
//         Represents both integers and floating-point numbers.
//         Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
//         Smallest Increment: 2^(-52).

//     2.String:
//         Represents a sequence of characters.
//         No specific range limit, but practical limits depend on memory and system resources.

//     3.Boolean:
//         Represents true or false.
//         Only two possible values: true and false.

//     4.Undefined:
//         Represents a variable that has been declared but hasn't been assigned a value.
//         It has only one possible value: undefined.

//     5.Null:
//         Represents the intentional absence of any object or value.
//         It has only one possible value: null.

//     6.Symbol (ES6):
//         Represents a unique and immutable value.
//         No specific range limit.

//     7.BigInt (ES11):
//         Represents large integers that cannot be represented by the Number type.
//         The range is practically unlimited and depends on available memory.

