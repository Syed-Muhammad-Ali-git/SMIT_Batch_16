// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved successfully');
//     }, 2000);
// });

// // console.log(myPromise);

// myPromise
//     .then((res) => {
//         console.log('Promise fulfilled: ', res);
//     })
//     .catch((err) => {
//         console.log('Promise rejected: ', err);
//     });




















const verifyNum = new Promise((resolve, reject) => {
    const input = +prompt('ENter any number');

    if (input % 2 == 0) resolve('Promise resolved');
    else reject('Promise rejected');
});

verifyNum
    .then((success) => {
        console.log('Promise success: ', success);
    })
    .catch((err) => {
        console.log('Promise Err: ', err);
    });