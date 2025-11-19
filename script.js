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

// FAQ Accordion - Versão Simplificada
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;
            
            // Fecha todos os outros
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
            
            // Alterna o atual
            accordionItem.classList.toggle('active');
            
            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
});