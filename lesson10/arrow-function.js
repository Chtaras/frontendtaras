// strelochnue fyncuu
// Arrow function
// simple function
// 1 variant
function sum(a,b){
    return a+b;
}
console.log(sum(20,10)); // 30

//Arrow function
//2 variant
const sum2 = (a,b)=>{
    return a+b;
}
//3 variant
const sum3 = (a,b) => a+b;
const res = sum3(10,20)
console.log(res);
///************ */
function calculate(a,b,operation){
    return operation(a,b)
}
function subtract(a,b){
    return a-b;
}
calculate(9,3,subtract); // 6

calculate(9,3,(a,b)=>a/b);//3

console.log(calculate(9,3, subtract ));
console.log(calculate(9,3,(a,b)=>a/b));


function universalGreeting(name, operationGreating){
    return operationGreating(name);
}
function englishGreeting(name){
    return "Hello " + name;
}
function japaneseGreeting(name){
    return "Konnichiwa " + name;
}
console.log(universalGreeting("Igor", englishGreeting));

console.log(universalGreeting("Igor", japaneseGreeting));



// Alert
const years = prompt("Skolko vam let");
alert("Vam+years"+"let");

// confirm
const isAdmin = confirm("Vu admin ?");
alert(isAdmin);