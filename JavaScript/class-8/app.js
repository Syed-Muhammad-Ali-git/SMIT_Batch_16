// document.write("<h1> Hello JS </h1>");





// var numArr = [1, 5, 3, 20, 4, 2, 10, 15, 1000];
// console.log(numArr.sort());


// var items = ['chips', 'cake', 'snacks', 'choolate', 'biscuits'];
// var userInput = prompt("What do you want to eat?");

// if (items.indexOf(userInput) != -1) {
//     console.log(userInput, "is available in our bakery at index no", items.indexOf(userInput));
// }

// else {
//     console.log(userInput, "is not available in our bakery!");
// };


// for (var i = 0; i < 10; i++) {
//     console.log(i);
// };

// for (var i = 5; i <= 15; i++) {
//     console.log(i);
// };

// var items = ['chips', 'cake', 'snacks', 'choolate', 'biscuits'];

// for (var i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }

// for (var i = 1; i <= 12; i++) {
//     console.log(i);

//     if (i == 6) {
//         break;
//     }
// };



var items = ['chips', 'cake', 'snacks', 'choolate', 'biscuits'];
var userInput = prompt("What do you want to eat?");
var isFound = false;

for (var i = 0; i < items.length; i++) {
    console.log(items[i]);

    if (userInput == items[i]) {
        isFound = true;
        break;
    };
};

if (isFound) {
    console.log(userInput, "is available in our bakery!");
}

else {
    console.log(userInput, "is not available in our bakery!");
}