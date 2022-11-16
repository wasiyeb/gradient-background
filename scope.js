/* //function
function add(a, b) {
    return a + b;
}

//arrow function
const add = (a, b ) => a + b;
add(4, 5)//9 */

// a function could be a const
const a = function() {
    console.log(a)
}

/* const player = "dagi";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel)//true: 
}

console.log('outside', wizardLevel)//false */

/* //destructuring
const obj = {
    player: 'dagi',
    experience: 100,
    wizardLevel: false
}

const { player,experience } = obj;
let { wizardLevel } = obj; */

//Template strings: greetings
const firstName = 'Dagi';
const age = 34;
const pet = 'cat';

const greetingBest = `Hello ${firstName} you seem to be ${age-10}, what a lovely ${pet} you have!`;//'Hello Dagi you seem to be 24, what a lovely cat you have!'

function greet(name='', age=30, pet='horse') {
    return `Hello ${firstName} you seem to be ${age-10}, what a lovely ${pet} you have!`;
} //'Hello Dagi you seem to be 20, what a lovely horse you have!'