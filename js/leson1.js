//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const message = prompt("Яка офіційна назва JavaScript?");
// if (message === "ECMAScript") {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!");
// }
// console.log(message);



//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const time = prompt("Введіть число");
// const hours = Math.floor(Number(time) / 60);
// const minutes = time % 60;
// const updateHours = String(hours).padStart(2, "0");
// const updateMinutes = String(minutes).padStart(2, "0");

// console.log(`${updateHours}:${updateMinutes}`);

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = prompt("введіть число від 1 до 4");
// let result = "";
// switch (num) {
//     case "1":
//         result = "зима";
//         break;
//     case "2":
//         result = "весна";
//         break;
//     case "3":
//         result = "літо";
//         break;
//     case "4":
//         result = "осінь";
//         break;
//     default:
//         result = "введіть число від 1 до 4";
// }
// console.log(result);



//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел


// const min = 0;
// const max = 10;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//         total += i;
//          };
        
// }
//  console.log(total)



//При завантаженні сторінки користувачу пропонується
//в prompt ввести число. Ввод додається к значенню
//змінної total.
//Операція вводу числа продовжується до тих пір,
//доки користувач не натисне кнопку Cancel в prompt.
//Після того як користувач закінчив ввод натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сумма введенних чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.
//  let number = prompt("Введіть число");
//  let total = 0;
// //  number === true; те саме що просто number;
// //  number === false; та саме що !number;
//  while (number) {
//     total += Number(number);
//     number = prompt("Введіть число");
//  }
//  alert(`Загальна сумма введенних чисел дорівнює ${total}.`)



//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"


// const login = prompt("Введіть логін");
// console.log(login);
// if(login ===  "Адмін") {
//    const password = prompt("Введіть пароль");
//    if(password === "Я головний"){
//       alert("вітаю!");
//    } else {
//       alert("Невірний пароль!");
//    }
// } else if (login === "" || login === null) {
//    alert("Скасовано");
// } else {
//    alert("Я вас не знаю");
// }



// 2 спосіб
const login = prompt("Введіть логін");
console.log(login);
let message = '';
switch (login) {
    case 'Адмін':
             const password = prompt("Введіть пароль");
        
            alert(  password === "Я головний"?"вітаю!" : "Невірний пароль!") 
       
        break;
    case '' : 
        case null:
        message = "Скасовано";
        break;
    default:
        message = "Я вас не знаю";
}
alert(message);






// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// console.log(minuteValue);
// if (minuteValue >= 0 && minuteValue <= 15) {
//     console.log("Перша чверть години");
// }
// if (minuteValue > 15 && minuteValue <= 30) {
//     console.log("Друга чверть години");
// }
// if (minuteValue > 30 && minuteValue <= 45) {
//     console.log("Третя чверть години");
// }
// if (minuteValue > 45 && minuteValue <= 60) {
//     console.log("Четверта чверть години");
// }

// HOMEWORK!!!
//1.Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо користувач ввів інше число - попросити
//ввести ще раз и так далі.
//Цикл повинен питати число, доки користувач не
//введе число більше 100, чи не натисне кнопку
//Cancel в prompt

// 2. Є рядок, який складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є літера 'a'.
// Якщо це так - виведіть 'Так', в іншому випадку - 'Ні'.





