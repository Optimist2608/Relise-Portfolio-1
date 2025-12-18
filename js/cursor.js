// Конфигурация анимации курсора
const cursorConfig = {
    enabled: true,
    particleCount: 30, // Уменьшенное количество
    particleSize: { min: 2.5, max: 25 }, // В 2 раза меньше (было 5-50)
    colors: {
        dark: ['#58a6ff', '#3fb950', '#ff7b72'], // Для темной темы Adonis
        blue: ['#007acc', '#569CD6', '#9CDCFE'], // Для синей темы
        light: ['#4a90e2', '#27ae60', '#e74c3c'] // Для белой темы
    },
    speed: 0.3 // Скорость движения частиц
};

// Состояние анимации
let cursorAnimation = {
    active: false,
    sketch: null,
    currentTheme: 'dark'
};

// Функция для получения цветов по текущей теме
function getCursorColors() {
    const theme = localStorage.getItem('portfolio-theme') || 'color';
    
    switch(theme) {
        case 'dark_color': return cursorConfig.colors.dark;
        case 'white_color': return cursorConfig.colors.light;
        default: return cursorConfig.colors.blue;
    }
}

// Инициализация анимации курсора
function initCursorAnimation() {
    if (!cursorConfig.enabled) return;
    
    // Удаляем предыдущую анимацию если есть
    if (cursorAnimation.sketch) {
        cursorAnimation.sketch.remove();
    }
    
    // Создаем новый скетч p5.js
    cursorAnimation.sketch = new p5(function(sketch) {
        let particles = [];
        let isMouseMoving = false;
        let lastMouseX = 0;
        let lastMouseY = 0;
        
        sketch.setup = function() {
            const canvas = sketch.createCanvas(
                sketch.windowWidth, 
                sketch.windowHeight
            );
            canvas.parent('cursor-trail');
            sketch.noStroke();
            sketch.frameRate(60);
            
            // Прозрачный фон
            sketch.clear();
        };
        
        sketch.draw = function() {
            sketch.clear(); // Очищаем каждый кадр
            
            // Обновляем и рисуем частицы
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].draw();
                
                // Удаляем старые частицы
                if (particles[i].life <= 0) {
                    particles.splice(i, 1);
                }
            }
            
            // Автоматически удаляем частицы если их слишком много
            if (particles.length > cursorConfig.particleCount) {
                particles.splice(0, particles.length - cursorConfig.particleCount);
            }
        };
        
        sketch.mouseMoved = function() {
            const currentColors = getCursorColors();
            const speed = Math.sqrt(
                Math.pow(sketch.mouseX - lastMouseX, 2) + 
                Math.pow(sketch.mouseY - lastMouseY, 2)
            );
            
            // Добавляем частицы только если мышь двигается
            if (speed > 1) {
                // Количество частиц зависит от скорости
                const count = Math.min(3, Math.floor(speed / 5));
                
                for (let i = 0; i < count; i++) {
                    particles.push(new Particle(
                        sketch.mouseX + sketch.random(-10, 10),
                        sketch.mouseY + sketch.random(-10, 10),
                        currentColors
                    ));
                }
            }
            
            lastMouseX = sketch.mouseX;
            lastMouseY = sketch.mouseY;
            isMouseMoving = true;
        };
        
        sketch.mouseDragged = function() {
            sketch.mouseMoved();
        };
        
        sketch.windowResized = function() {
            sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
        };
        
        // Класс частицы
        class Particle {
            constructor(x, y, colors) {
                this.x = x;
                this.y = y;
                this.vx = sketch.random(-cursorConfig.speed, cursorConfig.speed);
                this.vy = sketch.random(-cursorConfig.speed, cursorConfig.speed);
                this.size = sketch.random(
                    cursorConfig.particleSize.min, 
                    cursorConfig.particleSize.max
                );
                this.color = sketch.random(colors);
                this.life = 1.0; // Начальная прозрачность
                this.decay = sketch.random(0.01, 0.03); // Скорость исчезновения
                this.rotation = sketch.random(0, sketch.TWO_PI);
                this.rotationSpeed = sketch.random(-0.05, 0.05);
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
                this.rotation += this.rotationSpeed;
                
                // Замедляем частицы
                this.vx *= 0.98;
                this.vy *= 0.98;
                
                // Уменьшаем размер со временем
                this.size *= 0.995;
            }
            
            draw() {
                if (this.life <= 0) return;
                
                sketch.push();
                sketch.translate(this.x, this.y);
                sketch.rotate(this.rotation);
                
                // Полупрозрачная заливка
                const alpha = this.life * 150; // Максимум 150/255 прозрачности
                sketch.fill(`${this.color}${Math.floor(alpha).toString(16).padStart(2, '0')}`);
                
                // Разные формы для разнообразия
                if (sketch.random() > 0.7) {
                    // Квадрат
                    sketch.rect(-this.size/2, -this.size/2, this.size, this.size);
                } else {
                    // Круг (основная форма)
                    sketch.ellipse(0, 0, this.size);
                }
                
                sketch.pop();
            }
        }
    });
    
    cursorAnimation.active = true;
    document.body.classList.add('show-cursor-trail');
}

