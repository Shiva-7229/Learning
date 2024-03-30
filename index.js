/* // Printing output using console.log() 
console.log(`Hello`)
console.log(`I Like Pizza`)

// Printing alert message using window.alert()
window.alert(`This is a window`)
window.alert(`I Like Pizza`)
*/

// This is a single line comment

/* 
        This
        is 
        a 
        multiline
        comment
*/
/* // var is a keyword but it is not using 
var a = 5
var b=10
console.log(a+b)*/

/* // Operations on 1. Numbers, 2. Strings, 3. Boolean
let age = "22"; //"let" is a keyword used to declare a variable
let price  = 10.99;
let gpa = 2.1;
console.log(age);
console.log(price);
console.log(gpa);

console.log(`You are ${age} years old`);
console.log(typeof age)

let x = 5
x = x +1
console.log(typeof x) // printing type by using "typeof" function
let online = true;
console.log(typeof online);
console.log(`Bro is Online: ${online}`) // only use backward quotes in javascript 

// `${}` is used to print declared data inside output data or middle of output data

document.getElementById(`myH1`).textContent='Hello World!';

let fullname = "Sadashivudu Boga";
let age = 22;
let isstudent = false;

// document = it connects with HTML tag

document.getElementById(`p1`).textContent = `Fullname: ${fullname}`;
document.getElementById(`p2`).textContent = `You are ${age} years old`;
document.getElementById(`p3`).textContent = ` Enrolled: ${isstudent}`;
*/
/*  // Arithmetic Operations
let students = 30;

students = students+1;
students = students-1;
students = students*2;
students = students/2;
students = students**2;
students = students%2;

students+=1;
students-=1;
students *=2;
students /=2;
students **=2;
students %=2;

// increment & decrement operations
students++;
students--;

console.log(students);

function multiply(a, b){
    return a*b;
}
function calculate(Operations, a,b){
    return Operations(a,b);
}
console.log(calculate(multiply, 5,6));
*/

/*  Operator Precedence
    1. paranthesis ()
    2. exponent
    3. Multiplication & Division & Modulo
    4. Addition & Substraction

let result = 2*3+5/2**3-3
console.log(result)
*/

