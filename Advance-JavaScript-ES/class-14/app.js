// Call function...!
// function greetUser(place, city) {
//     console.log(`Hello ${this.uName}. Place: ${place}. City: ${city}`);
// };

// const user = {
//     uName: 'Ahmed'
// };

// greetUser.call(user, 'saddar', 'karachi');

// greetUser('saddar', 'karachi');

// Apply
// function greetUser(place, city) {
//     console.log(`Hello ${this.userName}. Place: ${place}. City: ${city}`);
// };

// const user = {
//     userName: 'MuhammadAhmed'
// };

// greetUser.apply(user, ['saddar', 'karachi']);


// Bind
function greetUser(place, city) {
    console.log(`Hello ${this.userName}. Place: ${place}. City: ${city}`);
};

const user = {
    userName: 'Muhammad Ahmed Rana'
};

var newHandler = greetUser.bind(user, 'saddar', 'karachi');
newHandler();