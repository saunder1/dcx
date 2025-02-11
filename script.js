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

document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.mobile').classList.toggle('active');
});

document.querySelector('.close-menu').addEventListener('click', () => {
    document.querySelector('.mobile').classList.remove('active');
});