// Управление анимацией
// Управление анимацией (исправленная версия)
function toggleCursorAnimation() {
    // Переключаем состояние (включить/выключить)
    cursorConfig.enabled = !cursorConfig.enabled;
    localStorage.setItem('cursor-animation', cursorConfig.enabled ? 'true' : 'false');
    
    const cursorAnimationBtn = document.querySelector('.cursor-animation-btn');
    const cursorNotification = document.getElementById('cursor-notification');
    
    // Включаем или выключаем анимацию
    if (cursorConfig.enabled) {
        // ВКЛЮЧАЕМ анимацию
        initCursorAnimation();
        document.body.classList.add('show-cursor-trail');
        
        // Обновляем кнопку
        if (cursorAnimationBtn) {
            cursorAnimationBtn.classList.add('active');
            cursorAnimationBtn.classList.remove('disabled');
            cursorAnimationBtn.title = 'Анимация курсора: ВКЛ (нажмите для выключения)';
        }
        
        // Показываем уведомление
        if (cursorNotification) {
            cursorNotification.textContent = 'Animation ON';
            cursorNotification.classList.add('show');
            setTimeout(() => {
                cursorNotification.classList.remove('show');
            }, 2000);
        }
    } else {
        // ВЫКЛЮЧАЕМ анимацию
        if (cursorAnimation.sketch) {
            cursorAnimation.sketch.remove();
            cursorAnimation.active = false;
        }
        document.body.classList.remove('show-cursor-trail');
        
        // Обновляем кнопку
        if (cursorAnimationBtn) {
            cursorAnimationBtn.classList.remove('active');
            cursorAnimationBtn.classList.add('disabled');
            cursorAnimationBtn.title = 'Анимация курсора: ВЫКЛ (нажмите для включения)';
        }
        
        // Показываем уведомление
        if (cursorNotification) {
            cursorNotification.textContent = 'Animation OFF';
            cursorNotification.classList.add('show');
            setTimeout(() => {
                cursorNotification.classList.remove('show');
            }, 2000);
        }
    }
    
    console.log('Анимация курсора:', cursorConfig.enabled ? 'ВКЛЮЧЕНА' : 'ВЫКЛЮЧЕНА');
}
// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем настройки
    const savedAnimation = localStorage.getItem('cursor-animation');
    if (savedAnimation === null || savedAnimation === 'true') {
        // Ждем загрузки p5.js
        const checkP5 = setInterval(() => {
            if (typeof p5 !== 'undefined') {
                clearInterval(checkP5);
                initCursorAnimation();
            }
        }, 100);
    }
    
    // Обновляем анимацию при смене темы
    const originalSwitchTheme = window.switchTheme;
    window.switchTheme = function(themeName) {
        originalSwitchTheme(themeName);
        
        // Перезапускаем анимацию с новыми цветами
        if (cursorAnimation.active) {
            setTimeout(() => {
                initCursorAnimation();
            }, 100);
        }
    };
    
    // Добавляем кнопку управления анимацией (опционально)
    addAnimationControl();
});

