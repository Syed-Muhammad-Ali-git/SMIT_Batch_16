// const numsArr = [1, 3, 5, 8, 10];

// const divBy2 = numsArr.find((item) => {
//     console.log(item);
//     return item % 2 == 0;
// });
// console.log('Res: ', divBy2);




// const numsArr = [1, 3, 5, 8, 10, 12];

// const divBy2 = numsArr.some((item) => {
//     console.log(item);
//     return item % 2 == 0;
// });
// console.log('Res: ', divBy2);

// const users = [
//     {
//         id: 1,
//         name: 'Ahmed',
//         title: "MERN Eng",
//         isSenior: true,
//         skills: ['Html', 'Css', 'JS', 'React JS']
//     },

//     {
//         id: 2,
//         name: 'Obaid',
//         title: "Admin Exec",
//         isSenior: false,
//         skills: ['Html', 'Css']
//     },

//     {
//         id: 3,
//         name: 'Aizaz',
//         title: "Ui Ux Des",
//         isSenior: false,
//         skills: ['Html', 'Css', 'React']
//     },

//     {
//         id: 4,
//         name: 'Bilal',
//         title: "MERN Eng",
//         isSenior: true,
//         skills: ['Html', 'Css', 'React JS']
//     },
// ];


// const targetEl = users.findIndex((element) => {
//     return element.id == 3;
// });
// // console.log(targetEl);

// users.splice(targetEl, 1);

// console.log(users);


// const str = 'Welcome to EcmaScript';
// const strToArr = str.split(' ');
// console.log(strToArr);



// const arr = ['Hello', 'World', 'JS'];
// const arrToStr = arr.join(' ');
// console.log(arrToStr);




// const arr = [1, 2, 3, 4, 5];
// const modifyArr = arr.map((item) => {
//     // console.log(item);
//     return item * 2;
// });
// console.log(modifyArr);



// const users = ['ahmed', 'mark', 'smith', 'trish'];
// const modifyArr = users.map((item) => {
//     console.log(item);
//     return item?.toUpperCase();
//     // return `Hello ${item}`;
// });
// console.log(modifyArr);



// const users = ['ahmed', 'mark', 'smith', 'trish'];
// const modifyArr = users.map((item, index) => {
//     return {
//         uid: index + new Date().getTime(),
//         userName: item
//     };
// });
// console.log(modifyArr);


const ul = document.getElementById('ul');
const users = ['ahmed', 'mark', 'smith', 'trish'];
ul.innerHTML = users.map((el) => {
    return (`<li> ${el} </li>`);
}).join('');