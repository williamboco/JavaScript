//Output
document.write("Hello World!");
document.write("<h1>Ako Budoy!</h1>");


//This is a single line comment

/*
This code is for
multiple
comments*/
//alert("This is an alert box!");

var script = 21;
document.write("<h1>" + script + "</h1>");

//Integer
var int = 18;
document.write(int + "<br><br>");

//Floating-Point
var price = 55.55;
document.write(price + "<br><br>");

//String
var name = "I am Yam";
document.write("<h4>" + name + "</h4>" + "<br>");

//Handling the quotes using the escape character (\);
var sayHi = 'Hi World! \'I am a JavaScript Programmer.\'';
document.write(sayHi);

//eval("10 * 20 + 8");

var myNum1 = 20;
var myNum2 = 1;

//if-else statements
if (myNum1 > myNum2) {
  document.write( "<br><br>" + "I am going to graduate!");
}
else {
  document.write( "<br><br>" + "I am going to pass all my subjects!");
}

//if-else-if-else statements
var course = 1;

if (course == 1) {
  document.write( "<br><br>" + "<h1>HTML Tutorial</h1>");
} else if (course == 2) {
  document.write("<br><br>" + "<h1>CSS Tutorial</h1>");
}
else {
  document.write("<br><br>" + "<h1>JavaScript Tutorial</h1>");
}

//switch statement
var day = 2;
switch (day) {
  case 1:
    document.write("Monday" + "<br><br>");
    break;
  case 2:
    document.write("Tuesday" + "<br><br>");
    break;
  case 3:
    document.write("Wednesday" + "<br><br>");
    break;
  default:
    document.write("Another Day!" + "<br><br>");
}

//for loop
document.write("<hr>");
document.write("<h1>For Loop</h1>");
for (i = 1; i <= 5; i++) {
  document.write(i + "<br><br>");
}

document.write("<hr>");
document.write("<h1>While Loop</h1>");
//while loop
var p = 0;
while (p < 10) {
  document.write(p + "<br><br>");
  p++;
}

document.write("<hr>");
document.write("<h1>Do-WhileLoop</h1>");

//do-while Loop
var y = 20;
do {
  document.write(y + "<br><br>");
  y+=1;
}
while (y <= 25);
document.write("<hr>");

//Break statement
document.write("<h1>Break Statement</h1>");
for (s = 0; s <= 10; s++) {
    if (s == 5) {
      break;
    }
    document.write(s + "<br><br>");
}
document.write("<hr>");

document.write("<h1>Functions!</h1>");
function myFunction() {
  document.write("Calling a function.");
}
myFunction.call();
document.write("<hr>");

//Functions with parameters
document.write("<h1>Functions with parameters</h1>");
function sayHello(name) {
  document.write("Hi, " + name + "<br><br>");
}

sayHello("Pam");
sayHello("Yam");

document.write("<hr>");

// Multiple Parameters
document.write("<h1>Multiple parameters</h1>");
function sayHey(name, age) {
  document.write(name + " is " + age + " years old.");
}

sayHey("Yam", 19);
document.write("<hr>");
document.write("<h1>Return statement</h1>");

function myFunction(a, b) {
  return a * b;
}

var x = myFunction(5, 6);

document.write(x);
document.write("<hr>");

//Alert, Prompt and Confirm
document.write("<h1>Alert, Prompt and Confirm</h1>");
//var user = prompt("Please Enter your name: ");
//alert("\nThe name entered is " + user);

// var result = confirm("Do you really want to leave this page?");
// if (result == true) {
// //  alert("Thank you for visiting us!");
// }
// else {
// //  alert("Thank you for staying with us!");
// }

//Objects
document.write("<hr>");
document.write("<h1>Objects!</h1>");

function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}

var p1 = new person("Yam", 19, "Blue");
var p2 = new person("Pam", 20, "Yellow");

document.write(p1.age);
document.write("<br><br>")
document.write(p2.name);

document.write("<hr>");
document.write("<h1>Methods!</h1>");

function person(name, age) {
  this.name = name;
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  }
}

var p = new person("David", 21);
p.changeName("Hek");
document.write("<h5>" + p.name + "</h5>");
document.write("<hr>");

function identity(name, age) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear;
}

function bornYear() {
  return 2018 - this.age;
}

var p = new identity("A", 22);
document.write(p.yearOfBirth());

//Arrays

document.write("<hr>");
document.write("<h1>Arrays!</h1>");

var courses = ["HTML", "CSS", "JS"];
document.write(courses.length);

document.write("<hr>");
document.write("<h1>Combining Arrays</h1>");

var c1 = ["HTMl", "CSS"];
var c2 = ["JS", "PHP"];

//Math Object

var course = c1.concat(c2);
document.write(course[3]);

document.write("<hr>");
document.write("<h1>Math Object!</h1>");

var n = 64;
var answer = Math.sqrt(n);
document.write("The square root of " + n + " is " + answer);

//Date Object

document.write("<hr>");
document.write("<h1>Date Object!</h1>");

function myAlert() {
  alert("Hi!");
}

setInterval(myAlert, 3000);
