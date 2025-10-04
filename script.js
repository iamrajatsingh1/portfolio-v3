// Tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const jobPanels = document.querySelectorAll('.job-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.target;
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        jobPanels.forEach(panel => panel.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// Smooth scroll offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect with hide/show
const header = document.querySelector('header');
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class when scrolled past 50px
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                header.classList.add('hidden');
            } else {
                // Scrolling up
                header.classList.remove('hidden');
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        });
        
        ticking = true;
    }
});