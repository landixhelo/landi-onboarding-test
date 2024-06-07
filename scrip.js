
// accordions
document.addEventListener('DOMContentLoaded', function() {
    const multipleCheckbox = document.getElementById('multiple');
    const accordionItems = document.querySelectorAll('.accordion-item');
    const firstItemContent = accordionItems[0].querySelector('.accordion-content');
    const firstItemTitle = accordionItems[0].querySelector('.accordion-title');

    // Open the first accordion item by default
    firstItemContent.classList.add('show');
    firstItemTitle.classList.add('active');

    accordionItems.forEach(item => {
        const title = item.querySelector('.accordion-title');
        const content = item.querySelector('.accordion-content');

        title.addEventListener('click', () => {
            if (multipleCheckbox.checked) {
                content.classList.toggle('show');
                title.classList.toggle('active');
            } else {
                accordionItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('.accordion-content');
                    const otherTitle = otherItem.querySelector('.accordion-title');
                    if (otherItem !== item) {
                        otherContent.classList.remove('show');
                        otherTitle.classList.remove('active');
                    }
                });
                content.classList.toggle('show');
                title.classList.toggle('active');
            }
        });
    });

    // Handle switching modes when the checkbox state changes
    multipleCheckbox.addEventListener('change', () => {
        if (multipleCheckbox.checked) {
            // Expand all accordion items 
            accordionItems.forEach(item => {
                const content = item.querySelector('.accordion-content');
                const title = item.querySelector('.accordion-title');
                content.classList.add('show');
                title.classList.add('active');
            });
        } else {
            // Collapse all but the first accordion item when switching to single mode
            accordionItems.forEach((item, index) => {
                const content = item.querySelector('.accordion-content');
                const title = item.querySelector('.accordion-title');
                if (index !== 0) {
                    content.classList.remove('show');
                    title.classList.remove('active');
                }
            });
        }
    });
});