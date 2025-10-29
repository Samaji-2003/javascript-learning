//object 

const person ={
    fname: "samaji",
    Lname: "dulmoni",
    age: 22,

    sayHello: function(){
        console.log("Hello " + person.fname);
    },

    greet: () => {
        console.log("Hi " + person.fname);
    },
}

console.log("Person Object:", person);
console.log(person.fname);

person.sayHello();
person.greet(); 

//this

const student = {
    fname: "rahul",
    Lname: "sharma",
    age: 21,

    sayHello: function(){
        console.log("Hello " + this.fname);
    },

    greet: function(){   // this keyword does not work with arrow function
        console.log("Hi " + this .fname);
    },
}

//constructor function

function Car(make, model, year , color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.drive = function(){
        console.log("driving " + this.model);
    }
}

const car1 = new Car("Toyota", "Camry", 2020, "Red");
console.log("Car 1:", car1.model);

const car2 = new Car("Honda", "Civic", 2019, "Blue");
console.log("Car 2:", car2.model);

//class

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    display(){
        console.log("Product:", this.name, "Price: $", this.price.toFixed(2));
    }

    calculate(tax){
        this.price = this.price +tax;
    }
}

let tax = 0.1;

const product1 = new Product("Laptop", 800);
product1.display();

const product2 = new Product("Phone", 500);
product2.display();

console.log("After tax: $", product1.calculate(tax));

//static method

class MathUtil{
    static PI = 3.14;

    static getDiameter(r){
        return 2 * r;
    }

    static getCircumference(r){
        return (2 * this.PI * r).toFixed(2);
    }
}

console.log(MathUtil.PI);
console.log("Diameter:", MathUtil.getDiameter(5));
console.log("Circumference:", MathUtil.getCircumference(5));


class User{
    static count = 0;

    constructor(username){
        this.username = username;
        User.count++;
    }
}

const user1 = new User("samaji");
const user2 = new User("rahul");
console.log("Total Users:", User.count);

//inheritance

class Animal{
    alive = true;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log("this " + this.name + " is eating");
    }

    sleep(){
        console.log("this " + this.name + " is sleeping");
    }

    move(speed){
        console.log("this " + this.name + " is moving at " + speed + " km/h");
    }
}


class Rabbit extends Animal{
    legs = 4;
    constructor(name, age , runningspeed){
        super(name,age);
        //this.name = name;
        //this.age = age;
        this.runningspeed = runningspeed;
    }

    run(){
        console.log("this " + this.name + "is running");
        super.move(this.runningspeed);
    }
}

class Fish extends Animal{
    

    constructor(name, age , swimspeed){
        super(name,age);
        //this.name = name;
        //this.age = age;
        this.swimspeed = swimspeed;
    }

    swim(){
        console.log("this " + this.name + " is swimming")
    }
}



const bunny = new Rabbit();

bunny.alive = false;

console.log("Alive? " , bunny.alive, bunny.legs , bunny.name);
bunny.eat();
bunny.sleep();

//SUPER

const goldfish = new Fish("Goldfish", 1, 10);
console.log("Alive? " , goldfish.alive, goldfish.name, goldfish.age);
goldfish.swim();

console.log(bunny);

//getter and setter

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }

        else
            console.error("Width must be positive");
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else
            console.error("Height must be positive");
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }

}
 const rect  = new Rectangle(10, 5);

console.log("Area:", rect.area);


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    set name(newName){
        if(newName.length > 0 && typeof newName === 'string'){
            this._name = newName;
        }

        else{
            console.error("Invalid name");
        }
    }

    set age(newAge){
        if(newAge >= 0 && Number.isInteger(newAge)){
            this._age = newAge;
        }

        else{
            console.error("Invalid age");
        }
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }
}

const person1 = new Person("samaji", 22);
console.log("Person 1:", person1);
