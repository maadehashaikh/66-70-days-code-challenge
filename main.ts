// Union Types
// In TypeScript, union types allow you to declare a type that can be one of several types. This means that a variable with a union type can hold a value of any of the specified types.

let number : string | number ;
number = "Seventy";
number = 20;
console.log(number);

//Literal Types :
function printText(text: "hello" | "world") {
  console.log(text);
}
printText("hello");
printText("world");


//Literal Types :
function getMessage(order: "ascending" | "descending") {
  if (order === "ascending") {
      console.log("You chose ascending order.");
  } else {
    console.log("You chose descending order.");
  }
}
getMessage("descending");



//Nullable Types :
function usermarks(marks : number | null) {
  if (marks === null) {
      console.log("Student has got 0 marks ");
  } else {
      console.log(`You have got ${marks} marks`);
  }
}
usermarks(77);
usermarks(null);


//TYPE ALIAS
type ID = string | number;
function getEntityName(id: ID) {  // type ko yahn p bus refer kardia h
  console.log(`Entity with ID ${id}`);
}
getEntityName(123);
getEntityName("Twelve");

//INTERSECTION TYPE 
type Person = {
  name: string;
};
type Age = {
  age: number;
};
type PersonWithAge = Person & Age;
function getPersonInfo(person: PersonWithAge) {
  console.log(`${person.name} is ${person.age} years old.`);
}
let person: PersonWithAge = {
  name: "Maadeha",
  age: 22
};
getPersonInfo(person);

// Type-Annotations-With-Arrays
//Type annotations with arrays in TypeScript allow you to specify the type of elements that an array can contain. You can define arrays with specific element types, such as string[] for an array of strings or number[] for an array of numbers. 

let fruits :string[] = ["apple","pineapple","grapes","beetroot"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}

//Tuples In TS 
// In TypeScript, a tuple is a fixed-length array where each element has a specific, known type. Unlike regular arrays, tuples allow you to define the type for each element at a specific index.

let x: [string, number , boolean];
x = ["hello", 10 , true];
console.log(x); 

//Enums 
enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
const today: Days = Days.Thursday;
console.log(`Today is ${Days[today]}`);

//Interface in TS 
// n TypeScript, an interface is a way to define the structure of an object. It describes the shape of an object, including the names of properties and their types. Interfaces can be used to enforce a certain structure on objects, making it easier to work with complex data types.

interface users {
  name: string;
  roll_Number: number;
}
let user: users = {
  name: "Aisha",
  roll_Number: 24,
};
console.log(`UserName is ${user.name} and User's Roll Number is :${user.roll_Number}` );


// INTERFACE METHOD AND PARAMETERS
interface Person2 {
  name: string;
  age: number;
  greet(message: string): void;
}
const Sarah: Person2 = {
  name: "Sarah",
  age: 30,
  greet(message: string) {
    console.log(`${this.name} says: ${message}`);
  },
};

Sarah.greet("I love Books !");


//  interfaces are typically used when defining the shape of objects or classes, while type aliases are used to create shorter, more readable names for complex types. The choice between interfaces and type aliases often depends on the specific use case and coding style preferences.


console.log("here is the commit of the day !!");




