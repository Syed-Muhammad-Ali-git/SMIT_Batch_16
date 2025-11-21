// const greet = (userName, cb) => {
//     console.log(`Hello ${userName}`);
//     cb();
// };

// const callBackFc = () => {
//     console.log('I am callback function');
// }

// greet('John', callBackFc);













// const greet = (userName , cb) => {
//     console.log(`Hello ${userName}`);
//     cb();
// };


// greet(
//     'Mark',
//     () => {
//         console.log('Hello callback functions in JS')
//     }
// );

// const calculate = (a, b, shoiwResult) => {
//     const total = a + b;
//     shoiwResult(total);
// };

// const displayResult = (res) => {
//     console.log(`Result: ${res}`);
// };

// calculate(10, 10, displayResult);
// calculate(20, 10, displayResult);







// const recursiveFunction = () => {
//     const input = prompt('Enter your name');

//     if (input?.trim?.length > 1) recursiveFunction();
//     else console.log('Hello: ', input);
// }

// recursiveFunction();



// const trimStr = '   Test  '.trim();
// console.log(trimStr);
// console.log(trimStr.length);




const recursiveFunction = (n) => {
    console.log(n);

    if (n > 1) recursiveFunction(n - 1)
    else console.log('Function ended');
}

recursiveFunction(5);