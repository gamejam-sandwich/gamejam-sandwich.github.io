const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetValue = link.dataset.target;
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('visible');
        });
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        link.classList.add('active');
        const visibleSection = document.getElementById(targetValue);
        visibleSection.classList.add('visible');
    });
});
