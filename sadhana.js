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

    // Add hover effect to sadhana links
    const sadhanaLinks = document.querySelectorAll('.sadhana-link');
    sadhanaLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f3f5ff';
        });
        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#ffffff';
        });
    });

    // Add click event to "Learn More" buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Learn more about our Sadhana practices');
            // You can replace this with actual functionality to show more information
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

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});

