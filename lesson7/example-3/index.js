// ми можем создать елемнти с нуля и прикрепить их к документу html
// создадим пустой параграф
const newElement = document.createElement("p");

newElement.textContent = " Я бил создан при помощи JS";

newElement.style.border = "4px solid red";

document.body.append(newElement);
// прикрепили елемнт к документу

const targetElement = document.getElementById("target-element");

const newBtn = document.createElement("button");
newBtn.type= "button";
newBtn.textContent = " Нажми на меня";
targetElement.append(newBtn);