// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// Close menu when clicking a nav link (mobile UX)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
    });
});

// Highlight active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');

const activeSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetId = `#${entry.target.id}`;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === targetId);
            });
        }
    });
}, {
    rootMargin: '-40% 0px -40% 0px'
});

sections.forEach(section => activeSectionObserver.observe(section));

// Intersection Observer for fade-up animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-up').forEach(section => observer.observe(section));

// Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
