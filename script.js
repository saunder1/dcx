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

// document.querySelector('.burger-menu').addEventListener('click', () => {
//     document.querySelector('.mobile').classList.toggle('active');
// });

// document.querySelector('.close-menu').addEventListener('click', () => {
//     document.querySelector('.mobile').classList.remove('active');
// });


document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile');
    const closeMenu = document.querySelector('.close-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const root = document.documentElement; // Get the root element (for CSS variables)

    // Function to open the mobile menu
    const openMobileMenu = () => {
        // Add classes to activate overlay and slide menu
        body.classList.add('mobile-nav-active');
        mobileNav.classList.add('active');

        // Get the computed width of the menu *after* it becomes active
        // Use setTimeout to allow the browser to render/calculate the width
        setTimeout(() => {
            const menuWidth = window.getComputedStyle(mobileNav).width;
            // Update the CSS variable used by the overlay
            root.style.setProperty('--mobile-menu-actual-width', menuWidth);
        }, 0); // Timeout 0 pushes execution to the end of the event loop
    };

    // Function to close the mobile menu
    const closeMobileMenu = () => {
        body.classList.remove('mobile-nav-active');
        mobileNav.classList.remove('active');
        // No need to reset the variable, overlay width goes back to 0 via CSS
    };

    // Event listener for the burger menu button
    if (burgerMenu) {
        burgerMenu.addEventListener('click', openMobileMenu);
    }

    // Event listener for the close menu button
    if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
    }

    // Event listener for the overlay
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }

    // Optional: Close menu if a link inside it is clicked
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    if (mobileNavLinks.length > 0) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
});