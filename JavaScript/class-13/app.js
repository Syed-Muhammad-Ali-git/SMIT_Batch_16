// function helloUser() {
//     console.log('Function is working');
// };

// helloUser();
// helloUser();
// helloUser();



// function callUser(userName) {
//     console.log('Hello: ', userName);
// };

// callUser('Ahmed');
// callUser('Umer');
// callUser('Haider');


// function sumValue(num1, num2, num3) {
//     console.log(num1, num2, num3);
//     var addValues = num1 + num2;
//     console.log(addValues);
// };

// sumValue(4, 8);
// sumValue(1, 2);
// sumValue(5, 10, 8);


// function greetUser(name) {
//     console.log('Hi', name);
// }


// function findFriend(freindName) {
//     if (freindName == 'muhammad' || freindName == "ahmed") {
//         greetUser(freindName);
//     }

//     else {
//         console.log('Invalid friend name!');
//     };
// };

// var userInput = prompt('Enter friend name');
// findFriend(userInput);



// function sumValue(num1, num2) {
//     var addValues = num1 + num2;
//     // console.log(addValues);
//     return addValues
// };

// var result = sumValue(4, 8);
// console.log(result);


// var newValue = 100 + sumValue(4, 8);;
// console.log(newValue);



// function showFullName(fName, lName) {
//     return fName + " " + lName;
// };

// var renderName = showFullName('Muhammad', 'Ahmed');
// console.log(renderName);

// Equation: a2 - 2ab + b2  6, 3 

function handleSquareRoot(num) {
    return num * num;
};

function handleEquation(a, b) {
    // console.log('a', a);
    // console.log('b', b);

    var eq = handleSquareRoot(a) - (2 * a * b) + handleSquareRoot(b);
    console.log(eq);
};

handleEquation(6, 3);