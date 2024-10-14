// * 1 находим нужные элементы в DOM и кладем в переменные
const dogImg = document.querySelector('#img-dog')
const getDog = document.querySelector('#get-dog')
const btnToggle = document.querySelector('#btn-stop')

// переменная от изменения которой интервал будет запускаться / останавливаться
let isRunning = false

// * 2 объявляем функцию для получения картинки
const fetchDog = () => {
  // запрос за данными через fetch запрос - в ответе promise в состоянии pending (ожидание данных)
  fetch("https://dog.ceo/api/breeds/image/random")
    //дожидаемся 'сырых' данных и обрабатываем с помощью асинхронного метода json()
    .then(res => res.json())
    // дожидаемся выполнения json() и получаем наши данные
    .then(data => {
      // перезаписываем значение src в картинке
      dogImg.src = data.message
    });
}

// * 3 вызываем функцию для появления картинке при обновлении
fetchDog()

// * 4 кладем вызов интервала в переменную и запускаем для обновления картинки каждые 10 секунд

// объявляем переменную за пределами функции, чтобы иметь к ней доступ в if / else
let dogInterval

// * 7 функция старт / стоп для интервала подгружающего картинки из  fetch запроса
const toggleInterval = () => {
  if (!isRunning) {
    console.log('start!')
    dogInterval = setInterval(fetchDog, 2000)
    btnToggle.textContent = 'stop dog update 🐩'
    isRunning = true
  } else {
    console.log('stop!')
    clearInterval(dogInterval)
    btnToggle.textContent = 'start dog update 🐕'
    isRunning = false
  }
}



// * 5 передаем функцию получения картинки в слушатель события по клику, чтобы можно было обновить картинку
getDog.addEventListener('click', fetchDog)


// * 6 добавляем возможность запустить и остановить обновление картинок по клику
btnToggle.addEventListener('click', toggleInterval)