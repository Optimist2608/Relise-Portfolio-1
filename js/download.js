// download.js - Система скачивания работ

// Конфигурация работ для скачивания
const downloadConfig = {
    'easy': {
        title: 'Легкие проекты',
        items: [
            {
                id: 'easy-1',
                title: 'Знакомство с HTML и CSS(1)',
                description: 'Первый сайт созданный во время обучения',
                downloadLink: './light_work/work1.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.4 MB', // Оценка: work1/index.html, style.css, img/mammoth.png (небольшое)
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-2',
                title: 'Знакомство с HTML и CSS(2)',
                downloadLink: './light_work/work2.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.3 MB', // Оценка: work2/index.html, style.css, img/icoBerry.png (небольшое)
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-3',
                title: 'Знакомство с HTML и CSS(3)',
                downloadLink: './light_work/work3.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.4 MB', // Оценка: work3/index.html, style.css, img/bober.png (небольшое)
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-4',
                title: 'Знакомство с HTML и CSS(4)',
                downloadLink: './light_work/work4.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.8 MB', // Оценка: work4/index.html, page2.html, style.css, Text/Text.txt, img/Screenshot_1.jpg, Desktop 2025.11.07 - 20.56.52.02.mp4 (видео может быть больше)
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-5',
                title: 'Шрифты',
                downloadLink: './light_work/work5.zip',
                technologies: ['HTML', 'CSS', 'Шрифты'],
                size: '1.2 MB', // Оценка: work5/index.html, style.css, fonts (несколько файлов шрифтов)
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-6',
                title: 'Таблицы(1)',
                downloadLink: './light_work/work6.zip',
                technologies: ['HTML', 'CSS', 'Таблицы'],
                size: '0.5 MB', // Оценка: work6/index.html, style.css, img/car90_42507.png
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-7',
                title: 'Таблицы(2)',
                downloadLink: './light_work/work7.zip',
                technologies: ['HTML', 'CSS', 'Таблицы'],
                size: '0.3 MB', // Оценка: work7/index.html, style.css
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-8',
                title: 'Цвет фона(1)',
                downloadLink: './light_work/work8.zip',
                technologies: ['HTML', 'CSS', 'Градиенты'],
                size: '0.7 MB', // Оценка: work8/index.html, style.css, img/priroda_ozero_gory_166874_3840x2160.jpg, img/na-rab-stol-2.jpg
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-9',
                title: 'Цвет фона(2)',
                downloadLink: './light_work/work9.zip',
                technologies: ['HTML', 'CSS', 'Градиенты'],
                size: '0.7 MB', // Оценка: work9/index.html, style.css, img/fon.jpg (видимо, фон)
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-10',
                title: 'Позиционирование',
                downloadLink: './light_work/work10.zip',
                technologies: ['HTML', 'CSS', 'Flexbox'],
                size: '0.3 MB', // Оценка: work10/index.html, style.css, img/dino.png
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-11',
                title: 'Псевдоклассы ":hover, :has, :visited"',
                downloadLink: './light_work/work11.zip',
                technologies: ['HTML', 'CSS', 'Псевдоклассы'],
                size: '0.4 MB', // Оценка: work11/index.html, style.css, img/R.png, img/cog_icon_125323.png
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-12',
                title: 'Псевдоклассы ":after :before"',
                downloadLink: './light_work/work12.zip',
                technologies: ['HTML', 'CSS', 'Псевдоклассы'],
                size: '0.3 MB', // Оценка: work12/index.html, style.css
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-13',
                title: 'Псевдокласс ":child"', // Work13
                downloadLink: './light_work/work13.zip',
                technologies: ['HTML', 'CSS', 'Псевдоклассы'],
                size: '0.2 MB', // Оценка: work13/index.html, style.css
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-14',
                title: 'Flex(1)', // Work14
                downloadLink: './light_work/work14.zip',
                technologies: ['HTML', 'CSS', 'Flexbox'],
                size: '0.2 MB', // Оценка: work14/index.html, style.css
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-15',
                title: 'Flex(2)', // Work15
                downloadLink: './light_work/work15.zip',
                technologies: ['HTML', 'CSS', 'Flexbox'],
                size: '0.6 MB', // Оценка: work15/index.html, style.css, img/pic_1.png, img/pic_2.png, img/pic_3.png
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-16',
                title: 'Float', // Work16, нет данных в запросе
                downloadLink: './light_work/work16.zip',
                technologies: ['HTML', 'CSS', 'Float'],
                size: 'Не указан', // Не могу оценить без содержимого light_work/work16
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-17',
                title: 'Трансформация(1)', // Work17
                downloadLink: './light_work/work17.zip',
                technologies: ['HTML', 'CSS', 'Transform'],
                size: '0.2 MB', // Оценка: work17/index.html, style.css
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-18',
                title: 'Трансформация(2)', // Work18
                downloadLink: './light_work/work18.zip',
                technologies: ['HTML', 'CSS', 'Transform'],
                size: '0.2 MB', // Оценка: work18/index.html, style.css
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-19',
                title: 'Трансформация(3)', // Work19
                downloadLink: './light_work/work19.zip',
                technologies: ['HTML', 'CSS', 'Transform'],
                size: '0.2 MB', // Оценка: work19/index.html, style.css
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-20',
                title: 'Трансформация(4)', // Work20
                downloadLink: './light_work/work20.zip',
                technologies: ['HTML', 'CSS', 'Transform'],
                size: '0.2 MB', // Оценка: work20/index.html, style.css
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-21',
                title: 'Анимации', // Work21
                downloadLink: './light_work/work21.zip',
                technologies: ['HTML', 'CSS', 'Animations'],
                size: '0.2 MB', // Оценка: work21/index.html, style.css
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-22',
                title: 'Спрайты', // Work22
                downloadLink: './light_work/work22.zip',
                technologies: ['HTML', 'CSS', 'Sprite'],
                size: '0.4 MB', // Оценка: work22/index.html, style.css, img/icon2.png
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-23',
                title: 'Спрайт анимированный', // Work23
                downloadLink: './light_work/work23.zip',
                technologies: ['HTML', 'CSS', 'Sprite', 'Animations'],
                size: '0.5 MB', // Оценка: work23/index.html, style.css, img/smurf.png
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-24',
                title: 'Векторная графика', // Work24
                downloadLink: './light_work/work24.zip',
                technologies: ['HTML', 'CSS', 'SVG'],
                size: '0.2 MB', // Оценка: work24/index.html, style.css
                icon: './img/head_title/html.png'
            }
        ]
    },
    'medium': {
        title: 'Средние проекты',
        items: [
            {
                id: 'medium-1',
                title: 'Карточная игра', // HW1/Card_game
                downloadLink: './medium_work/HW1/Card_game.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.5 MB', // Оценочный размер
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-2',
                title: 'HTML Tutorial', // HW1/HTML_Tutorial
                downloadLink: './medium_work/HW1/HTML_Tutorial.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.7 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-3',
                title: 'Romeo and Juliet', // HW1/romeo_and_juliet
                downloadLink: './medium_work/HW1/romeo_and_juliet.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.6 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-4',
                title: 'Lorem Ipsum (HW2)', // HW2/Lorem_Ipsum
                downloadLink: './medium_work/HW2/Lorem_Ipsum.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.4 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-5',
                title: 'Математические формулы (HW2)', // HW2/Mathematical_formulas
                downloadLink: './medium_work/HW2/Mathematical_formulas.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.4 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-6',
                title: 'Транспорт (HW2)', // HW2/Vehicle
                downloadLink: './medium_work/HW2/Vehicle.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.3 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-7',
                title: 'The Orbitians (HW3)', // HW3
                downloadLink: './medium_work/HW3.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.8 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-8',
                title: 'Список фруктов (HW4-Task1)', // HW4/Task1
                downloadLink: './medium_work/HW4/Task1.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.3 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-9',
                title: 'Список дел (HW4-Task2)', // HW4/Task2
                downloadLink: './medium_work/HW4/Task2.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.4 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-10',
                title: 'Значение слова "TAG" (HW4-Task3)', // HW4/Task3
                downloadLink: './medium_work/HW4/Task3.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.5 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-11',
                title: 'Галерея телефонов (HW5-1)', // HW5/1
                downloadLink: './medium_work/HW5/1.zip',
                technologies: ['HTML', 'CSS'],
                size: '1.2 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-12',
                title: 'Выпадающее меню (HW5)', // HW5
                downloadLink: './medium_work/HW5.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.7 MB',
                // Описание отсутствует в оригинале medium_work/HW5/index.html
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-13',
                title: 'Speak (HW6)', // HW6
                downloadLink: './medium_work/HW6.zip',
                technologies: ['HTML', 'CSS'],
                size: '1.5 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-14',
                title: 'My fridge (HW7-1)', // HW7/1
                downloadLink: './medium_work/HW7/1.zip',
                technologies: ['HTML', 'CSS'],
                size: '1.0 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-15',
                title: 'Список иконок (HW7-2)', // HW7/2
                downloadLink: './medium_work/HW7/2.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.4 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-16',
                title: 'Таблица в скролле (HW7-3)', // HW7/3
                downloadLink: './medium_work/HW7/3.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.5 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-17',
                title: 'Наши клиенты (HW8)', // HW8
                downloadLink: './medium_work/HW8.zip',
                technologies: ['HTML', 'CSS'],
                size: '1.8 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-18',
                title: 'Прямоугольник и Квадрат (HW9-1)', // HW9/1
                downloadLink: './medium_work/HW9/1.zip',
                technologies: ['HTML', 'CSS', 'SVG'],
                size: '0.2 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-19',
                title: 'Шутка дня (HW9-2)', // HW9/2 Shutka
                downloadLink: './medium_work/HW9/2 Shutka.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.3 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-20',
                title: 'Блок с SVG (HW9-3)', // HW9/3
                downloadLink: './medium_work/HW9/3.zip',
                technologies: ['HTML', 'CSS', 'SVG'],
                size: '0.4 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-21',
                title: 'Перемещение фигур (HW10-1)', // HW10/1
                downloadLink: './medium_work/HW10/1.zip',
                technologies: ['HTML', 'CSS', 'SVG'],
                size: '0.2 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-22',
                title: 'Анимированное сердце (HW10-2)', // HW10/2
                downloadLink: './medium_work/HW10/2.zip',
                technologies: ['HTML', 'CSS', 'SVG', 'Анимации'],
                size: '0.3 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-23',
                title: 'Hello, my site! (HW10-3)', // HW10/3
                downloadLink: './medium_work/HW10/3.zip',
                technologies: ['HTML', 'CSS'],
                size: '0.2 MB',
                icon: './img/head_title/html.png'
            }
        ]
    }, 
    'hard': {
        title: 'Сложные проекты',
        items: []
    }
};

