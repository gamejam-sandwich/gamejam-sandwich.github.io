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


const titles = document.querySelectorAll('.job-title');
document.querySelector('.job-field').addEventListener
('mousemove', (event) => {
    titles.forEach(title => {
        const rect = title.getBoundingClientRect();
        const titleX = rect.left + rect.width / 2;
        const titleY = rect.top + rect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const dx = mouseX - titleX;
        const dy = mouseY - titleY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if(distance < 80) {
            const pushX = -1 * dx;
            const pushY = -1 * dy;
            title.style.setProperty('--push-x', pushX + 'px');
            title.style.setProperty('--push-y', pushY + 'px');
        }
        else {
            title.style.setProperty('--push-x', '0px');
            title.style.setProperty('--push-y', '0px');
        }
    });
});



titles.forEach(title => {
    title.addEventListener('click', (event) => {
        const role = title.dataset.role;
        const org = title.dataset.org;
        const desc = title.dataset.desc;
        const url = title.dataset.img;
        
        document.querySelector('.card-role').textContent = role;
        document.querySelector('.card-org').textContent = org;
        document.querySelector('.card-desc').textContent = desc;
        document.querySelector('.card-img').src = url;
        

        document.querySelector('.job-field').classList.add('blurred');
        document.querySelector('.overlay').classList.add('visible');
        document.querySelector('.detail-card').classList.add('visible');
    });
});

close_btn = document.querySelector('.close-btn');
close_btn.addEventListener('click', (event) => {
    document.querySelector('.detail-card').classList.remove('visible');
    document.querySelector('.job-field').classList.remove('blurred');
    document.querySelector('.overlay').classList.remove('visible');
})