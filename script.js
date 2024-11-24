const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-section',
        pin: true,
        start: '50% 50%',
        end: '300% 50%',
        scrub: true,
        // markers: true,
    }
});

tl.to("#uiux", {
    opacity: 1,
    filter: "blur(0px)"
})
    .to("#sql", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#java", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#html", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#digital", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#webflow", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#figma", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#javascript", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#mysql", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#css", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })



// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Scroll to target section
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  
  // Animation for About section
  const aboutSection = document.querySelector('.about-section');
  
  function handleScroll() {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.3;
  
    // Trigger animation when section comes into view
    if (sectionPosition < screenHeight && sectionPosition > 0) {
      aboutSection.classList.add('active');
    } else {
      aboutSection.classList.remove('active');
    }
  }
  
  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);
  
