
document.addEventListener('DOMContentLoaded', function() {
    const categoryCardsContainer = document.querySelector('.category-cards');
    let isDown = false;
    let startX;
    let scrollLeft;

    function handleTouchStart(e) {
        isDown = true;
        startX = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
        scrollLeft = categoryCardsContainer.scrollLeft;
    }

    function handleTouchEnd() {
        isDown = false;
    }

    function handleTouchMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
        const walk = (x - startX) * 2;
        categoryCardsContainer.scrollLeft = scrollLeft - walk;
    }

    function enableSliding() {
        if (window.innerWidth <= 768) {
            categoryCardsContainer.style.overflowX = 'auto';
            categoryCardsContainer.style.display = 'flex';
            categoryCardsContainer.style.flexWrap = 'nowrap';
            categoryCardsContainer.style.scrollBehavior = 'smooth';

            categoryCardsContainer.addEventListener('mousedown', handleTouchStart);
            categoryCardsContainer.addEventListener('touchstart', handleTouchStart);

            categoryCardsContainer.addEventListener('mouseleave', handleTouchEnd);
            categoryCardsContainer.addEventListener('mouseup', handleTouchEnd);
            categoryCardsContainer.addEventListener('touchend', handleTouchEnd);

            categoryCardsContainer.addEventListener('mousemove', handleTouchMove);
            categoryCardsContainer.addEventListener('touchmove', handleTouchMove);
        } else {
            categoryCardsContainer.style.overflowX = '';
            categoryCardsContainer.style.display = '';
            categoryCardsContainer.style.flexWrap = '';
            categoryCardsContainer.style.scrollBehavior = '';

            categoryCardsContainer.removeEventListener('mousedown', handleTouchStart);
            categoryCardsContainer.removeEventListener('touchstart', handleTouchStart);

            categoryCardsContainer.removeEventListener('mouseleave', handleTouchEnd);
            categoryCardsContainer.removeEventListener('mouseup', handleTouchEnd);
            categoryCardsContainer.removeEventListener('touchend', handleTouchEnd);

            categoryCardsContainer.removeEventListener('mousemove', handleTouchMove);
            categoryCardsContainer.removeEventListener('touchmove', handleTouchMove);
        }
    }

    enableSliding();
    window.addEventListener('resize', enableSliding);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-item a');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });

    // Horizontal scroll for course cards on mobile
    const courseLists = document.querySelectorAll('.course-list');
    
    courseLists.forEach(courseList => {
        let isDown = false;
        let startX;
        let scrollLeft;

        courseList.addEventListener('mousedown', (e) => {
            isDown = true;
            courseList.classList.add('active');
            startX = e.pageX - courseList.offsetLeft;
            scrollLeft = courseList.scrollLeft;
        });

        courseList.addEventListener('mouseleave', () => {
            isDown = false;
            courseList.classList.remove('active');
        });

        courseList.addEventListener('mouseup', () => {
            isDown = false;
            courseList.classList.remove('active');
        });

        courseList.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - courseList.offsetLeft;
            const walk = (x - startX) * 3; // Adjust scrolling speed
            courseList.scrollLeft = scrollLeft - walk;
        });
    });
});