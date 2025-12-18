// swap.js - Система управления проектами с скроллом

// Конфигурация проектов
const projectsConfig = {
    // Легкие проекты
    'easy-projects': {
        title: 'Мои проекты легкого уровня',
        items: [
            {
                id: 'easy-1',
                title: 'Знакомство с HTML и CSS(1)',
                path: './light_work/work1/index.html',
                description: 'Первый сайт созданный во время обучения',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-2',
                title: 'Знакомство с HTML и CSS(2)',
                path: './light_work/work2/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-3',
                title: 'Знакомство с HTML и CSS(3)',
                path: './light_work/work3/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-4',
                title: 'Знакомство с HTML и CSS(4)',
                path: './light_work/work4/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-5',
                title: 'Шрифты',
                path: './light_work/work5/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-6',
                title: 'Таблицы(1)',
                path: './light_work/work6/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-7',
                title: 'Таблицы(2)',
                path: './light_work/work7/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-8',
                title: 'Цвет фона(1)',
                path: './light_work/work8/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-9',
                title: 'Цвет фона(2)',
                path: './light_work/work9/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-10',
                title: 'Позиционирование',
                path: './light_work/work10/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-11',
                title: 'Псевдоклассы ":hover, :has, :visited" ',
                path: './light_work/work11/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-12',
                title: 'Псевдоклассы ":after :before"',
                path: './light_work/work12/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-13',
                title: 'Псевдокласс ":child"',
                path: './light_work/work13/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-14',
                title: 'Flex(1)',
                path: './light_work/work14/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-15',
                title: 'Flex(2)',
                path: './light_work/work15/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-16',
                title: 'Float',
                path: './light_work/work16/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-17',
                title: 'Трансформация(1)',
                path: './light_work/work17/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-18',
                title: 'Трансформация(2)',
                path: './light_work/work18/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-19',
                title: 'Трансформация(3)',
                path: './light_work/work19/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-20',
                title: 'Трансформация(4)',
                path: './light_work/work20/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-21',
                title: 'Анимации',
                path: './light_work/work21/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-22',
                title: 'Спрайты',
                path: './light_work/work22/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-23',
                title: 'Спрайт анимированный',
                path: './light_work/work23/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-24',
                title: 'Векторная графика',
                path: './light_work/work24/index.html',
                icon: './img/head_title/html.png'
            },
        ]
    },
    
    // Средние проекты
     'medium-projects': {
        title: 'Мои проекты среднего уровня',
        items: [
            {
                id: 'medium-1',
                title: 'Карточная игра',
                path: './medium_work/HW1/Card_game/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-2',
                title: 'HTML Tutorial',
                path: './medium_work/HW1/HTML_Tutorial/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-3',
                title: 'Romeo and Juliet',
                path: './medium_work/HW1/romeo_and_juliet/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-4',
                title: 'Lorem Ipsum',
                path: './medium_work/HW2/Lorem_Ipsum/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-5',
                title: 'Математические формулы',
                path: './medium_work/HW2/Mathematical_formulas/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-6',
                title: 'Транспорт',
                path: './medium_work/HW2/Vehicle/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-7',
                title: 'Верстка',
                path: './medium_work/HW3/index.html', // Корректный путь для HW3
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-8',
                title: 'Список фруктов (HW4-Task1)',
                path: './medium_work/HW4/Task1/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-9',
                title: 'Список дел (HW4-Task2)',
                path: './medium_work/HW4/Task2/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-10',
                title: 'Значение слова "TAG" (HW4-Task3)',
                path: './medium_work/HW4/Task3/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-11',
                title: 'Галерея телефонов (HW5-1)',
                path: './medium_work/HW5/1/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-12',
                title: 'Выпадающее меню (HW5)',
                path: './medium_work/HW5/index.html', // Корректный путь для HW5
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-13',
                title: 'Верстка (HW6)',
                path: './medium_work/HW6/index.html', // Корректный путь для HW6
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-14',
                title: 'Мой холодильник (HW7-1)',
                path: './medium_work/HW7/1/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-15',
                title: 'Список иконок (HW7-2)',
                path: './medium_work/HW7/2/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-16',
                title: 'Таблица в скролле (HW7-3)',
                path: './medium_work/HW7/3/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-17',
                title: 'Верстка (HW8)',
                path: './medium_work/HW8/index.html', // Корректный путь для HW8
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-18',
                title: 'Квадрат и прямоугольник (HW9-1)',
                path: './medium_work/HW9/1/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-19',
                title: 'Шутка дня (HW9-2)',
                path: './medium_work/HW9/2 Shutka/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-20',
                title: 'Блок с SVG (HW9-3)',
                path: './medium_work/HW9/3/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-21',
                title: 'Перемещение фигур (HW10-1)',
                path: './medium_work/HW10/1/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-22',
                title: 'Анимированное сердце (HW10-2)',
                path: './medium_work/HW10/2/index.html',
                icon: './img/head_title/html.png'
            },
            {
                id: 'medium-23',
                title: 'SVG + Анимации (HW10-3)',
                path: './medium_work/HW10/3/index.html',
                icon: './img/head_title/html.png'
            },
        ]
    },
    
    // Сложные проекты
    'hard-projects': {
        title: 'Мои проекты тяжелого уровня',
        items: []
    }
};

