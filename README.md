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


