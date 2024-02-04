//part 1

const ages = [];
ages.push(3, 9, 23, 64, 2, 8, 28, 93, 15);
console.log(ages);

//console.log(ages[7] - ages[0]);

let lastElement = ages[ages.length - 1];
let firstResult = (lastElement - ages[0]);
console.log(firstResult);

let sum = 0;
for (let i=0; i < ages.length; i++) {
    sum = sum + ages[i];
}
const average = sum / ages.length;
console.log(average);

//part 2

var names = [];
names.push('Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob');
console.log(names);

let total = 0;
for (let i = 0; i < names.length; i++) {
    total = total + names [i].length;
}
const avg = total / names.length;
//
console.log(avg);
console.log(names.join(" "));
console.log(names.join(", "));

//part 3
//last index of an array
console.log(names.pop());

//part 4
//first index of an array
console.log(names.shift());

//part 5
const nameLengths = [];


//part 6


//part 7
//
let manyWords = (word, n) => {
    let result = '';
    for (let i = 0; i < n; i++) { //this exact line is going to be burned into my eyelids
        result += word;
    }
    return result;
}
//"and in the morning, i'm making waffles!"
console.log(manyWords("Waffles", 3));

//part 8
//arrow functions are pretty fun
//expanded arrow functions seem almost the same as regular functions
//but the single line ones are super nice
let fullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(fullName('Keanu', 'Reeves'));

//part 9
//
const lottaNumbers = [15, 46, 62].reduce(add, 0);
function add(accumulator, a) {
    return accumulator + a;
}
console.log(lottaNumbers);
//part 10
//running out of names for averages here
const something = [46,85,34,12];
let blank = 0
for (let i = 0; i < something.length; i++) {
    blank = blank + something[i];
}
const anything = blank / something.length
console.log(anything);


//part 11
//yay i already had two array averages!
function twoArrays(average, anything) {
    if (average >= anything) {
        return "true"
    } else {
        return "false"
    }
}
console.log(twoArrays(average, anything));


//part 12
//if else functions are one of my favorites so far
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside = true && moneyInPocket > 10.50) {
        return true
    } else {
        return "nah fam" //this is just funny
    }
}
//gotta check all options
console.log(willBuyDrink(true, 15));
console.log(willBuyDrink(false, 30));
console.log(willBuyDrink(true, 5));

//part 13
//decides if i should clean my house, ride motorcycles, or just watch tv
//depending on the weather and amount of chores i have for the day
//i'm actually gonna use this one, i'll let coding decide my fate on days off haha
function whatToDoToday(chores, weather) {
    if (weather == 'warm' && chores < 3) {
        return "go riding!"
    } else if (weather == 'warm' && chores > 3) {
        return "clean your house you lazy bum"
    } else if (chores > 3 && weather == 'cold') {
        return "can't ride anyway, do the dishes"
    } else (chores < 3 && weather == 'cold') 
        return "just watch tv"
    
}
//printing all options just to see them
console.log(whatToDoToday(5, 'warm'));
console.log(whatToDoToday(1, 'warm'));
console.log(whatToDoToday(5, 'cold'));
console.log(whatToDoToday(1, 'cold'));