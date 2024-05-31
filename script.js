// filter


document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const logos = document.querySelectorAll('.logo');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get the filter value
            const filter = button.getAttribute('data-filter');

            // Show/Hide logos based on filter
            logos.forEach(logo => {
                if (filter === 'all' || logo.classList.contains(filter)) {
                    logo.style.display = 'block';
                    setTimeout(() => logo.style.opacity = '1', 10);
                } else {
                    logo.style.opacity = '0';
                    setTimeout(() => logo.style.display = 'none', 1500);
                }
            });
        });
    });

    // Initially display all logos
    filterButtons[0].click();
});