// ... остальной код ...

// Инициализация системы скачивания
function initDownloadSystem() {
    renderDownloadList();
    setupDownloadEventListeners();
}

// Рендер списка скачиваний
function renderDownloadList() {
    const outputTab = document.getElementById('output-tab');
    if (!outputTab) return;
    
    outputTab.innerHTML = '';
    
    // Создаем контейнер для списка
    const container = document.createElement('div');
    container.className = 'download-container';
    
    // Заголовок
    const header = document.createElement('h2');
    header.textContent = 'Скачать мои работы';
    header.className = 'download-header';
    container.appendChild(header);
    
    // Описание
    const description = document.createElement('p');
    description.textContent = 'Все проекты упакованы в ZIP-архивы и готовы к скачиванию. Нажмите на кнопку скачивания для получения архива.';
    description.className = 'download-description';
    container.appendChild(description);
    
    // Создаем список по уровням
    Object.keys(downloadConfig).forEach(level => {
        const levelConfig = downloadConfig[level];
        if (levelConfig.items.length === 0) return;
        
        // Секция уровня
        const levelSection = document.createElement('div');
        levelSection.className = 'download-level-section';
        
        // Заголовок уровня
        const levelHeader = document.createElement('h3');
        levelHeader.textContent = levelConfig.title;
        levelHeader.className = 'download-level-header';
        levelSection.appendChild(levelHeader);
        
        // Счетчик проектов
        const counter = document.createElement('span');
        counter.className = 'download-counter';
        counter.textContent = `${levelConfig.items.length} проектов`;
        levelHeader.appendChild(counter);
        
        // Сетка проектов
        const grid = document.createElement('div');
        grid.className = 'download-grid';
        
        // Добавляем проекты в сетку
        levelConfig.items.forEach(project => {
            const projectCard = createProjectCard(project, level);
            grid.appendChild(projectCard);
        });
        
        levelSection.appendChild(grid);
        container.appendChild(levelSection);
    });
    
    // Добавляем информацию о форматах
    const formatInfo = document.createElement('div');
    formatInfo.className = 'download-info';
    formatInfo.innerHTML = `
        <h4>📦 Форматы файлов</h4>
        <ul>
            <li><strong>.zip</strong> - Архив с проектом (содержит HTML, CSS, изображения)</li>
            <li><strong>.html</strong> - Основной файл проекта</li>
            <li><strong>.css</strong> - Стили проекта</li>
            <li><strong>.js</strong> - JavaScript файлы (если есть)</li>
        </ul>
    `;
    container.appendChild(formatInfo);
    
    // Инструкция по установке
    const instructions = document.createElement('div');
    instructions.className = 'download-instructions';
    instructions.innerHTML = `
        <h4>⚡ Как установить проект:</h4>
        <ol>
            <li>Скачайте ZIP-архив проекта</li>
            <li>Разархивируйте файлы в нужную папку</li>
            <li>Откройте файл <code>index.html</code> в браузере</li>
            <li>Для редактирования откройте файлы в текстовом редакторе</li>
        </ol>
    `;
    container.appendChild(instructions);
    
    outputTab.appendChild(container);
}

