// String methods...!

// var str = 'character';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str.slice(1, 5));

// console.log(str.indexOf("h"));

// console.log(str.charAt(10));



// var paragraph = "In previous chapters you learned two different ways to replace World War II with the Second World War II in a string. First, there was the loop-and-slice approach."
// console.log(paragraph.replace("World War", "IT War"));
// console.log(paragraph.replaceAll("World War", "IT War"));


// var yearOfBirth = 1996;
// yearOfBirth = yearOfBirth.toString();
// yearOfBirth = String(yearOfBirth);
// console.log(yearOfBirth, typeof yearOfBirth);

// var num = "150";
// num = Number(num);
// console.log(num, typeof num);


// var percentage = (791 * 100) / 850;
// console.log(percentage.toFixed(3));

var userInput = prompt("Write anything");
var modifiedStr = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
console.log(modifiedStr);