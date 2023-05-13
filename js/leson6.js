// let i = 0;
// setTimeout(() => alert(i), 100);

// for (let j = 0; j < 1000000000; j++) {
//   i++;
// }

// =================================================

// const first = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "один");
// });

// const second = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "два");
// });

// Promise.race([first, second]).then((res) => console.log(res));

// =================================================

// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise((res) => {
//   console.log(3);
//   res();
// }).then(() => console.log(4));

// console.log(5);

// ================================================

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return "hello world";
// }

// const greetPromise = new Promise((res) => {
//     setTimeout(() => {
//     res("hello world");
//     },2000)
// })

// greetPromise.then((resp) => console.log(resp))