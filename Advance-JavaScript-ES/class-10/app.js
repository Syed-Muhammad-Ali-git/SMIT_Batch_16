// console.log('1 Bring milk');

// setTimeout(() => {
//     console.log('2 Bring chicken');
// }, 3000);

// console.log('3 Bring snacks');

// var str = '4 Bring cold drink';
// console.log(str);

// const showMsgEl = document.getElementById("show-err");

// const submitBtn = () => {
//     showMsgEl.innerHTML = 'Error in email input';
//     showMsgEl.style.color = 'red';
//     showMsgEl.style.display = 'block';

//     setTimeout(() => {
//         showMsgEl.innerHTML = '';
//         showMsgEl.style.display = 'none';
//     }, 3000);
// };

// let n = 0;

// let handleTimer = setInterval(() => {
//     n = n + 1;
//     console.log(n);
// }, 3000);

// const stopInterval = () => {
//     clearInterval(handleTimer);
// };


// const clock = document.getElementById("show-date");

// setInterval(() => {
//     const time = new Date().toLocaleTimeString();
//     clock.innerHTML = time;
// }, 1000);



const map = new Map();
map.set('user', 'Ahmed');
map.set('1996', 'Birth Year');
map.set("() => { }", 'I am function');
map.set(new Date().getTime(), 'Hello Time');
map.set('null', 'No data available')
// console.log(map.get('null'));

// map.delete('() => { }');

map.set('user', 'Muhammad Ahmed');

// console.log(map.has('null'));
// map.clear();

// console.log(map.keys());
// console.log(map.values());

console.log(map.entries());