/*
How to accept user input? (2 ways)
1. Easy way = window prompt
2. professional way = HTML textbox
*/
/*
// 1. Easy way = window prompt
let username;

username = window.prompt(`What is your username?`)
console.log(username)

// 2. professional way = HTML textbox

let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username)
    document.getElementById("myH1").textContent = `Hello ${username}`
}
*/
/*
// Type conversion = change the datatype of variable to another (strings, Number, Booleans)
let age = window.prompt("How old are you?")
age = Number(age)
age+=1

console.log(age, typeof age)

let x = "pizza"; // "pizza"=> pizza String, "0" => 0 String, "" => 0 String
let y = "" // "pizza"=> NaN Number, "0" => 0 Number, "" => 0 Number
let z = "" // "pizza"=> true boolean, "0" => true boolean, "" => false boolean

x = String(x)
y = Number(y);
z = Boolean(z)

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z);
*/
/*  // "const" = is a keyword used to declare a variable that cannot be reassigned with a new value
const  greeting = "hello";
greeting.length = 10;
console.log(greeting.length);
console.log(greeting)

let i = 0
while(i<5){
    console.log(i)
    i++
}
*/
/*
// const = const is a variable that can't be changed
pi = 3.14159 = pi value is constant
circumference formula => c = 2 * pi * radius

const PI = 3.14159
let radius
let circumference

//radius = window.prompt("Enter the radius?");   // Easy way
//radius = Number(radius)
//circumference = 2 * PI * radius;  
//console.log(circumference)

document.getElementById("mybutton").onclick = function(){ 
    radius = document.getElementById("mytext").value;
    radius = Number(radius);                         // Professional way
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = "The circumference of a circle is "+circumference+"cm";
}
*/
/*
// counter program
const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
*/
/*
 // Math = built-in object that provides a collection of properties and methods 
console.log(Math.PI)
console.log(Math.E)

let x = 3;
let y = 2;
let z = 1;

z = Math.round(x);
z = Math.floor(x);
z = Math.ceil(x);
z = Math.trunc(x);
z = Math.pow(x,y);
z = Math.sqrt(x)
z = Math.log(x)
z = Math.sin(x)
z = Math.cos(x)
z = Math.tan(x)
z = Math.abs(x)
z = Math.sign(x)
let max = Math.max(x,y,z)
let min = Math.min(x,y,z)

console.log(min)
*/
/*
// Random Number Generator
const min = 50;
const max = 100;
let randomnum = Math.floor(Math.random() * (max-min)) +min;

console.log(randomnum)

// random number generator using html css js

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomnum1;
let randomnum2;
let randomnum3;

myButton.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max)+min;
    randomnum2 = Math.floor(Math.random() * max)+min;
    randomnum3 = Math.floor(Math.random() * max)+min;
    label1.textContent = randomnum1;
    label2.textContent = randomnum2;
    label3.textContent = randomnum3;    
}
*/
/*
// IF STATEMENTS = If a condition is true, execute some code
//                 If not do something else 
// Comparing age above 18 or below 18
let age = 13;
if(age>18){
    console.log("You are old enough to enter the site")
}
else{
    console.log("You must be 18+ to enter the site")
}
// comparing time before 12 good morning and after 12 good afternoon
let time = 15
if(time<12){
    console.log("Good Morning!")
}
else{
    console.log("Good Afternoon!")
}
// comparing student or not 
let isstudent = false;
if(isstudent){
    console.log("You are a Student!")
} 
else{ 
    console.log("You are NOT a Student!")
}
let age = 18
let isLicense = false
if(age>16){
    console.log("You are old enough to drive!")
    if(isLicense){
        console.log("Yes, You have your License!")
    }
    else{
        console.log("But, You do not have License Yet!")
    }
}
else{
    console.log("You must have 16+ to have License!")
}

let age = prompt(`Enter Your age?`);
const butt1 = document.getElementById("butt1");
const butt2 = document.getElementById("butt2");
const site = document.getElementById("site");

butt1.onclick = function(){
    site.textContent = `You are old enough to enter the site as you are ${age} years old.`
}
butt2.onclick = function(){
    site.textContent = `You must be ${age}+ years to enter this site.`
} 
const text = document.getElementById("text")
const butt1 = document.getElementById("butt1")
const result = document.getElementById("result")
let age;
butt1.onclick = function(){
    age = text.value;
    age = Number(age);
    if(age>=100){
        result.textContent = `You are TOO OLD to enter this site!`;
    }
    else if(age == 0){
        result.textContent = `You can't enter. You are just born!`;
    }
    else if(age >=18){
        result.textContent = `You are old enough to enter this site!`;
    }
    else if(age<0){
        result.textContent = `Your age can't be Negative!`;
    }
    else{
        result.textContent = `You must be 18+ to enter this site!`;
    }
}
*/
/*
//.checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT Subscribed!`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}
*/
/*
//Ternary Operator = A Shortcut to if{} and else{} statements helps to assign a variable based on a condition.
let age = 12;
let message = age >=18 ? "you are adult" : "you are minor";
console.log(message);

let time = 10;
let timeofday = time < 12 ? "Good Morning!" : "Good Afternoon!";
console.log(timeofday);

let isstudent = false;
let text = isstudent ? "You are a student." : "You are not a student.";
console.log(text);

let purchaseAmount = window.prompt("Enter Total Amount: ");
let discount = purchaseAmount>=100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount-purchaseAmount*(discount/100)}`);

let purchaseAmt = document.getElementById("myText");
let mySubmit = document.getElementById("mySubmit");
let totalAmt = document.getElementById("totalAmt");
let total;
let Amount;
mySubmit.onclick = function(){
    Amount = purchaseAmt.value;
    Amount = Number(Amount)
    total = Amount>=100?10:0;
    totalAmt.textContent = `Your total is $${Amount-Amount*(total/100)}`;
}
*/
/*
//Switches = can be an efficient replacement to many else if statements
let day = 2;
switch(day){
    case 1:
        console.log(`It is Monday`);
        break;
    case 2:
        console.log(`It is Tuesday`);
        break;
    case 3:
        console.log(`It is Wednesday`);
        break;
    case 4:
        console.log(`It is Thursday`);
        break;
    case 5:
        console.log(`It is Friday`);
        break;
    case 6:
        console.log(`It is Saturday`);
        break;
    case 7:
        console.log(`It is Sunday`);
        break;
    default:
        console.log(`${day} is not a day`);
}

let marks = 52;
let grade;
switch(true){
    case marks >=90:
        grade = "S";
        break;
    case marks >=80:
        grade = "A";
        break;
    case marks >=70:
        grade = "B";
        break;
    case marks >=60:
        grade = "C";
        break;
    case marks >=50:
        grade = "D";
        break;
    case marks >=40:
        grade = "E";
        break;
    default:
        grade = "F";
}
console.log(grade);

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const day = document.getElementById("day");
let weakday;

mySubmit.onclick = function(){
    weakday = myText.value;
    weakday = Number(weakday);
    switch(weakday){
        case 1:
            day.textContent = `It is Monday`;
            break;
        case 2:
            day.textContent = `It is Tuesday`;
            break;
        case 3:
            day.textContent = `It is Wednesday`;
            break;
        case 4:
            day.textContent = `It is Thursday`;
            break;
        case 5:
            day.textContent = `It is Friday`;
            break;
        case 6:
            day.textContent = `It is Saturday`;
            break;
        case 7:
            day.textContent = `It is Sunday`;
            break;
        default:
            day.textContent = `${weakday} is not a day`;
    }
}

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const day = document.getElementById("day");
mySubmit.onclick = function(){
    marks = myText.value;
    switch(true){
        case marks >=90:
            grade = "S";
            break;
        case marks >=80:
            grade = "A";
            break;
        case marks >=70:
            grade = "B";
            break;
        case marks >=60:
            grade = "C";
            break;
        case marks >=50:
            grade = "D";
            break;
        case marks >=40:
            grade = "E";
            break;
        default:
            grade = "F";
    }
    day.textContent = `Your Grade is ${grade}`
    console.log(grade)
}
*/
/*
// String Methods = It allows you to manipulate and work with text

let username = "1234567890";

// 1. .charAt() - used to access the indexes inside a string
//let result = username.charAt(5);

// 2. .indexOf() - used to print the index number of character inside string from starting.
//let result = username.indexOf("a")

// 3. .lastIndexOf() - used to print the last indices number from starting.
//let result = username.lastIndexOf("d")

// 4. .length - used to print the length of the string
//let result = username.length;

// 5. .trim() - default at start and end, .trimStart() - at start, .trimEnd() - at end - used to remove the white spaces
//let result = username.trim();
//let result = username.trimStart();
//let result = username.trimEnd();

// 6. .toUpperCase() - used to return capital letters (A-Z)
//let result = username.toUpperCase();

// 7. .toLowerCase() - used to return small letters (a-z)
//let result = username.toLowerCase();

// 8. .repeat() - used to repeat the string by user wish
//let result = username.repeat(4)

// 9. .startsWith() - Returns a boolean value - check the white spaces at starting position
//let result = username.startsWith("S");

// 10. .endsWith() - Returns a boolean value - check the white spaces at ending
//let result = username.endsWith("g");

// 11. .includes() - check the white spaces inbetween the string
//let result = username.includes(" ");

// 12. .replaceAll() - Replace the specific once with our needs
//let result = username.replaceAll("-","")

// 13. .padStart() - Specifies the length of the string and print what we want from starting
//let result = username.padStart(15,"0")

// 14. .padEnd() - Specifies the length of the string and print what we want from ending
//let result = username.padEnd(15,"0")

console.log(result);
*/
// String Slicing - creates a sub-string from a portion of another string
// String.slice(start,end)

const fullName = "Sadashivudu Boga"