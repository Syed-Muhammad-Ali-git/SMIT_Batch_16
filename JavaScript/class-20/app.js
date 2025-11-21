// let user = undefined;

// const condition = (user != undefined) ? (user) : ('No User Found');
// console.log(condition);

// const flag = false;
// const condition = flag ? 'Success' : 'Not Success';
// console.log(condition);

//  Arrow functions:

// function testFunction() {
//     console.log('Hello functions!');
// };

// let testFunction = function () {
//     console.log('Hello functions123');
// };

// testFunction();


// const newFunction = (userName) => {
//     console.log(`Hello ${userName}`);
// };

// newFunction('AHmed');



// const newFunction = (userName) => console.log(`Hello ${userName}`);
// newFunction('Umer');


// const sumValue = (a, b = 1) => {
//     const add = a + b;
//     console.log(add);
// };

// sumValue(10, 5);
// sumValue(2);

// const countVal = 'Test User';
// const count = countVal || 'No user found'







const showFruits = (fruit1, fruit2, ...restParams) => {
    console.log(fruit1, fruit2);
    console.log(restParams);
};

showFruits('Apple', 'Banana', 'Grapes', 'Apple1', 'Banana2', 'Grapes3', 'Banana55', 'Grapes37');