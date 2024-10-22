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

    // Add hover effect to lecture and podcast items
    const items = document.querySelectorAll('.lecture-item, .podcast-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e6e9ff';
        });
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f3f5ff';
        });
    });

    // Add click event to "Watch Now" buttons
    const watchButtons = document.querySelectorAll('.watch-btn');
    watchButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Video player will be implemented here');
            // You can replace this with actual video player functionality
        });
    });
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
});
