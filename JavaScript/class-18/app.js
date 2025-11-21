// var userInput = prompt('Enter gender');

// switch (userInput) {
//     case "male":
//         console.log('1 Your gender is ' + userInput);
//         break;

//     case "female":
//         console.log('2 Your gender is ' + userInput);
//         break;

//     default:
//         console.log('Invalid gender');
// };


var day = new Date().getDay().toString();
console.log(day);

switch (day) {
    case '0':
        console.log(day + " is sunday");
        break;

    case '1':
        console.log(day + " is monday");
        break;

    case '2':
        console.log(day + " is tuesday");
        break;

    case '3':
        console.log(day + " is wednesday");
        break;

    case '4':
        console.log(day + " is thursday");
        break;

    case '5':
        console.log(day + " is friday");
        break;

    case '6':
        console.log(day + " is saturday");
        break;

    default:
        console.log('Invalid date');
};