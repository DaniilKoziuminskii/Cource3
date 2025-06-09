function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Filter feature for the “Projects” section
document.addEventListener('DOMContentLoaded', function() {
    // ...existing hamburger code...

    // Filter logic
    const filterInput = document.getElementById('project-filter');
    if (filterInput) {
        filterInput.addEventListener('input', function() {
            const filterValue = filterInput.value.toLowerCase();
            const projects = document.querySelectorAll('#projects article');
            projects.forEach(project => {
                const text = project.textContent.toLowerCase();
                project.style.display = text.includes(filterValue) ? '' : 'none';
            });
        });
    }
});

// Contact form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const errorDiv = document.getElementById('formError');
    if (form) {
        form.addEventListener('submit', function(e) {
            let errors = [];
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            // Name validation
            if (name.length < 2) {
                errors.push("Please enter your name (at least 2 characters).");
            }

            // Email validation (simple regex)
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errors.push("Please enter a valid email address.");
            }

            // Message validation
            if (message.length < 10) {
                errors.push("Message should be at least 10 characters.");
            }

            if (errors.length > 0) {
                e.preventDefault();
                errorDiv.textContent = errors.join(' ');
            } else {
                errorDiv.textContent = '';
            }
        });
    }
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.hidden = true);
    const section = document.getElementById(sectionId);
    if (section) section.hidden = false;
}
