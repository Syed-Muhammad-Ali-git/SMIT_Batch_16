// include() method 1:

// const fruits = ['apple', 'mango', 'orange', 'grapes', 'banana'];
// console.log(fruits.includes('abc'));



// at() method 2:
// const fruits = ['apple', 'mango', 'orange', 'grapes', 'banana'];
// const checkIndex = fruits.at(10);
// console.log(checkIndex);


// const fruits = ['apple', 'mango', 'orange', 'mango', 'grapes', 'banana', 'mango', 'strawberry'];
// const mangoData = fruits.filter((item, index) => {
//     // console.log(item, index);
//     return item == 'mango';
// });

// console.log(mangoData);


















// const numbers = [1, 2, 3, 4, 5, 780, 0, -5, 20, 33];
// const filterNums = numbers.filter((eachNum, i) => {
//     return eachNum > 5;
// });

// console.log(filterNums);



const users = [
    {
        id: 1,
        name: 'Ahmed',
        title: "MERN Eng",
        isSenior: true,
        skills: ['Html', 'Css', 'JS', 'React JS']
    },

    {
        id: 3,
        name: 'Obaid',
        title: "Admin Exec",
        isSenior: false,
        skills: ['Html', 'Css']
    },

    {
        id: 3,
        name: 'Aizaz',
        title: "Ui Ux Des",
        isSenior: false,
        skills: ['Html', 'Css', 'React']
    },

    {
        id: 4,
        name: 'Bilal',
        title: "MERN Eng",
        isSenior: true,
        skills: ['Html', 'Css', 'React JS']
    },
];

const targerUserWithSkills = users.filter((item) => { return item.isSenior });
console.log(targerUserWithSkills);

// const mernFilter = users.filter((eachUser) => {
//     return eachUser.title == "MERN Eng";
// });
// console.log(mernFilter);



// const str = 'ahmed';
// console.log(str.startsWith('b'));



// const userWithId3 = users.find((item, index) => {
//     return item.id == 3;
// });
// console.log(userWithId3);


// const fruits = ['apple', 'mango', 'orange', 'mango', 'grapes', 'banana', 'mango', 'strawberry'];
// const findMango = fruits.find((eachFruit) => {
//     return eachFruit == 'mango';
// });
// console.log(findMango);






// const fruits = ['apple', 'mango', 'orange', 'mango', 'grapes', 'banana', 'mango', 'strawberry'];
// fruits.forEach((item) => {
//     console.log(item);
// });