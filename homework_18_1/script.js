// Асинхронная функция для получения случайного факта о кошках
async function getCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
            throw new Error('Ошибка при получении факта.');
        }
        const data = await response.json();
        return data.fact;
    } catch (error) {
        console.error('Ошибка при получении факта о кошке:', error);
        return 'Не удалось загрузить факт о кошке.';
    }
}

// Асинхронная функция для получения случайного изображения кошки
async function getCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1&mime_types=jpg');
        if (!response.ok) {
            throw new Error('Ошибка при получении изображения.');
        }
        const data = await response.json();
        return data[0].url; // Берем URL первого изображения
    } catch (error) {
        console.error('Ошибка при получении изображения кошки:', error);
        return ''; // Вернём пустую строку в случае ошибки
    }
}

// Функция для обновления факта и изображения на странице
async function updateCatContent() {
    const factElement = document.getElementById('cat-fact');
    const imageElement = document.getElementById('cat-image');
    
    // Обновляем факт
    factElement.textContent = 'Загрузка факта...';
    const fact = await getCatFact();
    factElement.textContent = fact;

    // Обновляем изображение
    imageElement.src = '';
    imageElement.alt = 'Загрузка изображения...';
    const imageUrl = await getCatImage();
    if (imageUrl) {
        imageElement.src = imageUrl;
        imageElement.alt = 'Random Cat Image';
    } else {
        imageElement.alt = 'Не удалось загрузить изображение.';
    }
}

// Обработчик для кнопки "Refresh"
document.getElementById('refresh-btn').addEventListener('click', updateCatContent);

// Загрузка факта и изображения при первой загрузке страницы
updateCatContent();