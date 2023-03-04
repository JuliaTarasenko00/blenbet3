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

const num = prompt("введіть число від 1 до 4");
let result = "";
switch (num) {
    case "1":
        result = "зима";
        break;
    case "2":
        result = "весна";
        break;
    case "3":
        result = "літо";
        break;
    case "4":
        result = "осінь";
        break;
    default:
        result = "введіть число від 1 до 4";
}
console.log(result);