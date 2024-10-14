//здесь мы для примера создаем сами объект promise в переводе обещание.Но в реальной работе это не делается Функция JS которая делает запрос в сеть возвращает нам сразу же результат это объект promise встроенный в JS - у него есть методы для работы с тем результатом который нам вернется из сети и мы можем получать статус этого запроса и делать проверки типа if else . Всего может быть 3 статуса статус ожидания panding, то есть синхронный запрос еще выполняется и потом он переходит в одно из двух состояний 1. выполнился успешно - fulfilled или заполнен 2. выполнился с ошибкой или не выполнился rejected
// const promiseExample = new Promise((res, rej) => {
// let randomNumber;
// setTimeout(() => {
//     randomNumber = Math.random();
//     if(randomNumber > 0.5) {
//         res(randomNumber);
//     } else {
//         rej(randomNumber);
//     }
// время выполнения 15 сек
// }, 15000);
//   randomNumber = Math.random();
//   if (randomNumber > 0) {
//     res(randomNumber);
//   } else {
//     rej(randomNumber);
//   }
// });

// setTimeout(() => {
//     console.log('Отработал setTimeOut после нашего промиса');
//   }, 0);

// promiseExample.then((response) => {
//     console.log(response);
//   })

// console.log(promiseExample);

//здесь мы делаем иммитацию запроса на серрер . на самом деле это запрос на фейковый сервер для тренировки

// метод fetch используется для обращения в сеть или на сервер. Мы передаем ему адрес куда за какими данными мы обращаемся по этому адресу нам должен вернуться массив объектов. Этот метод принимает аргумент это адрес и возвращает он нам промис и мы сохраняем этот промис в переменную .Ccылка на объект промиса сохраняется в переменной resultOfFetch
const resultOfFetch = fetch('https://jsonplaceholder.typicode.com/posts/');
// ответ от сервера мы можем увидеть в браузере в консоли но для этого нужно запустить consoie.log результат в вкладке Promoce Fulfillded Responce
// console.log(resultOfFetch);
// console.log('Мы сделали fetch запрос');
//Здесь обращаемся к объекту промиса который вернул нам метод fetch и воспользуемся его методом then который отрабатывает только в том случае если промис отработал успешно - мы ему передаем  функцию в которую он передаст как аргумент результат ответа сервера называем произвольным именем response и далее мы пишем что делать с этим результатом ответа сервера мы выводим его в консоль и мы видим в консоли ответ от сервера с данными
//console.log(resultOfFetch);
//console.log('Мы сделали fetch запрос');

//этот метод then он не только запускает функцию но еще он нам возвращает новый промис и результат работы этого промиса будет не ответ от сервера а тело ответа body и мы у этого промиса можем опять вызвать метод then
resultOfFetch
  .then((response) => {
    console.log(response);
    // у ответа от сервера мы вызываем метод  json() а это метод возвращает нам данные с сервера которые находятся в теле ответа в body
    return response.json();
  })
  // в ответе от сервера есть служебная информация и в body находится тело ответа от сервера где находится интересующая нас информация

  .then((bodyOfResponse) => {
    renderFirst10(bodyOfResponse);
  });

// более краткий способ вывода данных  из body  массива переданного с сервера в консоль
//const resultOfFetch = fetch('https://jsonplaceholder.typicode.com/posts/');
//resultOfFetch
//.then((response) => response.json())
//.then((bodyOfResponse) =>{console.log(bodyOfResponse)})

// метод catch будет вызван если промис завершится с ошибкой но в случае если нам прийдет все таки от сервера ответ то нам надо его обрабатывать в then
//resultOfFetch.catch((error) => {
//  console.log('Здесь ошибка', error);
//});

resultOfFetch.finally(() => {
  console.log(
    "Finally, выполняется в любом случае всегда конце вне зависимости от того как оработал промис "
  );
});

console.log("Программа работает дальше");

// Оборачиваем данные в пропис!!!!
// const r = Math.random();

// const rInPromise = new Promise((res, rej) => {
//   res(Math.random());
// });

// console.log(r);

// rInPromise.then((r) => {console.log(r)});

//ниже выводим из массива который скачался с сервера и виден нам в консоли в body первые 10 значений чтобы их было видно в браузере
// задаем функцию renderFirst10   в скобках задаем переменную массива
function renderFirst10(arrayOfPosts) {
  // нам нужно вывести их на страничку в список и здесь открываем список

  const ulElement = document.createElement("ul");
  // чтобы из массива вырезать первые 10 элементов используем метод slice и вверху вызываем функцию в 52 строке
  arrayOfPosts
    .slice(0, 10)
    //используем  map для изменения каждого элемента массива

    .map((item) => item.title)
    .forEach((title) => {
      const newLiElement = document.createElement("li");
      // делаем массив title строк и преобразовываем его в список
      newLiElement.textContent = title;
      ulElement.append(newLiElement);
    });
  document.body.append(ulElement);
}
