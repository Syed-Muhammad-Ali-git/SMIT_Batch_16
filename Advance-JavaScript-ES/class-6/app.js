// const greetUser = () => {
//     return () => {
//         return "Hello user!!!"
//     }
// };

// const output = greetUser()()
// console.log(output);





const greetUser = (cb) => {
    const showCbValue = cb();
    const user = 'Ahmed';

    return () => {
        return `${showCbValue} ${user}`;
    }
};

const showUser = () => {
    return 'Welcome';
}

const output = greetUser(showUser);
console.log(output());