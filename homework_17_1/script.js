const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.querySelector(".task-input");
const filterAllBtn = document.getElementById("all");
const filterCompletedBtn = document.getElementById("completed");
const filterPendingBtn = document.getElementById("uncompleted");

let allTasks = [];

// Добавление задач из fetch (с API)
const resultOfFetch = fetch("https://jsonplaceholder.typicode.com/todos");
resultOfFetch
  .then((response) => response.json())
  .then((bodyOfResponse) => {
    const first15Tasks = bodyOfResponse.slice(0, 15).map((task) => ({
      text: task.title,
      completed: task.completed,
    }));
    allTasks = [...allTasks, ...first15Tasks];
    renderTasks();
  })
  .catch((error) => console.error("Ошибка:", error));

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

function createTask(taskText) {
  const task = {
    text: taskText,
    completed: false,
  };
  allTasks.push(task);
  renderTasks();
}

function renderTasks(filter = "all") {
  taskList.innerHTML = "";
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

    if (task.completed) {
      listItem.classList.add("list-item_done");
    }

    listItem.textContent = task.text;

    listItem.addEventListener("click", () => {
      task.completed = !task.completed;

      renderTasks(filter);
    });

    taskList.appendChild(listItem);
  });
}
