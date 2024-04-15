const names = ["Семен","Иван","Петр","Татьяна"];
const ages = [12,27,74,34];

const namesAges = [];
for (let i=0; i<names.length; i++) {
    namesAges[i] = `${names[i]} ${ages[i]} лет  ` ;
}
console.log(namesAges);

const name = "Семен";
const age = 33;
const text = `Меня зовут ${name} и мне ${age} лет. Я изучаю язик Js`;
console.log(text);

const reversed = [];
for (let i=0; i<namesAges.length; i++){
    reversed.unshift(namesAges[i]);
    }
    console.log(reversed); // масив в обратном порядке
    console.log(namesAges); // исходний масив без изменений

    //*************** */
    //Пример 4 
//Допустим у нас были переменные - и мы хотим создать из низ объект

const title = "Titanic"
const capacity = 1500

const titanic ={title, capacity}
console.log(titanic);

// Пример 5 
const name1 = "Avrora"
const cap = 300
const avrora = {title:name1, capacity:cap}
console.log(avrora);

//Пример 6 
//Метод внутри объекта

const dog={
    nick:'Tuzik',
    bark(){
        console.log("Гав,Гав")
    }
};
// вызов метода
dog.bark();

// Прототипное наследование
// один объект будет выступать как прототип для другого

const bike = {
    brand:"Turist",
    drive(){
        console.log("bsh,-br-br")
    }
};

const mountineBike = {
__proto__:bike,
gears:20,
price:600,
};
console.log(mountineBike);
console.log(mountineBike.brand);
//console.log(mountineBike.drive())
mounttineBike.drive()
