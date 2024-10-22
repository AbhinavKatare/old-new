document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  // Hamburger menu toggle
  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          navbar.style.background = '#ffffff';
          navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      } else {
          navbar.style.background = '#ffffff';
          navbar.style.boxShadow = 'none';
      }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
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

  // Animation on scroll
  const animateOnScroll = function() {
      const elements = document.querySelectorAll('.feature-card, .program-card');
      elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (elementTop < windowHeight - 100) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
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
