console.log("Hello World")

// let firstName = "Jane"

// firstName = "Joe"

// console.log(firstName)

// const firstName = "Jane"

// firstName = "Abc"

const firstName = "Jane"
const lastName = 'doe'
console.log(firstName + lastName + "ram")

const temLiterals = `My first name is: ${firstName}, 
My last name: ${lastName}. ${2+2}`

console.log(temLiterals)

let points = 5

let bullets = -3.5
console.log(points + bullets)
console.log(points.toPrecision(4) + bullets)

let isAdmin = true

isAdmin = false

console.log(isAdmin)

const simpleList = [
    "Dav", //0
    5, //1
    false, //2
    [1,2,3,4,5,6,7] //3
]
// console.log(simpleList)
console.log(simpleList[3][5])

simpleList

const listObj = {
       name: "Alan",
       lastName: "Doe"
}

const students = [
{
        name: "Alan",
        lastName: "Abby"
},
{
    name: "Bob",
    lastName: "Builder"
},
{
    name: "Charlie",
    lastName: "Carlson"
},
]
console.log(students[0].name + " " + students[0].lastName)
// console.log(listObj)

//9. OPERATORS AND EXPRESIONS
console.log("points: " + points)
// points += 10
// same as line 69 but longer
// points = points + 10
// console.log("points++:" + points)
// console.log(points === 10)
points = 10

console.log((students[0].name === "Alan") && (students[0].lastName === "Abby"))