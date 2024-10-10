// с помощью метода querySelector ищем header в общем документе Document,этим мы 
//говорим js что его должны изменить причем метод querySelector найдет первый
//попавщийся с таким именем элемент и он возвращает ссылку и мы сохраняем эту ссылку в переменной теперь мы можем работать с этим html элементом изменять,добавлять атрибуты,удалять элемент Здесь мы ищем класс header прописанный нами в html

const headerElement = document.querySelector('.header');
//здесь изменяем название  внутреннего текста
headerElement.innerText = 'Калькулятор';
//здесь изменяем класс элемента свойство classList из встроенных функций объекта header
//это пример добавления класса прописанного d scc
headerElement.classList.add('red');

// создание элемента Кнопка   в Js создаются элементы с помощью метода 
    //createElement

const submitButtonElement = document.createElement('button');
//добавляем внутренний текст кнопке
submitButtonElement.innerText = 'Результат';
//добавляем класс прописанный в css
submitButtonElement.classList.add('submit-button');
// добавляем созданный элемент в определенное место
// метод after может вставить всередину сразу после родительского элемента
headerElement.after(submitButtonElement);


// создадим функцию с реакцией на клик по кнопке такие функции принято называть handler
const submitButtonHanler = () => {
    // сначала найдем и удалим сущуствующий span (если есть)
    const createdSpanElement = document.querySelector('.result');
    if (createdSpanElement) {createdSpanElement.remove()};
    // ищем наши элементы метод querySelectorAll выводит все элементы ввиде массива
    const inputElements = document.querySelectorAll('input');
    //querySelectorAll  выводит в консоль NodeList  чтобы его перевести в массив с помощью спред оператора  
    console.log([...inputElements]);
    // запишем из инпутов в переменные свойство value отвечает за значение которое находится в input
    const element1 = inputElements[0].value;  
    const element2 = inputElements[1].value;
    // parse / Number() / +
    const summ = +element1 + +element2;
    // Создадим элемент для вывода на страничку в Js создаются элементы с помощью метода 
    //createElement
    const resultElement = document.createElement('span');
    resultElement.classList.add('result');
    // Заполним данными (результатом)
    resultElement.innerText = summ;
    // Отобразим на страничке чтобы элемент появился надо указать Js куда эту кнопку вставить в html метод append вставляет в конце всех дочерних элементов в body 
    //а метод after может вставить всередину сразу после родительского элемента
    const bodyElement = document.querySelector('body');
    bodyElement.append(resultElement);
    // body можно не искать отдельно
    // document.body.append........
}


// добавляем на кнопку действие  метод addEventListe  слушатель событий ожидает какого то действия и потом его выполняет  это ожидание JS передает браузеру и браузер ожидает события или действия от пользователя и потом его выполняет в аргументы передаем 2 аргумента  1 - чего мы ожидаем и 2- что делать то есть пишем функцию или переменную если функция прописана выше и вложена в переменную
submitButtonElement.addEventListener('click', submitButtonHanler);

