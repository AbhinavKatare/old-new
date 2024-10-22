document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e6e9ff';
        });
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f3f5ff';
        });
    });

    // Add animation to hero text
    const heroText = document.querySelector('.hero-text');
    heroText.style.opacity = '0';
    heroText.style.transform = 'translate(-50%, -30%)';
    
    setTimeout(() => {
        heroText.style.transition = 'opacity 1s ease, transform 1s ease';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translate(-50%, -50%)';
    }, 300);

    // Add click event to "Learn More" buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Learn more about our meditation programs');
            // You can replace this with actual functionality to show more information
        });
    });

    // Add expanding effect to about section (if present)
    const aboutBox = document.querySelector('.about-box');
    if (aboutBox) {
        window.addEventListener('scroll', () => {
            if (isElementInViewport(aboutBox)) {
                aboutBox.classList.add('expanded');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});