// Состояние системы проектов
const projectState = {
    currentLevel: null,
    currentProject: null,
    expandedLevels: new Set(),
    loadedProjects: new Map(),
    compactMode: false
};

// Инициализация системы проектов
function initProjectsSystem() {
    createProjectsSections();
    setupEventListeners();
    loadSavedState();
    updateCompactMode();
    
    console.log('Система проектов инициализирована');
}

// Создание секций проектов в левой навигации
function createProjectsSections() {
    const leftNavUl = document.querySelector('.left_nav_ul');
    
    // Создаем блоки для каждого уровня проектов
    Object.keys(projectsConfig).forEach(level => {
        const config = projectsConfig[level];
        
        // Создаем основной элемент меню (как "Обо мне" и "Достижения")
        const levelLi = document.createElement('li');
        levelLi.className = 'project-level-item';
        levelLi.setAttribute('data-level', level);
        
        // Внутренняя структура элемента
        const headerDiv = document.createElement('div');
        headerDiv.className = 'project-level-header';
        headerDiv.setAttribute('data-count', config.items.length);
        
        const arrowImg = document.createElement('img');
        arrowImg.className = 'level-arrow';
        arrowImg.src = './img/left_nav/arrow-right.png';
        arrowImg.alt = 'arrow';
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'level-title';
        titleSpan.textContent = config.title;
        titleSpan.title = config.title;
        
        headerDiv.appendChild(arrowImg);
        headerDiv.appendChild(titleSpan);
        levelLi.appendChild(headerDiv);
        
        // Создаем вложенный список проектов
        const projectsList = document.createElement('ul');
        projectsList.className = 'projects-list';
        
        // Добавляем проекты в список
        config.items.forEach(project => {
            const projectItem = document.createElement('li');
            projectItem.className = 'project-item';
            projectItem.setAttribute('data-project-id', project.id);
            projectItem.setAttribute('data-project-level', level);
            projectItem.setAttribute('data-project-path', project.path);
            projectItem.textContent = project.title;
            projectItem.title = project.title;
            
            // Добавляем иконку файла перед текстом
            const fileIcon = document.createElement('img');
            fileIcon.className = 'project-item-icon';
            fileIcon.src = './img/left_nav/file-icon.png';
            fileIcon.alt = '';
            
            projectItem.prepend(fileIcon);
            projectsList.appendChild(projectItem);
        });
        
        // Если проектов нет, показываем сообщение
        if (config.items.length === 0) {
            const emptyItem = document.createElement('li');
            emptyItem.className = 'project-item empty';
            emptyItem.textContent = 'Нет проектов';
            emptyItem.style.opacity = '0.5';
            emptyItem.style.cursor = 'default';
            projectsList.appendChild(emptyItem);
        }
        
        // Добавляем вложенный список к основному элементу
        levelLi.appendChild(projectsList);
        
        // Вставляем в конец меню
        leftNavUl.appendChild(levelLi);
    });
}

