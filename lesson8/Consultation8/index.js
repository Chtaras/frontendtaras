// способ найти елемент по id и добавить его в переменную
const btnElement = document.getElementById("btn1");
const btnElementText = "текст которий я вывожу в консоль";
console.log(btnElementText, "между переменними " , btnElement);
// способ найти елементи по тегу и добавить их в переменную
let pElementsByTag // обявили переменную
pElementsByTag = document.getElementsByTagName("p") // присвоили значение
console.log("pElementsByTag" , pElementsByTag);


// способ найти елементи по класу

const pElementsByClass = document.getElementsByClassName("paragraf");
console. log ("pElementsByClasss", pElementsByClass);

// обявили переменную счетчик через let
let counter = 0;

btnElement-addEventListener( "click", ()=>{
    // создаем новий елемент
    const newHeading = document.createElement("h1");
    //h1
    // Увеличим наш счетчик на 1 и перезапись переменной
    counter +=1;
    // добавление текста с переменной через косие кавички
    newHeading.innerText= " Наш первий елемент созданий в Js номер " $(counter);
    newHeading.id="newHeading"
    newHeading.className= "newHeading"
    newHeading.style.color="red"
    newHeading.style.fontSize="30px"
    console.log(newHeading)
//Добавление на страницу
dokument.body.appendChild(newHeading)
console.log(counter)
})

//Обьявляем переменную и через метод getElementByld()
const btn2 = document.getElementById(btn2)

const helloDom = document.getElementById(hello)
btn2.addEventListener("click",()=>{
    helloDom.innerText="Уто не DOM 2";
    helloDom.className="meinHeading";
})

const btn3=document.getElementById("btn3")
btn3.addEventListener("click",()=>{
    //Удаляем вибранний в переменной елемент

})




