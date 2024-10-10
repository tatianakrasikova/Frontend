const startBtn = document.getElementById('startBtn');
const timeInput = document.getElementById('timeInput');
const timerDisplay = document.getElementById('timerDisplay');
const message = document.getElementById('message');
let countdown; // Переменная для интервала

// Функция для обновления таймера
function updateTimer(timeLeft) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Отображаем время в формате MM:SS
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Функция для запуска таймера
function startTimer() {
    let timeLeft = parseInt(timeInput.value);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Введите корректное время!");
        return;
    }

    message.textContent = ""; // Очищаем сообщение
    clearInterval(countdown); // Сбрасываем предыдущий таймер, если был

    // Запускаем обратный отсчет каждую секунду
    countdown = setInterval(() => {
        updateTimer(timeLeft); // Обновляем отображение таймера

        if (timeLeft <= 0) {
            clearInterval(countdown); // Останавливаем таймер
            message.textContent = "Время вышло!"; // Выводим сообщение
            return;
        }

        timeLeft--; // Уменьшаем время на 1 секунду
    }, 1000);
}

startBtn.addEventListener('click', startTimer);