// Настройка обработчиков событий - ИСПРАВЛЕНО
function setupEventListeners() {
    // Обработчики для заголовков уровней
    document.addEventListener('click', (e) => {
        const levelHeader = e.target.closest('.project-level-header');
        if (levelHeader) {
            e.stopPropagation();
            e.preventDefault();
            const levelLi = levelHeader.closest('.project-level-item');
            const level = levelLi.getAttribute('data-level');
            toggleLevelExpansion(level);
            return;
        }
        
        // Обработчики для проектов
        const projectItem = e.target.closest('.project-item:not(.empty)');
        if (projectItem) {
            e.stopPropagation();
            e.preventDefault();
            const projectId = projectItem.getAttribute('data-project-id');
            const level = projectItem.getAttribute('data-project-level');
            const path = projectItem.getAttribute('data-project-path');
            openProject(level, projectId, path);
            return;
        }
    });
    
    // Закрытие iframe по кнопке
    document.addEventListener('click', (e) => {
        const closeBtn = e.target.closest('.project-frame-close');
        if (closeBtn) {
            e.stopPropagation();
            closeCurrentProject();
        }
    });
    
    // Автоматическое включение компактного режима при большом количестве проектов
    window.addEventListener('resize', updateCompactMode);
}

// Переключение компактного режима
function toggleCompactMode() {
    projectState.compactMode = !projectState.compactMode;
    const leftNav = document.querySelector('.left_nav');
    
    if (projectState.compactMode) {
        leftNav.classList.add('compact-mode');
        console.log('Компактный режим включен');
    } else {
        leftNav.classList.remove('compact-mode');
        console.log('Компактный режим выключен');
    }
    
    saveState();
}

// Обновление компактного режима в зависимости от размера экрана
function updateCompactMode() {
    const totalProjects = projectsConfig['easy-projects'].items.length +
                         projectsConfig['medium-projects'].items.length +
                         projectsConfig['hard-projects'].items.length;
    
    // Включаем компактный режим если много проектов или маленький экран
    const shouldBeCompact = totalProjects > 15 || window.innerWidth < 1200;
    
    const leftNav = document.querySelector('.left_nav');
    if (shouldBeCompact && !projectState.compactMode) {
        leftNav.classList.add('compact-mode');
        projectState.compactMode = true;
    } else if (!shouldBeCompact && projectState.compactMode) {
        leftNav.classList.remove('compact-mode');
        projectState.compactMode = false;
    }
}

