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

// ------------------------------------------------

//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };
//   user.mood= 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;
//  const userKeys =  Object.keys(user);
//  for (const key of userKeys) {
//     console.log(`${key} : ${user[key]}`)
//     // console.log(user[key]);
//  }

// -------------------------------------------------

//3. Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає массив об'єктів і
//рядок з назвами каміння.
//Функція рахує і повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];
// function calcTotalPrice(stones, stonesName) {
//     for (const stone of stones) {
//         if (stone.name === stonesName) {
//             return stone.price * stone.quantity;
//         }

//     }
// }

// console.log(calcTotalPrice(stones, "Сапфір"));

// -----------------------------------------------------

//7. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  //поточний баланс рахунка
  balance: 0,

  //Історія транзакцій
  transactions: [],

  //Метод створює і повертає об'єкт транзакцій
  //Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод відповідає за додавання сумми к балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
    // this.transactions.push({ ...transaction, id: Math.random().toFixed(4) });
    this.transactions.push({ ...transaction, id: 1 });
  },

  //Метод відповідає за зняття сумми з балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає йогого в історю транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {},

  //Метод повертає поточний баланс
  getBalance() {},

  //Метод шукає і повертає об'єкт транзакціи по id
  getTransactionDetails(id) {
    for (const trans of this.transactions) {
      if (id === trans.id) {
        return trans;
      }
      alert("Транзакція не знайдена");
    }
  },

  //Метод повертає кількіств коштів вказаного типу
  //транзакціи зі всієї історії транзакцій
  getTransactionType(type) {},
};

account.deposit(3000);
console.log(account.getTransactionDetails(4));
console.log(account);
