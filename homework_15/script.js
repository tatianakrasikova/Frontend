const startBtn = document.getElementById('startBtn');
const timeInput = document.getElementById('timeInput');
const timerDisplay = document.getElementById('timerDisplay');
const message = document.getElementById('message');
let countdown;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function startTimer() {
    let timeLeft = parseInt(timeInput.value);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Введите корректное время!");
        return;
    }

    clearInterval(countdown);  // Сброс предыдущего таймера

    while (timeLeft >= 0) {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        // Обновляем отображение таймера
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeLeft === 0) {
            message.textContent = "Время вышло!";
            break;
        }

        await delay(1000); // Ожидание 1 секунды
        timeLeft--;
    }
}

startBtn.addEventListener('click', () => {
    message.textContent = "";  // Очищаем сообщение при новом старте
    startTimer();
});