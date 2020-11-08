//use "let" keyword to declare variables

let str;
str = 'Jimmy';
console.log(name);

let interestRate = .5;
console.log(interestRate);

const coolness = 10;

//define objects
let person = 
{
    name: 'Taylor',
    age: '27',
    heightFt: 5,
    heightIn: 11,
};

console.log(person);

//dot notation to manipulate objects
person.name = 'Nicole';
console.log(person.name);

//bracket notation to manipulate objects
//used for dynamic manipulation (runtime)
let userInputElementToChange = 'name';
let userInputNewValue = 'Ermac'
person[userInputElementToChange] = userInputNewValue;

//arrays
//objects in array as well as size of array are dynamic
let selectedColors = ['red', 'blue', 'green'];
console.log(selectedColors[0]);
selectedColors[3] = 'orange';
console.log(selectedColors);


//functions
function addColor(color)
{
    console.log('Adding new color:');
    selectedColors[4] = color;
    console.log(color + ' was added.');
    console.log(selectedColors);
}

addColor('blue');