// Переключение раскрытия уровня
function toggleLevelExpansion(level) {
    const levelLi = document.querySelector(`.project-level-item[data-level="${level}"]`);
    const arrow = levelLi.querySelector('.level-arrow');
    const list = levelLi.querySelector('.projects-list');
    
    if (levelLi.classList.contains('expanded')) {
        // Сворачиваем
        levelLi.classList.remove('expanded');
        arrow.src = './img/left_nav/arrow-right.png';
        arrow.style.transform = 'rotate(0deg)';
        projectState.expandedLevels.delete(level);
    } else {
        // Раскрываем
        levelLi.classList.add('expanded');
        arrow.src = './img/left_nav/arrow-down.png';
        arrow.style.transform = 'rotate(0deg)';
        projectState.expandedLevels.add(level);
        
        // Закрываем другие уровни (опционально)
        document.querySelectorAll('.project-level-item').forEach(otherLevel => {
            const otherLevelId = otherLevel.getAttribute('data-level');
            if (otherLevelId !== level && projectState.expandedLevels.has(otherLevelId)) {
                toggleLevelExpansion(otherLevelId);
            }
        });
        
        // Прокручиваем к открытому элементу если нужно
        setTimeout(() => {
            if (!isElementInViewport(levelLi)) {
                levelLi.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 100);
    }
    
    saveState();
}

// Проверка, виден ли элемент в viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Открытие проекта - ИСПРАВЛЕНО
function openProject(level, projectId, projectPath) {
    const config = projectsConfig[level];
    const project = config.items.find(p => p.id === projectId);
    
    if (!project) {
        console.error('Проект не найден:', projectId);
        return;
    }
    
    // Обновляем состояние
    projectState.currentLevel = level;
    projectState.currentProject = projectId;
    
    // Обновляем активные классы
    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeItem = document.querySelector(`.project-item[data-project-id="${projectId}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
    
    // Создаем или показываем контент проекта
    showProjectContent(project);
    
    // Раскрываем уровень, если он свернут
    if (!projectState.expandedLevels.has(level)) {
        toggleLevelExpansion(level);
    }
    
    saveState();
}

// Показ контента проекта - ИСПРАВЛЕНО
function showProjectContent(project) {
    // Скрываем все основные контенты
    document.querySelectorAll('.code-editor').forEach(editor => {
        editor.classList.remove('active');
    });
    
    // Создаем контейнер для iframe, если его нет
    let frameContainer = document.getElementById('project-frame-container');
    
    if (!frameContainer) {
        frameContainer = document.createElement('div');
        frameContainer.id = 'project-frame-container';
        frameContainer.className = 'project-frame-container';
        
        // Создаем заголовок iframe
        const headerDiv = document.createElement('div');
        headerDiv.className = 'project-frame-header';
        
        const closeImg = document.createElement('img');
        closeImg.className = 'project-frame-close';
        closeImg.src = './img/head_title/close.png';
        closeImg.alt = 'Закрыть';
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'project-frame-title';
        
        headerDiv.appendChild(closeImg);
        headerDiv.appendChild(titleSpan);
        
        // Создаем iframe
        const iframe = document.createElement('iframe');
        iframe.className = 'project-frame';
        iframe.id = 'project-frame';
        iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
        
        // Индикатор загрузки
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'project-frame-loading';
        loadingDiv.id = 'project-frame-loading';
        loadingDiv.innerHTML = '<div class="loading-spinner"></div>';
        
        frameContainer.appendChild(headerDiv);
        frameContainer.appendChild(loadingDiv);
        frameContainer.appendChild(iframe);
        
        // Добавляем в контент
        document.querySelector('.main_content').appendChild(frameContainer);
        
        // Обработчик загрузки iframe
        iframe.addEventListener('load', () => {
            loadingDiv.style.display = 'none';
        });
    }
    
    // Обновляем заголовок
    const titleSpan = frameContainer.querySelector('.project-frame-title');
    titleSpan.textContent = project.title;
    
    // Показываем индикатор загрузки
    const loadingDiv = frameContainer.querySelector('.project-frame-loading');
    loadingDiv.style.display = 'flex';
    
    // Загружаем проект в iframe
    const iframe = frameContainer.querySelector('#project-frame');
    iframe.src = project.path;
    
    // Показываем контейнер
    frameContainer.classList.add('active');
    
    // Обновляем путь навигации
    updateProjectPath(project);
    
    // Скрываем основное содержимое
    document.querySelectorAll('.code-editor').forEach(editor => {
        editor.style.display = 'none';
    });
}

// Обновление пути навигации для проекта
function updateProjectPath(project) {
    const pathContainer = document.getElementById('path-container');
    if (pathContainer) {
        pathContainer.innerHTML = '';
        
        const pathItems = ['Мое портфолио', 'Проекты', project.title];
        pathItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            
            if (index < pathItems.length - 1) {
                li.style.paddingRight = '15px';
                li.style.marginRight = '5px';
                li.style.color = 'var(--text-gray, #8F9BA6)';
            } else {
                li.style.color = 'var(--text-light, #fff6f6)';
                li.style.fontWeight = '600';
            }
            
            pathContainer.appendChild(li);
        });
    }
}

// Закрытие текущего проекта - ИСПРАВЛЕНО
function closeCurrentProject() {
    const frameContainer = document.getElementById('project-frame-container');
    if (frameContainer) {
        frameContainer.classList.remove('active');
        
        // Очищаем iframe
        const iframe = frameContainer.querySelector('#project-frame');
        iframe.src = 'about:blank';
        
        // Сбрасываем активный проект
        projectState.currentProject = null;
        document.querySelectorAll('.project-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Показываем основное содержимое
        document.querySelectorAll('.code-editor').forEach(editor => {
            editor.style.display = '';
        });
        
        // Показываем активную вкладку из системы вкладок
        if (window.tabSystem && window.tabSystem.activeTab) {
            const activeContent = document.getElementById(`${window.tabSystem.activeTab}-content`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        }
        
        saveState();
    }
}

// Сохранение состояния
function saveState() {
    const state = {
        currentLevel: projectState.currentLevel,
        currentProject: projectState.currentProject,
        expandedLevels: Array.from(projectState.expandedLevels),
        compactMode: projectState.compactMode
    };
    
    localStorage.setItem('projects-state', JSON.stringify(state));
}

// Загрузка сохраненного состояния
function loadSavedState() {
    try {
        const saved = localStorage.getItem('projects-state');
        if (saved) {
            const state = JSON.parse(saved);
            
            projectState.currentLevel = state.currentLevel;
            projectState.currentProject = state.currentProject;
            projectState.expandedLevels = new Set(state.expandedLevels || []);
            projectState.compactMode = state.compactMode || false;
            
            // Восстанавливаем раскрытые уровни
            projectState.expandedLevels.forEach(level => {
                const levelLi = document.querySelector(`.project-level-item[data-level="${level}"]`);
                if (levelLi) {
                    levelLi.classList.add('expanded');
                    const arrow = levelLi.querySelector('.level-arrow');
                    if (arrow) {
                        arrow.src = './img/left_nav/arrow-down.png';
                    }
                }
            });
            
            // Восстанавливаем активный проект
            if (state.currentLevel && state.currentProject) {
                const projectItem = document.querySelector(
                    `.project-item[data-project-id="${state.currentProject}"]`
                );
                if (projectItem) {
                    projectItem.classList.add('active');
                }
            }
            
            // Восстанавливаем компактный режим
            if (projectState.compactMode) {
                document.querySelector('.left_nav').classList.add('compact-mode');
            }
        }
    } catch (error) {
        console.error('Ошибка загрузки состояния проектов:', error);
    }
}

// Добавление скролла в левую навигацию
function addLeftNavScroll() {
    const leftNav = document.querySelector('.left_nav');
    if (!leftNav) return;
    
    // Проверяем, есть ли уже контейнер
    let leftNavContent = leftNav.querySelector('.left_nav_content');
    if (!leftNavContent) {
        leftNavContent = document.createElement('div');
        leftNavContent.className = 'left_nav_content';
        
        // Перемещаем все содержимое left_nav, кроме первой секции (Проводник)
        const children = Array.from(leftNav.children);
        children.forEach((child, index) => {
            if (index > 0) { // Пропускаем первую секцию (Проводник)
                leftNavContent.appendChild(child);
            }
        });
        
        // Добавляем контейнер с содержимым обратно
        leftNav.appendChild(leftNavContent);
    }
    
    console.log('Скролл добавлен в левую навигацию');
}

// Инициализация при загрузке - ИСПРАВЛЕНО
document.addEventListener('DOMContentLoaded', () => {
    // Ждем загрузки основной системы вкладок
    setTimeout(() => {
        // Добавляем скролл в левую навигацию
        addLeftNavScroll();
        
        // Инициализируем систему проектов
        initProjectsSystem();
        
        // Перехватываем систему вкладок для корректной работы с проектами
        if (window.tabSystem) {
            // Сохраняем оригинальные методы
            const originalSwitchToTab = window.tabSystem.switchToTab;
            const originalCloseTab = window.tabSystem.closeTab;
            
            // Переопределяем switchToTab для закрытия проекта при переключении
            window.tabSystem.switchToTab = function(tabId) {
                // Закрываем проект если он открыт
                const frameContainer = document.getElementById('project-frame-container');
                if (frameContainer && frameContainer.classList.contains('active')) {
                    closeCurrentProject();
                }
                
                // Вызываем оригинальный метод
                return originalSwitchToTab.call(this, tabId);
            };
            
            // Переопределяем closeTab для закрытия проекта
            window.tabSystem.closeTab = function(tabId) {
                // Закрываем проект если он открыт
                const frameContainer = document.getElementById('project-frame-container');
                if (frameContainer && frameContainer.classList.contains('active')) {
                    closeCurrentProject();
                }
                
                // Вызываем оригинальный метод
                return originalCloseTab.call(this, tabId);
            };
        }
        
        console.log(`Загружено ${projectsConfig['easy-projects'].items.length} проектов легкого уровня`);
    }, 500);
});