// Создание карточки проекта
function createProjectCard(project, level) {
    const card = document.createElement('div');
    card.className = 'download-card';
    card.setAttribute('data-project-id', project.id);
    card.setAttribute('data-project-level', level);
    
    // Иконка проекта
    const iconDiv = document.createElement('div');
    iconDiv.className = 'download-card-icon';
    const icon = document.createElement('img');
    icon.src = project.icon || './img/head_title/html.png';
    icon.alt = project.title;
    iconDiv.appendChild(icon);
    
    // Контент карточки
    const content = document.createElement('div');
    content.className = 'download-card-content';
    
    // Заголовок
    const title = document.createElement('h4');
    title.textContent = project.title;
    content.appendChild(title);
    
    // Описание (если есть)
    if (project.description) {
        const desc = document.createElement('p');
        desc.textContent = project.description;
        desc.className = 'download-card-desc';
        content.appendChild(desc);
    }
    
    // Технологии - ОБНОВЛЕНО
    if (project.technologies && project.technologies.length > 0) {
        const techDiv = document.createElement('div');
        techDiv.className = 'download-card-tech';
        const techTagsHTML = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        techDiv.innerHTML = techTagsHTML;
        content.appendChild(techDiv);
    }
    
    // Размер файла
    if (project.size) {
        const sizeDiv = document.createElement('div');
        sizeDiv.className = 'download-card-size';
        const sizeIcon = document.createElement('span');
        sizeIcon.textContent = '📦 ';
        const sizeText = document.createElement('span');
        sizeText.textContent = project.size;
        sizeDiv.appendChild(sizeIcon);
        sizeDiv.appendChild(sizeText);
        content.appendChild(sizeDiv);
    }
    
    // Кнопка скачивания
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'download-card-button';
    const button = document.createElement('button');
    button.className = 'download-btn';
    button.setAttribute('data-download-link', project.downloadLink);
    button.setAttribute('data-project-title', project.title);
    
    const buttonIcon = document.createElement('img');
    buttonIcon.src = './img/footer/download-icon.png';
    buttonIcon.alt = 'Скачать';
    buttonIcon.className = 'download-btn-icon';
    
    const buttonText = document.createElement('span');
    buttonText.textContent = 'Скачать';
    
    button.appendChild(buttonIcon);
    button.appendChild(buttonText);
    buttonDiv.appendChild(button);
    
    // Собираем карточку
    card.appendChild(iconDiv);
    card.appendChild(content);
    card.appendChild(buttonDiv);
    
    return card;
}

