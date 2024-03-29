// 1. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);

//   },
// };
// product.showPrice();
// // 2. Яким буде результат виклику функції?
// function f() {
//   console.log(this.name);
// }

// const foo = f.bind({ name: "Іван" }).bind({ name: "Петро" });

// foo();
// 3. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }
// callAction(product.showPrice.bind(product));

//===============================================================

// 4. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }

// // Створи об 'єкт user з властивостю name і двома методами
// // loginOk() і loginFail()
// // ці методи виводять в консоль повідомлення у форматі
// // "<name> logged in" та "<name> " відповідно
// // зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта
// const user = {
// name: 'Mango',
// loginOk() {
// console.log(`${this.name} logged in`)
// },
// loginFail() {
// console.log(`${this.name} failed to log in` )
// }
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// Отримати масив об'єктів користувачей по кольору очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'є'кт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// function getUsersWithEyeColor(array, color){
//     return array.filter(item => item.eyeColor === color);
// }
// console.log(getUsersWithEyeColor(users, 'blue'));

// Отримати масив імен усіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// function getUserNames(array, usersData){
//     return array.map(item => item[usersData]);

// }
// console.log(getUserNames(users, "age"))

// Отримати загальну суму баланса (поле balance) усіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916

// function calculateTotalBalance(array){
//     return array.reduce((total, item) => total + item.balance, 0);
// }

// console.log(calculateTotalBalance(users));

// Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
// function getSortedUniqueSkills(array) {
//   return array
//     .flatMap((item) => item.skills)
//     .filter((item, index, array) => array.indexOf(item) === index)
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getSortedUniqueSkills(users));

// ========================================================
//Повернути об'єкт у якому вказується кількість тегів
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const statistic = tweets.flatMap((item) => item.tags).reduce((acc, tag) => ({...acc, [tag]: acc[tag] ? acc[tag] + 1: 1}),{} )

// console.log(statistic);

//1. Напишіть дві функції
// letMeSeeYourName(callback) - питає ім'я користувача
//через prompt и викликає callback функцію
//greet(name) - коллбек, якій приймає ім'я та логірує в консоль
//рядок "Привіт, <name>"
//Реалізуй перевірку, що prompt не пустий
// якщо пустий - додай дефолтне значення

// function letMeSeeYourName(callback) {
//     let name = prompt("Enter your name");
//     if (!name) {
//         name = "guest";
//     }
//     callback(name);

// }

// function greet(name) {
//     console.log(`Привіт, ${name}`);
// }
// letMeSeeYourName(greet);

// 2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//     #login;
//     #email;
// constructor(login,email){
//     this.#login = login;
//     this.#email = email;
// }
// get getClientData(){
//     return {
//         userLogin: this.#login,
//         userEmail: this.#email,
//     }
// }
// set changeEmail(newEmail){
//     this.#email = newEmail;
// }
// }
// const user = new Client('Mango', 'ftyhg@gmail.com');
// console.log(user);
// console.log(user.getClientData);
// user.changeEmail = 'gyyyff@gmai.com'
// console.log(user.getClientData);


// 4. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary, який повертає повідомлення
//"Worker <name> has salary <salary> dollars"
//Створити клас TopLevelWorker, у якого є властивість position
//і який успадковує клас Worker, додаючи метод getPosition

class Worker {
    constructor(obj) {
        const { name, age, salary } = obj
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getSalary() {
        return `Worker ${this.name} has salary ${this.salary} dollars`;
    }
}


const user = new Worker("Slava", 32, 10400);
console.log(user);
console.log(user.getSalary());


class TopLevelWorker extends Worker {
    constructor(obj, position) {
        super(obj);
        this.position = position;
    }

    getPosition() {
        return `${this.name} work as ${this.position}`;
    }
}
const nadia = { name: "NADIA", age: 42, salary: 1400 }
const user2 = new TopLevelWorker(nadia, "прибиральник");
console.log(user2);
console.log(user2.getPosition());


//=================== Домашка!!!


//2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товара, а також callback.
//Функція створює об'єкт товара, додавая йому унікальний
//ідентифікатор у властивість id та викликає callback
//передавая йому створений об'єкт.
//showProduct(product) - коллбек приймає об'єкт
//продукта і логірує його в консоль


//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priopity,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)