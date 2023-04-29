// // Створити список
// // Створити кнопки Add, Remove, які будуть змінювати склад списку
// // Створити input, з якого отримаємо значення, що буде передано в li
// // Парним лі вказати жовтий фон, непарним синій
// // Використовуй createElement
// const list = document.createElement('ol');
// const btnAdd = document.createElement('button');
// const btnRemove = document.createElement('button');
// btnAdd.textContent = 'Add';
// btnRemove.textContent = 'Remove';
// const inputEl = document.createElement('input');
// document.body.append(inputEl, btnAdd, btnRemove, list);
// btnAdd.addEventListener('click', clickBtnAdd);
// function clickBtnAdd () {
//     // console.log(inputEl.value);
//     if(inputEl.value.trim() === ''){
//   return
//     }
//     const liEl = document.createElement('li');
//     liEl.textContent = inputEl.value;
//     list.append(liEl);
//     inputEl.value = '';
//     // if(list.children.length % 2 === 0){
//     //     liEl.style.background = 'yellow'
//     // } else {
//     //    liEl.style.background = 'blue'
//     // }
//     liEl.style.background = list.children.length % 2 === 0 ? 'yellow' : 'blue';
// }

// btnRemove.addEventListener('click', clickBtnRemove);
// function clickBtnRemove(){
//     if(list.lastChild){
//         list.lastChild.remove();
//     }
// }

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomizer(max) {
//   return Math.floor(Math.random() * max);
// }

// const divEl = document.createElement('div');
// onClickDiv();

// document.body.appendChild(divEl);

// divEl.addEventListener('click', onClickDiv)
// function onClickDiv() {
//   divEl.style.cssText = forms[randomizer(forms.length)];
//   divEl.style.background = getRandomHexColor();
//   divEl.style.position = 'absolute';
//   divEl.style.top = `${randomizer(100)}%`;
//   divEl.style.left = `${randomizer(100)}%`;
// }

// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// const box = document.createElement("div");
// let size = 50;

// box.style.width = `${size}px`;
// box.style.height = `${size}px`;
// box.style.background = "red";

// const incBtn = document.createElement("button");
// const decBtn = document.createElement("button");

// incBtn.textContent = "Збільшити";
// decBtn.textContent = "Зменшити";

// document.body.append(box, incBtn, decBtn);

// incBtn.addEventListener("click", onIncBtn);
// decBtn.addEventListener("click", onDecBtn);

// function onIncBtn() {
//   if (size === 500) {
//     return;
//   }
//   size += 10;
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
// }

// function onDecBtn() {
//   if (size === 10) {
//     return;
//   }
//   size -= 10;
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
// }

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const inputEl = document.querySelector("#passwordInput");
// const btnEl = document.querySelector("#passwordButton");
// btnEl.addEventListener("click", handleClick);
// function handleClick() {
//     if (btnEl.textContent === "Розкрити") {
//         btnEl.textContent = "Приховати";
//         inputEl.style.color = "inherit";
//     } else {
//        btnEl.textContent = "Розкрити";
//        inputEl.style.color = "transparent"
//     }
// }


/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const btnDouble = document.querySelector('#double');
// const listItems = document.querySelectorAll('.listItem');

// btnDouble.addEventListener('click', doubleClick);
// function doubleClick(){
//     listItems.forEach((item) => item.textContent *= 2);
// }

/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

// const circles = document.querySelectorAll(".gridItem");

// circles.forEach(circle => {
//     circle.addEventListener("mouseenter", () => {
//     circle.classList.add("hide")
//     })

//     circle.addEventListener("mouseleave", () => {
//     circle.classList.remove("hide")
//     })
// })

// Завдання 14
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey
// const eventThumbEl = document.querySelector('.eventThumb');
// document.addEventListener('keydown', (event) => {
//   const markup =  `<ul class='eventList'> <li class='eventKey'>key: ${event.key} </li> <li class='eventCode'>code: ${event.code} </li></ul>`;
//   eventThumbEl.insertAdjacentHTML('afterbegin', markup)
// console.log(event.code);
// })



//--------------------HW----------------------------------
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
// Завдання 7
// При затисканні миші на колі коло повинно слідувати за курсором.
// При відпусканні мишки воно стає в початкове положення.
// Завдання 11
// Наведено список людей. Зроби фільтр на ім'я/прізвище.



//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".
// const tableEl = document.querySelector('#productTable');
// const divEl = document.querySelector('#productDetails');

// tableEl.addEventListener('click', onClicTable);

// function onClicTable(ev) {

// if(ev.target.nodeName !== 'TD'){
//     return
// };
// const parent = ev.target.parentNode;
// const product = parent.firstElementChild.textContent;
// const price = parent.lastElementChild.textContent;

// divEl.innerHTML = '';

// const markup = `Ви вибрали ${product} за ${price}`
// divEl.insertAdjacentHTML('afterbegin', markup);
// }


/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/