// Настройка обработчиков событий
function setupDownloadEventListeners() {
    // Обработчик клика по кнопке скачивания
    document.addEventListener('click', function(e) {
        const downloadBtn = e.target.closest('.download-btn');
        if (downloadBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            const downloadLink = downloadBtn.getAttribute('data-download-link');
            const projectTitle = downloadBtn.getAttribute('data-project-title');
            
            if (downloadLink) {
                triggerDownload(downloadLink, projectTitle);
                
                // Показываем уведомление
                showDownloadNotification(projectTitle);
            }
        }
    });
    
    // Обработчик для отслеживания скачиваний
    document.addEventListener('download-started', function(e) {
        console.log('Скачивание начато:', e.detail.filename);
    });
    
    // Обработчик для обновления статистики скачиваний
    document.addEventListener('download-completed', function(e) {
        updateDownloadStats(e.detail.projectId);
    });
}

// Запуск скачивания
function triggerDownload(url, filename) {
    // Создаем событие начала скачивания
    const startEvent = new CustomEvent('download-started', {
        detail: { filename: filename, url: url, timestamp: new Date() }
    });
    document.dispatchEvent(startEvent);
    
    // Проверяем существование файла
    checkFileExists(url).then(exists => {
        if (exists) {
            // Создаем временную ссылку для скачивания
            const link = document.createElement('a');
            link.href = url;
            link.download = filename ? `${filename.replace(/[<>:"/\\|?*]/g, '_')}.zip` : 'project.zip';
            link.style.display = 'none';
            
            // Добавляем в DOM и кликаем
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Создаем событие завершения скачивания
            setTimeout(() => {
                const completeEvent = new CustomEvent('download-completed', {
                    detail: { 
                        filename: filename, 
                        url: url, 
                        timestamp: new Date(),
                        projectId: getProjectIdFromUrl(url)
                    }
                });
                document.dispatchEvent(completeEvent);
            }, 100);
        } else {
            // Показываем ошибку, если файл не найден
            showFileNotFoundError(filename, url);
        }
    }).catch(error => {
        console.error('Ошибка при проверке файла:', error);
        showFileNotFoundError(filename, url);
    });
}

