document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        // Ajustar la posición del scroll
        window.scrollTo({
            top: target.offsetTop + 100, // Espacio extra
            behavior: 'smooth',
        });
    });
});
