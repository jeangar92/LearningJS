# Learning JS 
## 1.JavaScript Data Types
### **Primitive data**
- Number EX: 1 2 3
- String EX: "anytext" <br>
- Boolean EX: true or false <br>
- Null EX: *value null represents the intentional absence of a value*
- Undefined
- Symbol
    
### Complex data
- Object
- Array

## 2.The Number Data Type
***Math is a built in function so we can use anywhere in our program***

- Math.random (Returns a random decimal) <br>
- Math.floor (Round down to nearest integer) <br>
- Math.ceil (Round up to nearest integer) <br>
- Math.round (Round to nearest integer) <br>
***EXAMPLE:*** 
- Math.round(4.15) would output 4 <br>
- Math.round(4.80) would output 5


### **3.String Data Type**
*3.1 There are three ways to declare a string param:*
- ""
- ''
- ``

*3.2 The common string functions:*
- length
- replace
- indexOf
- search
- upperCase
- lowerCase
- trim
- split

## **4.String Concatentation**
***There are two ways:*** <br>
"string 1" + "string 2" <br>
`abc ${var1} abc ${var2} abc`

 ## **5.Converting Strings to Integers with parseInt() and parseFloat()**
parseInt("123") prints 123<br>
parseInt("30 years old") prints 30<br>
parseInt("Jean is 30 years old") prints NaN
## **6.Variables and Keywords**
var<br>
let<br>
const
## **7.Assignment Operators**
=<br>
+=<br>
-=<br>
*=<br>
Full list at:<br>
https://www.w3schools.com/js/js_assignment.asp

## **8.Boolean Data Type**
Falsey
false
0
'' "" ``
NaN
null
undefined

The rest of variables are Truthy : 1, 2, true, 1, "a", {}, numbers other than 0, new Date();.
*8.1. Type safe comparison operators:*
Strictly equal: ===
Strictly unequal: !==


## **9.Boolean/Logical Operators**
what is the difference between ! and !! ?<br>
! : returns the inverse of original value<br>
EX: let i = 2<br>
i != 1<br>
returns true<br>
!! : returns the original value of a boolean<br>
what is the difference between == and === ?<br>
== : does tge type conversion of the operand before comparison (loose equality)<br>
=== : operator compares the value as well as the data types of the operand (strict equality).<br>

***Note: Unlike == operator, === doesn't does type conversion.***

### **Comparing == and !=**

Comparing string and number: the string is converted into a number before the comparison.<br>
Comparing boolean and number (0 or 1): it treats 0 as false and 1 as true.<br>
Comparing two objects: the operator will check if **both** refer to the same object. If yes then the == operator will return true and != will return false, otherwise == will return false and != will return true.<br>
Comparing null and undefined: then == operator will return true and != operator will return false.

# && ||
&& operator requires both left and right values to be true to return true.<br>
|| Operator requires only one of the values to be true to return true, and only false || false will return false.<br>

---

# Arrays

.toString() returns a string.
.pop() **removes and returns the last item of the array**
.push(item1, ..., itemN) **Adds one or more items to the end**<br>
.reverse() **reverses the order in which the array is organized**
.shift() **removes and returns the first item of the array**
.unshift(item) **adds an item to the front of the array**

---
toString()
join()
pop()
push()
shift()
unshift()
splice()
concat()
slice()
includes()
map reduce filter()

spread is a definition
rest -> next lesson

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c"
, "d", "e", "f"]

// in ES6 we have a powerful method to concat two arrays
we call it is spread

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
const array3 = [...array1, ...array2]


# Conditional Statements

**if**<br>
**else**
# when writing IF / Else functions - Think Ternary Operator


const age = 12

let allowed

if (age === 32) {
  allowed = 'trung'
} else if (age == 30) {
  allowed = 'Jean'
} else {
  allowed = 'Other'
}

console.log(allowed)

////
//Ternary operator
const age = 12
const allowed = age > 18 ? 'yes' : 'no'
console.log(allowed)


we can convert a simple if else function to ternary
with complex if else function we can not do that

-------
***If using many else if, then use switch***
swith are the same with if else function

const food = 'apple';

switch(food) {
  case 'pear':
    console.log('I like pears');
    break;
  case 'apple':
    console.log('I like apples');
    break;
  case 'orange':
    console.log('mmm... citrus');
    break;
  default: // it is not required
  
    console.log('idk what that is');
}
in the case: we have to use many if else function you should think about switch
//=> I like apples
---

# While Loops
// compiler and interpreter
// the javascript compiler will help us compile the source code

let n = 0
while (n < 5) { // false the while stops
  <!-- const str = n % 2 ? 'odd' : 'even'
  console.log(`${n} is ${str}`) -->
  console.log(`${n} is ${n % 2 ? 'odd' : 'even'}`)
  n++ // n = 5
}
line 1: 0 is odd
line 2: 1 is even
line 3: 2 is odd
line 5: 4 is even

1%2 => 1
2%2 => 0
3%2 => 1
4%2 => 0

3%3 0
58%9 4
58 = 9*6 + 4


---

for (let i = 0; i < 10; i++) {
  console.log(i);
  // do more stuff
}
element 

array of objects
const wizards = [
  {name: "Harry Potter", house: "Gryffindor"}, // first element
  {name: "Lord Voldomort", house: "Slytherin"}, // second element
  {name: "Cedric Diggory", house: "Hufflepuff"},
  {name: "Luna Lovegood", house: "Ravenclaw"},  
  {name: "Albus Dumbledor", house: "Gryffindor"}, 
  {name: "Merlin", house: "Slytherin"}, 
  {name: "Pomona Sprout", house: "Hufflepuff"}, 
  {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
  {name: "Ron Weasley", house: "Gryffindor"}, 
  {name: "Severus Snape", house: "Slytherin"}, 
  {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
  {name: "Padma Patil", house: "Ravenclaw"}, 
  {name: "Hermoine Granger", house: "Gryffindor"} 
 ]

wizards[0] 
wizards[1]

array objects

# Functions

functions fnName(params) {

}

// ES6
const fnName = (params) => {

}

f(-2) => -4
f(-1) => -2
f(0) => 0
f(1) => 2
f(2) => 4

Here you have to write a function that the name is f

const fnName = (num) => {
 let i = -2
 while (i < 10){
 i++
  console.log(i) 
 }
}
fnName(-2) => result: -4

f only a function name so you can use f1 f2 fAbc ... instead

the name of function, variable avoid keywords like const, let, function, string ...


const movie1 = 'Saving Private Ryan';
const year1 = 1998;
console.log(`${movie1} was released in ${year1}`);

const movie2 = 'Interstellar';
const year2 = 2014;
console.log(`${movie2} was released in ${year2}`);

const movie3 = 'Jason Bourne';
const year3 = 2016;
console.log(`${movie3} was released in ${year3}`);

const theMovieData = (movie, year) => {
  console.log(`The movie ${movie} was release in year ${year}`)
} 
theMovieData(movie1,year1)
legendary definition
