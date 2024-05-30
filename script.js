document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let formIsValid = true;
    const fields = ['name', 'email', 'phone', 'message'];
    
    fields.forEach(function(field) {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            input.classList.add('error');
            formIsValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (formIsValid) {
        document.getElementById('successMessage').style.display = 'block';
    }
});

document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.value.trim()) {
            input.classList.remove('error');
        }
    });
});

// accordion
document.addEventListener('DOMContentLoaded', function() {
    const multipleCheckbox = document.getElementById('multiple');
    const accordionItems = document.querySelectorAll('.accordion-item');
    const firstItemContent = accordionItems[0].querySelector('.accordion-content');
    const firstItemTitle = accordionItems[0].querySelector('.accordion-title');

   
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
});