var typed = new Typed(".text", {
    strings: ["Frontend Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// Existing code in mail.js (do not remove)

// Add this at bottom:
const skillBoxes = document.querySelectorAll('.skill-box');

// observer for scroll-based animation
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 200); // delay each skill animation
    }
  });
}, { threshold: 0.3 });

skillBoxes.forEach(box => observer.observe(box));



const internshipBoxes = document.querySelectorAll('.internship-box');

const internshipObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });



internshipBoxes.forEach(box => internshipObserver.observe(box));

const projectBoxes = document.querySelectorAll('.project-box');

const projectObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

projectBoxes.forEach(box => projectObserver.observe(box));


const contactSection = document.querySelector('.contact');

const contactObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      contactSection.classList.add('show');
    }
  });
}, { threshold: 0.3 });

contactObserver.observe(contactSection);