// Функция для добавления кнопки управления анимацией в левое меню
// Функция для добавления кнопки управления анимацией в левое меню (исправленная)
function addAnimationControl() {
    // Находим контейнер с кнопкой анимации
    const cursorAnimationBtn = document.querySelector('.cursor-animation-btn');
    const cursorNotification = document.getElementById('cursor-notification');
    
    if (!cursorAnimationBtn || !cursorNotification) {
        console.error('Не найдены элементы управления анимацией');
        return;
    }
    
    // Проверяем начальное состояние из localStorage
    const savedAnimation = localStorage.getItem('cursor-animation');
    const isEnabled = savedAnimation === null || savedAnimation === 'true';
    
    // Устанавливаем начальное состояние
    cursorConfig.enabled = isEnabled;
    
    // Обновляем внешний вид кнопки
    if (isEnabled) {
        cursorAnimationBtn.classList.add('active');
        cursorAnimationBtn.classList.remove('disabled');
        cursorAnimationBtn.title = 'Анимация курсора: ВКЛ (нажмите для выключения)';
    } else {
        cursorAnimationBtn.classList.remove('active');
        cursorAnimationBtn.classList.add('disabled');
        cursorAnimationBtn.title = 'Анимация курсора: ВЫКЛ (нажмите для включения)';
    }
    
    // Обработчик клика по кнопке
    cursorAnimationBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        console.log('Клик по кнопке анимации, текущее состояние:', cursorConfig.enabled);
        
        // Переключаем анимацию
        toggleCursorAnimation();
        
        // Анимация нажатия кнопки
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Удаляем старую кнопку из правого нижнего угла (если она есть)
    const oldControl = document.getElementById('cursor-animation-control');
    if (oldControl) {
        oldControl.remove();
        console.log('Старая кнопка удалена');
    }
    
    console.log('Управление анимацией инициализировано');
}
    
    // Показываем уведомление
    function showNotification(message, duration = 2000) {
        cursorNotification.textContent = message;
        cursorNotification.classList.add('show');
        
        setTimeout(() => {
            cursorNotification.classList.remove('show');
        }, duration);
    }
    
    // Обработчик клика по кнопке
    cursorAnimationBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const isEnabled = cursorConfig.enabled;
        const newState = !isEnabled;
        
        // Переключаем анимацию
        toggleCursorAnimation(newState);
        
        // Показываем уведомление
        const message = newState ? 'Animation ON' : 'Animation OFF';
        showNotification(message);
        
        // Обновляем внешний вид кнопки
        updateButtonAppearance(newState);
        
        // Анимация нажатия
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Инициализируем начальное состояние
    const savedAnimation = localStorage.getItem('cursor-animation');
    const initialEnabled = savedAnimation === null || savedAnimation === 'true';
    updateButtonAppearance(initialEnabled);
    
    // Удаляем старую кнопку из правого нижнего угла (если она есть)
    const oldControl = document.getElementById('cursor-animation-control');
    if (oldControl) {
        oldControl.remove();
    }


// В инициализации уберите вызов addAnimationControl() из DOMContentLoaded
// и добавьте его после инициализации анимации
// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем настройки
    const savedAnimation = localStorage.getItem('cursor-animation');
    const isEnabled = savedAnimation === null || savedAnimation === 'true';
    
    // Устанавливаем начальное состояние
    cursorConfig.enabled = isEnabled;
    
    console.log('Начальное состояние анимации:', isEnabled ? 'ВКЛ' : 'ВЫКЛ');
    
    if (isEnabled) {
        // Ждем загрузки p5.js
        const checkP5 = setInterval(() => {
            if (typeof p5 !== 'undefined') {
                clearInterval(checkP5);
                initCursorAnimation();
                document.body.classList.add('show-cursor-trail');
                console.log('Анимация инициализирована');
            }
        }, 100);
    }
    
    // Добавляем кнопку управления анимацией
    setTimeout(() => {
        addAnimationControl();
    }, 500); // Даем время на загрузку DOM
    
    // Обновляем анимацию при смене темы
    const originalSwitchTheme = window.switchTheme;
    window.switchTheme = function(themeName) {
        originalSwitchTheme(themeName);
        
        // Перезапускаем анимацию с новыми цветами
        if (cursorAnimation.active) {
            setTimeout(() => {
                initCursorAnimation();
            }, 100);
        }
    };
    
    // Добавляем отладочный режим по Ctrl+Shift+A
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            console.log('=== ОТЛАДКА АНИМАЦИИ КУРСОРА ===');
            console.log('Текущее состояние:', cursorConfig.enabled);
            console.log('Активна ли анимация:', cursorAnimation.active);
            console.log('Наличие sketch:', !!cursorAnimation.sketch);
            console.log('Кнопка найдена:', !!document.querySelector('.cursor-animation-btn'));
            console.log('Уведомление найдено:', !!document.getElementById('cursor-notification'));
            console.log('Класс body:', document.body.classList.contains('show-cursor-trail'));
        }
    });
});