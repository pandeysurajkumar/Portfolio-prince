document.addEventListener('DOMContentLoaded', () => {
    // Keep existing contact form behavior without backend.
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message simulated as sent! (Backend has been removed)');
            contactForm.reset();
        });
    }
});
