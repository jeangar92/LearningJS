document.querySelector('h1').innerText = "Welcome to the Upside Down"
const image = document.querySelector('img')

const eggos = document.createElement('img')

document.querySelector('.container').appendChild(eggos)
eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg')
eggos.style.width = '50%'
eggos.remove()

// global of 


// with global variable the compiler will hold the variable until the end of the program
//with codeblock, the variable will be deleted when the compiler go out of the block -> it will save the mermory
/**
* Global scope
* Code block scope
* Function scope
*/


//when will the variable be deleted ?
// .innerText("only text here")
// .innerHTML = "<strong>can put any thing here </strong>"

// const btn = document.getElementById('btn')

// const sayHello = () => {
//   console.log("You just clicked me!!!")
// }

// document.body.querySelector("li:nth-child(2)")
// querySelectorAll("li")[1]
// ("liTag")

const changeClass = () => {
  document.body.classList.toggle('black')
}
btn.addEventListener('click', changeClass)

const car = {
  color: 'blue',
  hp: 4000,
  year: 1989,
  name: "MEC"
}

const cars = [
  {
    color: 'blue',
    hp: 4000,
    year: 1989,
    name: "MEC"
  },
  {
    color: 'blue',
    hp: 4000,
    year: 1989,
    name: "Toyota"
  }
]

//primitive and object
//primitive: string, number, undefined, NAN ...., Symbol -> create a unique value: const id = Symbol('id') -> unique value
const animals = [1,"dog", undefined, {name: "trung"}]

console.log(car.type) // undefined

const car1 = {name: 'Toyota', type: 'Sedan'}
const car2 = {name: 'Toyota'}
const typeOfCar1 = car1.type != undefined ? car1.type : 'Hatback'
const typeOfCar2 = car2.type != undefined ? car2.type : 'Hatback'
console.log(typeOfCar1, typeOfCar2)


const obj = {}
for (let i = 0; i < 10; i++) {
  obj['key' + i] = 'foo' 
}
console.log(obj)
const people = {undefined: "Jean"} // output ?
people.undefined
//The key is alway a string
""

const obj = {
  something: 'wuttt'
}

if (obj.something) {
  console.log('ok') // ok
}


if (obj.anotherthing) {
  console.log('ok')
} else {
  console.log('no go') // 
}


const evens = [2, 4, 6];
const odds = [1, 3, 5];

const moreEvens = [...evens, 8, 10];

console.log(moreEvens);
//[2, 4, 6, 8, 10];

//[evens,8,10]
[[2, 4, 6], 8, 10]

people.JayZ.shirt

spread ...

const letters = {
  a: 1,
  b: 2,
  c: 3
};

const allLetters = {
  ...letters,
  g: 20,
  u: 30,
};

allLetters.a = 20;

console.log('all letters: ');
console.log( allLetters)
console.log('all letters: ', allLetters);
console.log(allLetters, 'all letters: ');
console.log(`all letters: ${allLetters}`);

//   console.log('letters: ', letters)

// From ES6
const person = { firstName: 'Drake', lastName: 'Talley', city: 'Memphis' }; // attributes
const newPerson = {...person, city:'Los'} // { firstName: 'Drake', lastName: 'Talley', city: 'Los' }


// const cats = [1,2,3,4,5]
// cats.forEach((cat) => {
//   console.log(cat)
// })

// useful functions: filter, map, reduce
const students = [
  {name: 'Trung', 'location': 'VN', score: 10},
  {name: 'Jean', 'location': 'US', score: 11},
  {name: 'Jon', 'location': 'US', score: 12},
]

// we have to get students who live in US
const usStudents = students.filter((student) => {
  return student.location === 'US' // return true
})
// the first time: usStudents = []
// the second time: usStudents = [{name: 'Jean', 'location': 'US'}]
//third time 
console.log(usStudents)


const usStudent2s = students.filter((student) => student.location === 'US') // Expression

// get total score of students
let sum = 0
students.forEach((student) => {
  sum = sum + student.score
})

const students = [
  {name: 'Trung', 'location': 'VN', score: 10},
  {name: 'Jean', 'location': 'US', score: 11},
  {name: 'Jon', 'location': 'US', score: 12},
]
const sum = students.reduce((result, student) => {
  return result + student.score // result: 21
  // result = result + student.score
}, 0)

// you are a teacher and your student's score is very low so you have to add more score for them. Plus 5 score for each student

// map function is for you to convert from old element to new element

const oldStudents = [
  {name: 'Trung', 'location': 'VN', score: 10},
  {name: 'Jean', 'location': 'US', score: 11},
  {name: 'Jon', 'location': 'US', score: 12},
]

const newStudents = oldStudents.map((student) => {
  return {
    ...student,
    location: "UK",
    score: student.score + 5
  }
})

console.log(newStudents)


sayHello = (name) => { // paramater
  console.log("welcome ", name, "to the world")
}

const myName = "trung"
sayHello(myName) //argument
// position


// Write a function that takes a value outsize of the function as argument
// Return the type of the value
function myFunction(a) {
  return typeof(a)
}
// when you call this function you have to pass an argument

const name = "Trung"
myFunction(name)//this is outside the block
// nothing will be displayed in your screen



// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a' 
function myFunction(a, n){
  
  return a[n-1]
}
myFunction("hello", 1) // depth understand about it

h e l l o =>  1h
0 1 2 3 4

a = "hello"
// do you sleep enought? no 



//do you know what a nap is?ice tea?
The name is "Tea + Province" 
"Los Tea"


15-18 dollars /hr 
// if you get that job you would get this salary for now 
if you can get a junior job in a us company I think 

// you have to live from now to 5 months

return a.slice(0, a.le)


function myFunction()

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
Math.pow((a + b - c) * d / e, f)

//is it clear?
//do you understand?

// there are 4 cases here 
// which cases a contains 

let result = ""
if (condition) {
  result = 
} else {
  result = 
}
`${a}${b}`

in 5 months we will get used to it 


time change (9am here saturday) > (8pm )