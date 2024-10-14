// нашли картинку в DOM дереве
const dogImg = document.querySelector('#img-dog')
const getDog = document.querySelector('#get-dog')

// запрос за данными через fetch запрос - в ответе promise в состоянии pending (ожидание данных)

// объявляем функцию для получения картинки
const fetchDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    //дожидаемся 'сырых' данных и обрабатываем с помощью асинхронного метода json()
    .then(res => res.json())
    // дожидаемся выполнения json() и получаем наши данные
    .then(data => {
      // перезаписываем значение src в картинке
      dogImg.src = data.message
    });
}

// вызываем функцию
fetchDog()

// передаем функцию в слушатель события по клику
getDog.addEventListener('click', fetchDog)