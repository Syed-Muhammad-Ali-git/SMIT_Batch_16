// const users = ['John', 'Andy', 'Mark', 'Smith'];

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// };

// const nums = [1, 2, 3];

// for (let user of users) {
//     console.log(user);
// }

// for (let item of nums) {
//     item = item + 1;
//     console.log(item);
// }


// const str = 'javascript';

// for (let char of str) {
//     console.log(char);
// };


// const users = ['John', 'Andy', 'Mark', 'Smith'];

// for (let key in users) {
//     console.log(users[key]);
// }

const user = {
    uName: "Mark",
    title: "Graphics Designer",
    shift: "Morning",
    isSenior: false,
    company: "ABC Company"
};

for (let prop in user) {
    console.log(prop, user[prop]);
};