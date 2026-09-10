/*
*  navigates through each section of the portfolio by
*  adding/removing the active & visible classes
*  when one of the sections is clicked.
*/
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

/*
*  filters the work samples when one of the corresponding
*  buttons is clicked. Similar technique as used above.
*/
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

/*
*   hopefully a temporary popup to tell users I'm being a bum
*/
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
document.addEventListener('DOMContentLoaded', () => {
    popup.style.display = 'block;'
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});