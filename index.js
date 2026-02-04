document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Contact Form Logic
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Change button text to indicate success
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Message Sent!';
            btn.style.backgroundColor = '#27ae60';
            
            setTimeout(() => {
                alert('Thank you! We have received your message.');
                contactForm.reset();
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
            }, 500);
        });
    }

    // Donate Button Logic (Simulated)
    const donateBtns = document.querySelectorAll('.donate-btn');
    donateBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const amount = prompt("Thank you for your generosity! How much would you like to donate today? (e.g., 50)");
            if(amount) {
                alert(`Thank you! You have pledged $${amount} to our cause. (This is a demo)`);
            }
        });
    });
});