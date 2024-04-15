const fruits=["apple","orange","mango"];
const fruits2 = fruits;
fruits[0] = "banana";
console.log(fruits);
console.log(fruits2);

let str1 = "hello";
let str2 = str1;
str1 = "Goodbye";
console.log(str1);
console.log(str2);

const cars =["BMW","Mercedes","Audi"]
// spread
const carsCopy = [...cars];
carsCopy[0]="Opel";
console.log(cars);
console.log(carsCopy);

const cities1 = ["Berlin","Paris"];
const cities2 = ["London","Budapest"];
const joinedCities = [...cities1, ...cities2];
console.log(joinedCities);

const vegitables = [`cucumber`,`tomato`];
const newVegitales = [...vegitables, "carrot"];
console.log(newVegitales);

const mas1=["Audi","Mercedes", "Porsche"];
const mas2 = ["Volvo","Cadilak","Citroen"];
const newMas = [...mas1,...mas2];
console.log(newMas);

const origin=['Audi', 'Mercedes', 'Porsche', 'Volvo', 'Cadilak', 'Citroen'];
const copyOrigin = [...origin];
copyOrigin[6]="Fiat";
console.log(origin);
console.log(copyOrigin);