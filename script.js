// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

 // Update button text based on mode
 if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀ Light Mode';
 } else {
    darkModeToggle.textContent = '🌙 Dark Mode';
 }

 // Save preference to localStorage
 localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀ Light Mode';
    }
});

// Scroll to top button
const ScrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    //show button when scrolled down 200px
    if (window.scrollY > 200) {
        ScrollToTopBtn.style.display = 'block';
    } else {
        ScrollToTopBtn.style.display = 'none';
    }
});

ScrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});