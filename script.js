document.addEventListener('DOMContentLoaded', () => {
    // Hide Preloader
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1500); // Give it a little time for the animation
    });

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.8)');
        document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');

        // Adding hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .poem-card, .chatbot-container');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                if (el.classList.contains('chatbot-container')) {
                    cursor.style.opacity = '0';
                    document.body.style.cursor = 'auto';
                }
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                if (el.classList.contains('chatbot-container')) {
                    cursor.style.opacity = '1';
                    document.body.style.cursor = 'none';
                }
            });
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }

    // Scroll Animations (Simple Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Header Background Change on Scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form Submission (Simulated)
    const form = document.getElementById('poetry-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            if (email) {
                const btn = form.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = 'Subscribed ✨';
                btn.disabled = true;
                btn.style.background = '#fff';
                btn.style.color = '#000';
                form.querySelector('input').value = '';

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.background = 'var(--accent)';
                    btn.style.color = '#000';
                }, 3000);
            }
        });
    }
});
