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
            this.style.backgroundColor = '#d1e3ff';
        });
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#E8F2FF';
        });
    });

    // Add animation to page content
    const content = document.querySelector('.content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        content.style.transition = 'opacity 1s ease, transform 1s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 300);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const headerContent = document.querySelector('.header-content');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        if (navList.classList.contains('active')) {
            headerContent.style.visibility = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            headerContent.style.visibility = 'visible';
            document.body.style.overflow = 'auto';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

