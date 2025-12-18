// contacts.js - Функционал для контактов
document.addEventListener('DOMContentLoaded', function() {
    // Создаем уведомление о копировании
    function createCopyNotification() {
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.id = 'copy-notification';
        notification.innerHTML = '✅ Скопировано в буфер обмена!';
        document.body.appendChild(notification);
        return notification;
    }
    
    // Показываем уведомление
    function showCopyNotification(message, isError = false) {
        let notification = document.getElementById('copy-notification');
        if (!notification) {
            notification = createCopyNotification();
        }
        
        notification.textContent = message;
        notification.classList.remove('error');
        
        if (isError) {
            notification.classList.add('error');
        }
        
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Функция копирования в буфер обмена
    async function copyToClipboard(text) {
        try {
            // Используем современный Clipboard API
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            // Fallback для старых браузеров
            try {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                
                return successful;
            } catch (fallbackErr) {
                console.error('Не удалось скопировать текст:', fallbackErr);
                return false;
            }
        }
    }
    
    // Обработчик клика по ссылке контакта
    function setupContactLinks() {
        document.querySelectorAll('.contact-link').forEach(link => {
            link.addEventListener('click', async function(e) {
                e.preventDefault();
                
                const textToCopy = this.getAttribute('data-copy');
                if (!textToCopy) return;
                
                // Показываем состояние загрузки
                const copyIcon = this.querySelector('.copy-icon');
                const originalIcon = copyIcon.textContent;
                copyIcon.textContent = '⏳';
                copyIcon.classList.add('loading');
                
                // Копируем текст
                const success = await copyToClipboard(textToCopy);
                
                // Восстанавливаем иконку
                copyIcon.textContent = '✅';
                copyIcon.classList.remove('loading');
                copyIcon.classList.add('copied');
                
                // Показываем уведомление
                if (success) {
                    showCopyNotification(`Скопировано: ${textToCopy}`);
                    this.classList.add('copied');
                    
                    // Сбрасываем состояние через 2 секунды
                    setTimeout(() => {
                        copyIcon.textContent = originalIcon;
                        copyIcon.classList.remove('copied');
                        this.classList.remove('copied');
                    }, 2000);
                } else {
                    showCopyNotification('Не удалось скопировать. Попробуйте еще раз.', true);
                    copyIcon.textContent = originalIcon;
                    copyIcon.classList.remove('loading');
                }
                
                // Для Telegram открываем ссылку в новой вкладке
                if (this.hasAttribute('href') && !this.classList.contains('discord-link')) {
                    setTimeout(() => {
                        if (!this.getAttribute('href').startsWith('mailto:')) {
                            window.open(this.getAttribute('href'), '_blank');
                        }
                    }, 500);
                }
            });
        });
    }
    
    // Инициализация
    function initContacts() {
        setupContactLinks();
        
        // Добавляем CSS для загрузки иконки
        const style = document.createElement('style');
        style.textContent = `
            .copy-icon.loading {
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        console.log('Контакты инициализированы');
    }
    
    // Запускаем инициализацию
    initContacts();
});

// УДАЛЕНА ВСЯ ФУНКЦИЯ checkIcons() и ее вызов
// Иконки теперь будут отображаться без проверок