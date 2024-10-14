const taskList = document.querySelector('#task-list')

// создаем асинхронную функцию с помощью синтаксиса async / await
// он позволяет нам внутри особых функции сохранять порядок операций при работе с асинхронным и синхронным кодом

// перед объявлением функции пишем ключевое слово async
async function getData() {
  // пробуем выполнить запрос
  //внутри функции делаем проверку ошибки при помощи try catch где try срабатывает в случае если ошибки нет  второй блок кода в конце выдаст ошибку если прийдет ошибка с сервера
  try {
    // объявляем переменную и через ключевое слово await дожидаемся результата fetch запроса
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    // если результат не ок то мы кидаем ошибку и тогда мы переходим в  catch  в блок с ошибкой
    if (!res.ok) {
      console.log(res)
      //здесь выводим ошибку в консоль браузера в элементах разработчика
      throw new Error(`Network error: ${res.status}`)
    }
    // объявляем переменную и через await дожидаемся результата метода json()
    const data = await res.json();
    const shortData = data.slice(0, 15)
   //task на первой иттерации прохождения map это первый объект массива 
    shortData.map(task => {
     // создаем элементы списка 15 шт но они пока пустые  
      const li = document.createElement('li')
       //наполняем элементы контентом и сначала добавляем title и теперь каждый элемент списка заполнился данными 
      li.textContent  =task.title
      //но в массиве в конце каждого элемента указано сompleted true или  false мы можем это добавить например вначале каждой строки листа сompleted true  или  false через шаблонную строкуd
      //li.textContent = `Completed: ${task.completed}, ${task.title}`
      //в примере  ниже мы вычеркиваем строку если задача выполнена то есть complited true используем для этого класс completed  со свойством text-decoration: line-through; прописанный в style.css
      //здесь пишем условие если task.completed === true ,внизу в скобках сокращенная запись
      if (task.completed) {
      //ниже добавляем класс с помощью метода classList.add  
        li.classList.add('completed')
      }
      
      taskList.append(li)
    })
    // обрабатываем ошибку
  } catch (error) {
    // выводим в консоль текст ошибки . обращаемся к ключу ошибки message
    console.log('ошибка:', error.message)
  }
}

getData()
