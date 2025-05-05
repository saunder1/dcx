gsap.registerPlugin(ScrollTrigger);

gsap.to('.banner *', {
    scrollTrigger: {
        trigger: '.banner',
        start: 'top top',
        end: 'bottom 25%',
        scrub: true
    },
    opacity: 0
});

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile');
    const closeButton = document.querySelector('.close-menu');
    const body = document.body;
    const header = document.querySelector('header');

    // Header scroll effect
    const toggleHeaderClass = () => {
        if (window.scrollY > 10 && window.innerWidth > 945) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Initial check in case page is loaded scrolled down
    toggleHeaderClass();
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleHeaderClass);
    
    // Add resize event listener to handle window resizing
    window.addEventListener('resize', toggleHeaderClass);

    const openMobileMenu = () => {
        mobileNav.classList.add('active');
        body.classList.add('mobile-nav-active');
    };

    const closeMobileMenu = () => {
        mobileNav.classList.remove('active');
        body.classList.remove('mobile-nav-active');
    };

    // Event listener for the burger menu button
    if (burgerMenu) {
        burgerMenu.addEventListener('click', openMobileMenu);
    }

    // Event listener for the close menu button
    if (closeButton) {
        closeButton.addEventListener('click', closeMobileMenu);
    }

    if (mobileNav) {
        document.addEventListener('click', (event) => {
            if (mobileNav.classList.contains('active') && !mobileNav.contains(event.target) && !burgerMenu.contains(event.target)) {
                closeMobileMenu();
            }
        });
    }

    // Optional: Close menu if a link inside it is clicked
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    if (mobileNavLinks.length > 0) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
});