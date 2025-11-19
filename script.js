// Contador de urgência
function startCountdown() {
    const hours = document.getElementById('horas');
    const minutes = document.getElementById('minutos');
    const seconds = document.getElementById('segundos');
    
    let totalSeconds = 12 * 3600 + 45 * 60 + 30;
    
    setInterval(() => {
        totalSeconds--;
        
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        
        hours.textContent = hrs.toString().padStart(2, '0');
        minutes.textContent = mins.toString().padStart(2, '0');
        seconds.textContent = secs.toString().padStart(2, '0');
        
        if (totalSeconds <= 0) {
            totalSeconds = 12 * 3600 + 45 * 60 + 30;
        }
    }, 1000);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Inicia quando a página carregar
document.addEventListener('DOMContentLoaded', startCountdown);