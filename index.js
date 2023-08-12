
//navbar color
var navbar = document.getElementById('navbar');

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


//multiple text
const text = document.querySelector(".multiple-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-end Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "UI/UX Designer";
    }, 1500);
    setTimeout(() => {
        text.textContent = "Photographer";
    }, 3000);
}
textLoad();
setInterval(textLoad, 4500);


//skill animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            var percentVal = 0;
            var finalVal = parseInt(entry.target.getAttribute('aria-valuenow'));
            console.log(percentVal);

            setInterval(function () {
                if (percentVal < finalVal) {
                    percentVal += 0.7;
                    entry.target.style.width = percentVal + '%';
                    entry.target.setAttribute('aria-valuenow', percentVal);
                }
            }, 0.5);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 1
});

const targets = document.querySelectorAll('.progress-bar');
targets.forEach(target => observer.observe(target));


//scroll animation
ScrollReveal({
    reset: true,
    distance: '90px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.header-img,.project-title,.service-title,.description-about,.skills-title,.contact-title', { origin: 'top' });
ScrollReveal().reveal('.img-about,.h6-head,.description-hire-button,.email', { origin: 'right' });
ScrollReveal().reveal('.prjct,.srvc,.text', { origin: 'bottom' });
ScrollReveal().reveal('.h1-head,.description-hire,.name', { origin: 'left' });
