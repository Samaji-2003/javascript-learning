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

//destructuring

//swap the values

let a = 5;
let b = 10;

[a, b] = [b, a];
console.log("a:", a, "b:", b);

const color = ["red", "green", "blue", "yellow", "purple"];

[color[0], color[2] ] = [color[2], color[0]];
console.log("Colors:", color);

const [col1, col2, col3, ...rest] = color;
console.log("col1:", col1, "col2:", col2, "col3:", col3);
console.log("rest:", rest);

const personObj1 = {
    f_name: "samaji",
    l_name: "dulmoni",
    age1: 22,
    city: "New York",
    country: "USA"
};

 const personObj2 = {
    fname: "rahul",
    lname: "sharma",
    age2: 25,
    city: "Los Angeles"
 };

//extracting values
const {f_name, l_name, age1, ...address} = personObj1;
console.log(f_name);
console.log(l_name);
console.log(age1);
console.log(address);

const {fname, lname, age2, city, country = "Unknown"} = personObj2;
console.log(fname);
console.log(lname);
console.log(age2);
console.log(city);
console.log(country);

function displayPerson({fname, lname, age2, city, country}){
    console.log(fname);
    console.log(lname);
    console.log(age2);
    console.log(city);
    console.log(country);
}

displayPerson(personObj2);

//nested object

const employee = {
    id: 101,
    name: "samaji dulmini",
    position: "developer",
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};

console.log(employee.hobbies);
console.log(employee.address.city);

class Employee{
    constructor(name, position, ...address){
        this.name = name;
        this.position = position;
        this.address = new Address(...address);// call the Address class
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const emp1 = new Employee("rahul sharma", "designer", "456 Market St", "Los Angeles", "USA");

console.log(emp1.address.country);

//array of objects

const fruits = [{name: "Apple", color: "Red", calories: 95},
    {name: "Banana", color: "Yellow", calories: 105},
    {name: "Orange", color: "Orange", calories: 62},
    {name: "Grapes", color: "Purple", calories: 69},
]


console.log(fruits[0].name);
console.log(fruits[2].calories);

fruits.push({name: "Mango", color: "Yellow", calories: 150});
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.splice(1,2); //remove 2 elements from index 1
console.log(fruits);

fruits.forEach(fruit => console.log(fruit.name));


//map

const fruitName = fruits.map(fruit => fruit.name);
console.log("Fruit Names:", fruitName);


const purpleFruits = fruits.filter(fruit => fruit.color === "Purple").map(fruit => fruit.name);

//reduce

const maxCalories = fruits.reduce((accumulator, fruit) => 
                                     accumulator < fruit.calories ? 
                                   fruit.calories : accumulator);
console.log("Max Calories:", maxCalories);