console.log('Program started');
//команда promt просит что то ввести пользователя
const nameOfUser = prompt('Введите свое имя:');
//чтобы код не блокировался можно запрашивать у пользователя имя через imput в html 
//находим эту переменную которую ввели в  html и делаем кнопку в html 
const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
 
// Асинхронный код  это когда браузер ждет клика по кнопке. Если произойдет клик тогда  когда идет синхронизация цикла то код выполнится после всего кода в конце
// навешиваем на кнопку слушатель событий 
buttonElement.addEventListener('click', () => {
    console.log(`Hello, ${inputElement.value}`);
});

console.log('Цикл начался');
const startDate = Date.now();
for(let i = 0; i < 8000000000; i++ ) {
    const a = i;
}
const endDate = Date.now();
console.log('Цикл закончился через ' + (endDate - startDate));


console.log('Все прошло хорошо');
