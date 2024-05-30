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