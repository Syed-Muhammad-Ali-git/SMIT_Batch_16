// const user = {
//     newAnimal: {
//         newAnimala: {
//             newAnimalb: {
//                 aName: "Zebra"
//             }
//         }
//     }
// };

// // console.log(user.animal.aName);
// // console.log(user.animal?.aName);
// console.log(user?.newAnimal?.newAnimala?.newAnimalb?.aName);

// []?.push()

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // const combine = arr1.concat(arr2);
// const mergeArr = [...arr1, ...arr2];

// console.log(mergeArr);


// const maxVal = [1, 2, 3];
// console.log(Math.max(...maxVal));



const obj = {
    a: 1,
    b: 2
};

const aobj = {
    a: 1,
    b: 2
};

const obj2 = {
    ...obj,
    ...aobj,
    c: 3,
    d: 4
};

console.log(obj2);