const checkNumber = function (number) {
    if (number > 100) { 
        return true; }
    else {
    return false;
}}

const result = checkNumber(202)
console.log(result)

// This function does something, it is checking a number

const brendaBot = function (age, audience) {
    if(age < 18) { return "This is a club for adults";
}
    if(audience > 250) { return "It's too busy now, come back later"
}
    { return "come in"} 
}

const visitor = brendaBot(18, 250);
console.log(visitor)

const Average = function(number1, number2, number3, number4, number5) {
    return Math.round((number1+number2+number3+number4+number5) / 5);
}

const number = Average(12, 17, 23, 18, 19);
console.log(number);


