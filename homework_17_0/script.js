// Задание. У нас есть разметка для To-Do листа (списка дел). Нужно запрограммировать ему функциональность. Минимальный набор: 1. При нажатии на кнопку “Создать” добавляется новое задание. 2. При нажитии на дело - оно меняет свой статус с выполенного и наоборот с соотсветсвующим изменением стилизации (примеры дел есть в разметке). 3. Кнопки “Все“, “Выполенные” и “Невыполенные” фильтруют задачи чтобы отображались соответвенно все, выполенные или не выполенные.

const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.querySelector(".task-input");
const filterAllBtn = document.getElementById("all");
const filterPendingBtn = document.getElementById("uncompleted");
const filterCompletedBtn = document.getElementById("completed");

let allTasks = [];
//Этот код определяет функцию createTask, которая добавляет новую задачу в список задач. Давайте разберём его подробнее:

//1. const createTask = (taskText) => { ... };
//Это стрелочная функция, которая принимает один аргумент taskText. Этот аргумент содержит текст новой задачи, который вы хотите добавить в список.

//2. const task = { text: taskText, completed: false };
//Внутри функции создаётся объект task. Этот объект представляет задачу, содержащую два свойства:

//text: taskText — текст задачи, который был передан в качестве аргумента. Например, если передано 'Сделать домашку', то свойство text будет равно 'Сделать домашку'.
//completed: false — статус задачи, который изначально устанавливается как false, что означает, что задача невыполнена.
//3. allTasks.push(task);
//Здесь задача task добавляется в массив allTasks — это список всех задач. Метод push добавляет элемент в конец массива.

//4. renderTasks();
//После добавления новой задачи функция вызывает renderTasks();. Эта функция отвечает за отображение всех задач на странице. В данном случае она обновляет список задач в соответствии с их текущим состоянием (выполнены/не выполнены).

//Что делает этот код:
//Когда вы вызываете createTask('Купить молоко'), функция создаёт объект задачи с текстом 'Купить молоко' и статусом completed: false, затем добавляет эту задачу в массив всех задач и вызывает функцию, которая отображает обновлённый список задач на экране.

//Пример:
//javascript
//Code kopieren
//createTask('Купить молоко');
// Массив allTasks теперь содержит один объект: [{ text: 'Купить молоко', completed: false }]
// На экране появляется новая задача "Купить молоко"


// Добавление задач из fetch (с API)
const resultOfFetch = fetch('https://jsonplaceholder.typicode.com/todos');
resultOfFetch
    .then((response) => response.json())
    .then((bodyOfResponse) => {
        const first15Tasks = bodyOfResponse.slice(0, 15).map(task => ({
            text: task.title,
            completed: task.completed
        }));
        allTasks = [...allTasks, ...first15Tasks];
        renderTasks();
    })
    .catch(error => console.error('Ошибка:', error));

resultOfFetch.finally(() => console.log("Finally отработал запрос"));

console.log("программа работает дальше");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        createTask(taskText);
        taskInput.value = "";
        taskInput.focus();
    }
});

filterAllBtn.addEventListener("click", () => renderTasks("all"));
filterPendingBtn.addEventListener("click", () => renderTasks("pending"));
filterCompletedBtn.addEventListener("click", () => renderTasks("completed"));



function createTask  (taskText)  {
  const task = {
    text: taskText,
    completed: false,
  };
  allTasks.push(task);
  renderTasks();
};
// Функция для отображения задач с фильтром (все, выполненные, невыполненные)

function renderTasks (filter = "all")  {
taskList.innerText = "";// Очищаем список

  //Этот код отвечает за отображение задач на экране в зависимости от выбранного фильтра (все задачи, выполненные или невыполненные). Давайте разберем его по шагам:

 // 1. const renderTasks = (filter = "all") => { ... }
 // Это стрелочная функция renderTasks, которая принимает один аргумент filter — фильтр для задач. По умолчанию значение фильтра — это строка "all", что означает, что отображаются все задачи, если аргумент не передан.
  
 // 2. taskList.innerText = "";
 // Здесь происходит очистка списка задач на экране. Это нужно, чтобы перед каждым обновлением экрана удалить старый список и отрисовать его заново с учетом изменений.
  
 // taskList — это элемент HTML, который отображает список задач (вероятно, это <ul> в разметке).
 // innerText = "" — задает пустой текст, что полностью очищает содержимое списка.
// 3. let tasksToRender = [];
 // Объявляется пустой массив tasksToRender, который позже будет заполнен задачами, которые необходимо отобразить в зависимости от выбранного фильтра.
  
//  4. Фильтрация задач:
 // В зависимости от значения переменной filter выбираются определённые задачи для отображения.
  
 // if (filter === "all"): Если filter равен "all", то в массив tasksToRender записываются все задачи из массива allTasks, то есть будут показаны все задачи (выполненные и невыполненные).
  
 // javascript
 // Code kopieren
 // tasksToRender = allTasks;  // Показать все задачи
 // else if (filter === "pending"): Если filter равен "pending", то массив tasksToRender заполняется только невыполненными задачами. Для этого используется метод .filter(), который оставляет в массиве только те задачи, у которых свойство completed равно false.
  
 // javascript
 // Code kopieren
 // tasksToRender = allTasks.filter((task) => !task.completed);  // Показать только невыполненные задачи
 // else if (filter === "completed"): Если filter равен "completed", то в массив tasksToRender попадают только выполненные задачи. Используется метод .filter(), который оставляет в массиве только те задачи, у которых свойство completed равно true.
  
 // javascript
//Code kopieren
 // tasksToRender = allTasks.filter((task) => task.completed);  // Показать только выполненные задачи
//  Что делает этот код:
  //Очищает текущий список задач на экране.
 // В зависимости от выбранного фильтра (all, pending, или completed) отбирает нужные задачи из массива allTasks.
 // Заполняет массив tasksToRender задачами, которые нужно отобразить (все задачи, только невыполненные или только выполненные).
 // Этот механизм фильтрации позволяет динамически менять отображаемые задачи в зависимости от выбранных пользователем условий.
  let tasksToRender = [];

  if (filter === "all") {
    tasksToRender = allTasks;
  } else if (filter === "pending") {
    tasksToRender = allTasks.filter((task) => !task.completed);
  } else if (filter === "completed") {
    tasksToRender = allTasks.filter((task) => task.completed);
  }

  tasksToRender.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    // Если задача выполнена, добавляем класс list-item_done
    if (task.completed) {
      listItem.classList.add("list-item_done");
    }

    listItem.textContent = task.text;
// Добавляем обработчик события для клика по задаче
listItem.addEventListener("click", () => {
  task.completed = !task.completed;  // Меняем статус задачи
  renderTasks(filter);  // Перерисовываем список задач
});

taskList.appendChild(listItem);
});
};
 