
class Animal{
    constructor(age, name, color){
        this.age = age;
        this.name = name;
        this.color = color;
    }
    info(){
        console.log(` меня зовут ${this.name} Возраст: ${this.age} Цвет: ${this.color} `)
    }
}
const panda = new Animal(14,"po","black");
panda.info();

// наследование
// создадим производний ключ
//добавим поле высота полета heightOfFlight u ration


class Bird extends Animal{
    constructor(age, name, color, heightOfFlight, ration ){
        super(age, name, color); // peredaet pola iz animal v bird
        this.heightOfFlight = heightOfFlight;
        this.ration = ration;

    }
}
const colibri = new Bird(14,"po", "black", 100, "flowers")
console.log(colibri);

//+++++++++++++++++

// Создайте класс Alcohol с полями:
class Alcohol{
constructor ( title, strenght, volume){
    this.title=title;
    this.strenght=strenght;
    this.volume=volume;
}
info(){
    console.log(`Ни дня без  ${this.title} `)
}
}
// - title
// - strength - крепость
// - volume - объекм бутылки
//  с методом info - выводт в консоль фразу
//  "Ни дня без <название алкоголя>" | "Надо и меру знать"

// Создайте производный класс Brendy
    class Brendy extends Alcohol{
    constructor(title, strenght, volume, age, country){
        super(title, strenght, volume); 
        this.age = age;
        this.country = country;
    }
}
// - age - выдержка
// - country - страна производства
class  Liquor extends Alcohol {
    constructor(title, strenght, volume, sugarAmount){
        super(title, strenght, volume); 
        this.sugarAmount = sugarAmount;
            }
// Создайте производный класс Liquor
// - sugarAmount - количество сахара
    }
    const carlos = new Brendy ("Carlos I",40,0.7, 2, "Spain");
    const bellis = new Liquor ("Bellis", 18, 0.7, 3);
    carlos.info();
    bellis.info();