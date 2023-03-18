// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.
// const styles = ['Джаз', 'Блюз'];
// console.log(styles.push('Рок-н-ролл'));
// // styles[1] = 'Класика';
// const index = styles.indexOf('Блюз');
// // styles[index] = 'Класика';
// styles.splice(index, 1, 'Класика');
// console.log(styles.shift());
// styles.unshift('Реп','Реггі');
// console.log(styles);

// ========================================

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin (array) {
//     const login = prompt("Введіть логін");
//     if (array.includes(login)) {
//         alert("Доступ дозволено");
//     } else {alert("Користувач не знайден")};
// }
// checkLogin(logins);

// ------------------------------------------------

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1
// const logins = ["Peter", "John", "Igor", "Sasha"];
// function logItems(array) {
//     for (let i = 0; i < array.length; i += 1){
//         console.log(`${i+1} - ${array[i]}`);

//     }

// }
// logItems(logins);

// ------------------------------------------------

// Наступна функція повертає true, якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і повертає його результат:

// const age = prompt("Enter your age");

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     const check = confirm("Вам є 18?");
//     return check;
//   }
// }
// console.log(checkAge(age));

// ------------------------------------------------

//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];

// function add(name) {
//   names.push(name);
// }
// add("Olha");
// add("Serhii");

// function remove(name) {
//   const index = names.indexOf(name);
//   if (index === -1) {
//     return alert("Такого користувача не існує");
//   }
//   names.splice(index, 1);
// }

// remove("Max");
// remove("Iryna");

// function update(oldName, newName) {
//   const index = names.indexOf(oldName);
//   if (index === -1) {
//     return alert("Такого користувача не існує");
//   }
//   names.splice(index, 1, newName);
// }

// update("Boris", "Yuriy");
// update("Iryna", "Yuriy");
// console.log(names);
