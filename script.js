document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');

    hamburgerMenu.addEventListener('click', function() {
        menu.classList.add('active');
    });

    closeMenu.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});
