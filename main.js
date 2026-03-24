import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Profile data is now fully static in index.html, no need to fetch!
    
    // Setup static contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Since there is no backend, we just simulate a successful send
            alert('Message simulated as sent! (Backend has been removed)');
            contactForm.reset();
        });
    }
});
