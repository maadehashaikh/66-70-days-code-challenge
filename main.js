// Union Types
// In TypeScript, union types allow you to declare a type that can be one of several types. This means that a variable with a union type can hold a value of any of the specified types.
var number;
number = "Seventy";
number = 20;
console.log(number);
//Literal Types :
function printText(text) {
    console.log(text);
}
printText("hello");
printText("world");
//Literal Types :
function getMessage(order) {
    if (order === "ascending") {
        console.log("You chose ascending order.");
    }
    else {
        console.log("You chose descending order.");
    }
}
getMessage("descending");
//Nullable Types :
function usermarks(marks) {
    if (marks === null) {
        console.log("Student has got 0 marks ");
    }
    else {
        console.log("You have got ".concat(marks, " marks"));
    }
}
usermarks(77);
usermarks(null);
function getEntityName(id) {
    console.log("Entity with ID ".concat(id));
}
getEntityName(123);
getEntityName("Twelve");
function getPersonInfo(person) {
    console.log("".concat(person.name, " is ").concat(person.age, " years old."));
}
var person = {
    name: "Maadeha",
    age: 22
};
getPersonInfo(person);
// Type-Annotations-With-Arrays
//Type annotations with arrays in TypeScript allow you to specify the type of elements that an array can contain. You can define arrays with specific element types, such as string[] for an array of strings or number[] for an array of numbers. 
var fruits = ["apple", "pineapple", "grapes", "beetroot"];
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruit: ".concat(fruits[i].toUpperCase()));
}
//Tuples In TS 
// In TypeScript, a tuple is a fixed-length array where each element has a specific, known type. Unlike regular arrays, tuples allow you to define the type for each element at a specific index.
var x;
x = ["hello", 10, true];
console.log(x);
//Enums 
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
var today = Days.Thursday;
console.log("Today is ".concat(Days[today]));
var user = {
    name: "Aisha",
    roll_Number: 24,
};
console.log("UserName is ".concat(user.name, " and User's Roll Number is :").concat(user.roll_Number));
var Sarah = {
    name: "Sarah",
    age: 30,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
Sarah.greet("I love Books !");
