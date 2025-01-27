gsap.registerPlugin(ScrollTrigger);

gsap.to("#dcx", {
    scrollTrigger: {
        trigger: '.banner',
        start: 'top 20%',
        end: "top -10%",    // Stop animation
    scrub: true,
    pin: true,          // Pin #dcx in place
    pinSpacing: false,  // Remove extra spacing below once pinned
    markers: true  
    },
    scale: 0.1,
    ease: 'none'
});