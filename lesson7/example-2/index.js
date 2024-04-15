const paragraphElement = document.getElementById("text");
const changeButtonElement = document.getElementById("btn-change");
const flowerElement = document.getElementById("flowers");
const changeFlowerButtonElement = document.getElementById("btn-change-flowers");
const surikatElement= document.getElementById("Surikat");
const addSurikatButtonElement = document.getElementById("add-surikat");

//назначить обработчик собитий пи нажатии на кнопку ми будем менять цвет фона параграфа на синий

changeButtonElement.addEventListener("click",()=>{
    paragraphElement.style.backgroundColor ="blue"
})

// поменяем текст внутри
changeFlowerButtonElement.addEventListener("click",()=>{
    flowerElement.textContent = " Ягоди"
});
addSurikatButtonElement.addEventListener("click",()=>{
    surikatElement.src = " https://yt3.ggpht.com/a/AGF-l78_OCoXkRxFMIABLatoe_Ln-jG0pHiDUnLE1A=s900-c-k-c0xffffffff-no-rj-mo"
});
surikatElement.style.width ="300px"