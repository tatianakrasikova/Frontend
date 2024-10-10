//ищем id из html в Document bmi-form button
const submitButtonElement = document.querySelector('#bmi-form button');
// навешиваем на кнопку слушатель событий и ему передаем 1-чего мы ожидаем и 2- функцию что делать или переменную куда мы положили функцию когда пользователь кликает по кнопке браузер запускает функцию submitButtonHandler
submitButtonElement.addEventListener('click', submitButtonHandler);
// ищем id из html в Document данные для ввода веса и высоты 
const inputWeightElement = document.querySelector('#weight');
const inputHeightElement = document.querySelector('#height');
//console.log(inputHeightElement.value,inputWeightElement.value); для того чтобы вывести именно значения в консоль надо добавить value
inputWeightElement.addEventListener('change', removeAlert);
inputHeightElement.addEventListener('change', removeAlert);
//здесь прописываем функцию которая начнет действовать после клика пользователя по кнопке. в этот момент в браузере создается объукт клика etv который мы записываем в параметры этой функции  метод preventDefault отменяет поведение по умолчанию кнопки submit чтобы она не пыталась отправить данные потому что мы сами будем их обрабатывать
function submitButtonHandler(evt) {
  evt.preventDefault();
//делаем проверку в случае если пользователь введет 0 или ничего чтобы не выводилось NON а выводилась надпись "введите корректные данные" функция showAlert прописана ниже и если эта функция не отработает то тогда вычисляется соотношение веса и роста и выводится результат

  if (inputWeightElement.value < 1 || inputHeightElement.value < 1) {
    showAlert();
  } else {
    const bmiIndex = (
    //здесь вычисляем по формуле соотношение веса к росту  и возводим в квадрат 
      inputWeightElement.value /
      (inputHeightElement.value / 100) ** 2
    ).toFixed(1);
  //метод округляет числовой результат  .toFixed до указанного количества  знаков после запятой  
 // вызываем функцию  removeAlert которую мы прописали ниже она убирает надпись введите корректные данные в том случае если были введены корректные данные
    removeAlert();
//ищем id из html в Document 
    const bmiResultElement = document.querySelector('#bmi-result');
     //здесь вводим во внутренний текст текст с переменной расчитывающей результат
    bmiResultElement.innerText = `Ваш BMI: ${bmiIndex}`;
//ищем id из html в Document 
    const bmiCommetResult = document.querySelector('#bmi-status');
     //здесь вводим во внутренний текст текст с переменной расчитывающей результат
    bmiCommetResult.innerText = `Статус: ${getBmiComment(bmiIndex)}`;
  }
}
 // здесь пишем комментарии какая надпись будет выходить при выходе результата
function getBmiComment(bmi) {
 // плюс перед переменной без пробела переводит строковые данные в этой переменной в числовые а плюс с пробелом наоборот  
  bmi = +bmi;
  if (bmi <= 16) {
    return 'Выраженный дефицит массы тела';
  } else if (bmi <= 18.5) {
    return 'Недостаточная (дефицит) масса тела';
  } else if (bmi <= 25) {
    return 'Норма';
  } else if (bmi <= 30) {
    return 'Избыточная масса тела (предожирение)';
   } else if (bmi <= 35) {
    return 'Ожирение 1 степени';
  } else if (bmi <= 40) {
    return 'Ожирение 2 степени';
  } else {
    return 'Ожирение 3 степени';
  }
}
 //в случае если пользователь введет 0 или ничего чтобы не выводилось NON а выводилась надпись "введите корректные данные" функция showAlert прописана ниже и если эта функция не отработает то тогда вычисляется соотношение веса и роста и выводится результат чтобы запись не прыгала для нее надо в css в классе .alert задать ширину
function showAlert() {
    const alert = document.querySelector('.alert');
    alert.innerText = 'Соберитесь, введите корректные значения';
 // с помощью метода after мы помещаем в нужное место    
    document.querySelector('#bmi-form').after(alert);
}
//  removeAlert которую мы прописали ниже она убирает надпись введите корректные данные в том случае если были введены корректные данные

function removeAlert() {
    const alertElement = document.querySelector('.alert');
    if (alertElement) {
        alertElement.innerText = '';
    }
}