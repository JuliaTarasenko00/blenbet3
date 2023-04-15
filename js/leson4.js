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
