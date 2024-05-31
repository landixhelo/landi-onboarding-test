/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.nav.prev');
    const nextButton = document.querySelector('.nav.next');
    const autoplayCheckbox = document.getElementById('autoplay');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoplay() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoplay() {
        clearInterval(slideInterval);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    autoplayCheckbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            startAutoplay();
        } else {
            stopAutoplay();
        }
    });

    // Initialize the slider
    showSlide(currentSlide);
});
