// function greet() {
//     console.log('Hello User!');
// };

// greet();


// const helloUser = () => {
//     const input = prompt('Enter your name!');

//     if (!input) helloUser();
//     else console.log(`Hello  ${input}`);
// }

// helloUser();

// const counter = (n) => {
//     console.log(n);

//     if (n > 1) counter(n - 1);
//     else console.log('Value is now 0');
// };

// counter(5);

// const greet = "Hello JS"; // Global Scope;

// function func1() {
//     console.log(greet);
//     const msg1 = "JS Town";
//     console.log(msg1);
// };

// func1();
// console.log(msg1);






// function outer(str) {
//     console.log(str, 'Lexcical');

//     function inner() {
//         return str, 'closure' // console.log(str, 'closure');
//     };
//     return inner;
// }

// // outer('I am inside closure!')();

// const res = outer('I am inside closure!');
// console.log(res());






// function createCounter(n) {
//     // console.log(n);

//     return () => {
//         let numVal = n;
//         n = n + 1;
//         // console.log('n', n);
//         return numVal;
//     };

// }

// let output = createCounter(10);
// console.log(output());
// console.log(output());
// console.log(output());


// let n = 2;
// let copy  = n;
// n = 5;

// console.log(copy);



const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPass = document.getElementById("password");

const submitUserData = () => {
    try {
        if (!userName.value) throw "Name is required";
        else if (!userEmail.value) throw "Email is required";
        else if (!userPass.value) throw "Password is required";
        else {
            console.log('Data submitted!');
        }
    }

    catch (err) {
        console.log('Err: ', err);
        err && alert(err);
    }
};


// const submitUserData = () => {
//     if (!userName.value) alert('Name is required');
//     else if (!userEmail.value) alert('Email is required');
//     else if (!userPass.value) alert('Password is required');

//     else {
//         console.log('Data submitted!');
//     }
// }