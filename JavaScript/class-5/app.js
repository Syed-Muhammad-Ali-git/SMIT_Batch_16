// var placeName = prompt('Enter the name of the place');
// var age = prompt('Enter your age');

// if (
//     placeName != "" &&
//     age != ''
// ) {
//     console.log('You are eleigible to go!');
// }

// else {
//     console.log('You are not eleigible!');
// };




// var userName = prompt("Enter user name");

// if (userName == 'ahmed' || userName == 'muhammad') {
//     console.log(userName, true);
// }

// else {
//     console.log(false);
// };

// var flag = false;

// if (!flag) {
//     console.log('Success');
// }

// else {
//     console.log('Not success');
// };


var userName = prompt('Enter username');

if (userName != '') {
    var askBreakFast = prompt('Kia khana hy?');

    if (askBreakFast == 'tea' || askBreakFast == 'paratha') {
        console.log('Bring Break Fast!');
    }

    else {
        console.log('Nahi khana!');
    };
}

else {
    console.log("User is not available");
};