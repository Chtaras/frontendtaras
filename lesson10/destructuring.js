// Destructuring
const person = {
    name:"Frank",
    age:21
}
console.log(person);
const age = person.age;
const name = person.name;
console.log(name,age);
//** */

const dog = {
    nick:"Bobby",
    bread:"Corgi"
}
const {nick, bread, height = 10, color = "black"}= dog;
console.log(nick);
console.log(bread);
console.log(height);
console.log(color);
console.log(dog);