// Проверка существования файла
async function checkFileExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        console.warn(`Файл не найден: ${url}`, error);
        return false;
    }
}

// Получение ID проекта из URL
function getProjectIdFromUrl(url) {
    const match = url.match(/\/(work\d+)\./);
    return match ? match[1] : null;
}

// Показ уведомления о скачивании
function showDownloadNotification(projectTitle) {
    // Удаляем предыдущее уведомление
    const existingNotification = document.querySelector('.download-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Создаем новое уведомление
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    
    const icon = document.createElement('img');
    icon.src = './img/footer/download-success.png';
    icon.alt = 'Успешно';
    icon.className = 'download-notification-icon';
    
    const text = document.createElement('span');
    text.textContent = `Скачивание "${projectTitle}" начато`;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'download-notification-close';
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    notification.appendChild(icon);
    notification.appendChild(text);
    notification.appendChild(closeBtn);
    
    // Добавляем в body
    document.body.appendChild(notification);
    
    // Показываем уведомление
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Автоматически скрываем через 5 секунд
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Показ ошибки, если файл не найден
function showFileNotFoundError(projectTitle, url) {
    // Удаляем предыдущее уведомление
    const existingNotification = document.querySelector('.download-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Создаем уведомление об ошибке
    const notification = document.createElement('div');
    notification.className = 'download-notification error';
    
    const icon = document.createElement('img');
    icon.src = './img/footer/download-error.png';
    icon.alt = 'Ошибка';
    icon.className = 'download-notification-icon';
    
    const text = document.createElement('span');
    text.textContent = `Файл "${projectTitle}" не найден`;
    
    const pathText = document.createElement('div');
    pathText.className = 'download-notification-path';
    pathText.textContent = `Путь: ${url}`;
    pathText.style.fontSize = '12px';
    pathText.style.opacity = '0.8';
    pathText.style.marginTop = '5px';
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'download-notification-close';
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    notification.appendChild(icon);
    notification.appendChild(text);
    notification.appendChild(pathText);
    notification.appendChild(closeBtn);
    
    // Добавляем стиль для ошибки
    notification.style.backgroundColor = '#f44336';
    notification.style.borderColor = '#d32f2f';
    
    // Добавляем в body
    document.body.appendChild(notification);
    
    // Показываем уведомление
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Автоматически скрываем через 8 секунд
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 8000);
}

// Обновление статистики скачиваний
function updateDownloadStats(projectId) {
    let downloadStats = JSON.parse(localStorage.getItem('download-stats') || '{}');
    
    if (!downloadStats[projectId]) {
        downloadStats[projectId] = {
            count: 0,
            lastDownload: null,
            firstDownload: new Date().toISOString()
        };
    }
    
    downloadStats[projectId].count++;
    downloadStats[projectId].lastDownload = new Date().toISOString();
    
    localStorage.setItem('download-stats', JSON.stringify(downloadStats));
    
    console.log(`Проект ${projectId} скачан ${downloadStats[projectId].count} раз(а)`);
}

// Получение статистики скачиваний
function getDownloadStats() {
    return JSON.parse(localStorage.getItem('download-stats') || '{}');
}

// Экспорт статистики
function exportDownloadStats() {
    const stats = getDownloadStats();
    const dataStr = JSON.stringify(stats, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'download-stats.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Ждем загрузки других систем
    setTimeout(() => {
        initDownloadSystem();
        
        // Проверяем наличие файлов для скачивания
        checkDownloadFiles();
        
        console.log('Система скачивания инициализирована');
    }, 1000);
});

// Проверка доступности файлов для скачивания
async function checkDownloadFiles() {
    console.log('Проверка доступности файлов для скачивания...');
    
    const unavailableFiles = [];
    
    for (const level of Object.keys(downloadConfig)) {
        const levelConfig = downloadConfig[level];
        console.log(`${levelConfig.title}: ${levelConfig.items.length} проектов доступно для скачивания`);
        
        // Проверяем каждый файл
        for (const project of levelConfig.items) {
            try {
                const exists = await checkFileExists(project.downloadLink);
                if (!exists) {
                    unavailableFiles.push({
                        level: levelConfig.title,
                        project: project.title,
                        url: project.downloadLink
                    });
                }
            } catch (error) {
                unavailableFiles.push({
                    level: levelConfig.title,
                    project: project.title,
                    url: project.downloadLink,
                    error: error.message
                });
            }
        }
    }
    
    if (unavailableFiles.length > 0) {
        console.warn('Найдены недоступные файлы:', unavailableFiles);
        
        // Можно показать предупреждение для пользователя
        if (unavailableFiles.length > 0) {
            console.warn(`Внимание: ${unavailableFiles.length} файлов недоступны для скачивания`);
        }
    }
}