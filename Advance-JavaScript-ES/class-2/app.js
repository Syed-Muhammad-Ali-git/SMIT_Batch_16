// var emailInput = document.getElementById("email");
// var passwordInput = document.getElementById("password");

// function saveUser() {
//     var userObj = {
//         email: emailInput.value,
//         password: passwordInput.value,
//     };

//     var stringFormatData = JSON.stringify(userObj);
//     localStorage.setItem("User", stringFormatData);
//     alert('User saved successfully!');

//     window.location.href = "./about.html";
// };









// if (true) {
//     console.log('success');
// }

// else {
//     console.log('Not success');
// }

// Var scoping...!

// function varScopinghandler() {
//     if (true) {
//         var checkScope = "var success";
//         console.log("a: ", checkScope);
//     };

//     console.log("b: ", checkScope);
// };

// varScopinghandler();

// Let Scoping...! (Local , Brackets)

// function letScopinghandler() {
//     if (true) {
//         let checkScope = "let success";
//         console.log("a: ", checkScope);
//     };

//     console.log("b: ", checkScope);
// };

// letScopinghandler();





// var str = "variable testing";
// var str = "variable testing 1";
// console.log(str);


// let str = "variable testing";
// let str = "variable testing";
// console.log(str);




// var str = "JavaScript";
// str = "EcmaScript";
// console.log(str);


// let str = "JavaScript";
// str = "EcmaScript";
// console.log(str);


// const str = "JS";
// str = 'TS';
// console.log(str);



// console.log(testHoisting);
// var testHoisting = 'JS World';


// console.log(testHoisting);
// let testHoisting = 'JS World';




// greetUser();
// function greetUser() {
//     console.log('Hello Users');
// };


// var greetUser = function() {
//     console.log('Hello Users');
// };

// greetUser();




// const powValue = Math.pow(2, 4);
// console.log(powValue);

// const powValue = 5 ** 3
// console.log(powValue);


let firstName = 'Muhammad';
let lastName = 'Ahmed';
// let bioData = "Hello users, My first name is " + firstName + " and last name is " + lastName;
// console.log(bioData);




let bioData = `Hello users,
My first name is ${firstName} and last name is ${lastName}`;
console.log(bioData);