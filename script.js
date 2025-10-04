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
