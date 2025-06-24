 // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile menu toggle (basic implementation)
        const mobileMenuButton = document.querySelector('.md\\:hidden button');
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', function() {
                alert('Mobile menu would open here. This is a basic implementation.');
            });
        }

        // Property search functionality (basic implementation)
        const searchButton = document.querySelector('button:contains("Search")');
        if (searchButton) {
            searchButton.addEventListener('click', function() {
                alert('Property search functionality would be implemented here.');
            });
        }

        // Contact form submission (basic implementation)
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
            });
        }

        // Newsletter subscription (basic implementation)
        const newsletterForm = document.querySelector('footer .flex');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for subscribing to our newsletter!');
            });
        }