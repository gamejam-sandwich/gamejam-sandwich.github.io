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


const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filterValue = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(otherBtn => {
            otherBtn.classList.remove('active');
        });
        btn.classList.add('active');
        document.querySelectorAll('.work-card').forEach(card => {
            if (card.dataset.medium === filterValue || filterValue === 'all') {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            };
        });
    });
});