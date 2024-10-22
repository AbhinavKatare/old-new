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
