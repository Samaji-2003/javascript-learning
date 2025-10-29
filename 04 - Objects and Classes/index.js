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
        console.log("Product:", this.name, "Price: $", this.price);
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