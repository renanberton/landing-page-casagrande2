// VERSÃO SIMPLIFICADA - script.js
document.addEventListener('DOMContentLoaded', function() {
    
    // SISTEMA DE NOTIFICAÇÕES SIMPLIFICADO
    const notifications = [
        'notification-1',
        'notification-2', 
        'notification-3',
        'notification-4',
        'notification-5',
        'notification-6'
    ];
    
    let currentNotificationIndex = 0;
    let notificationInterval;

    // Função para mostrar notificação
    function showNotification(notificationId) {
        const notification = document.getElementById(notificationId);
        if (!notification) return;

        // Esconde todas as notificações
        document.querySelectorAll('.notification').forEach(notif => {
            notif.classList.remove('show');
            notif.classList.add('hide');
        });

        // Mostra a notificação atual
        setTimeout(() => {
            notification.classList.remove('hide');
            notification.classList.add('show');

            // Fecha automaticamente após 6 segundos
            setTimeout(() => {
                hideNotification(notification);
            }, 3000);
        }, 300);
    }

    // Função para esconder notificação
    function hideNotification(notification) {
        notification.classList.remove('show');
        notification.classList.add('hide');
    }

    // Inicia o ciclo de notificações
    function startNotifications() {
        // Primeira notificação após 8 segundos
        setTimeout(() => {
            showNotification(notifications[0]);
            currentNotificationIndex = 1;
        }, 8000);

        // Próximas notificações a cada 20 segundos
        notificationInterval = setInterval(() => {
            if (currentNotificationIndex >= notifications.length) {
                currentNotificationIndex = 0;
            }
            showNotification(notifications[currentNotificationIndex]);
            currentNotificationIndex++;
        }, 20000);
    }

    // Event listeners para fechar notificações
    document.querySelectorAll('.notification-close').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const notification = e.target.closest('.notification');
            hideNotification(notification);
        });
    });

    // CONTADOR REGRESSIVO
    function startCountdown() {
        const hoursElement = document.getElementById('horas');
        const minutesElement = document.getElementById('minutos');
        const secondsElement = document.getElementById('segundos');

        if (!hoursElement || !minutesElement || !secondsElement) return;

        let hours = 12;
        let minutes = 45;
        let seconds = 30;

        setInterval(() => {
            seconds--;
            
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                    if (hours < 0) {
                        hours = 12;
                        minutes = 45;
                        seconds = 30;
                    }
                }
            }

            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
        }, 1000);
    }

    // Inicializa tudo
    startNotifications();
    startCountdown();

    // Smooth scroll para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});