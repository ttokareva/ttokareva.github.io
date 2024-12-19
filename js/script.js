document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-links');
    const toggleBtn = document.querySelector('.toggle-nav');

    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});