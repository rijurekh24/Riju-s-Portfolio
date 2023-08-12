
//hamburger sign

let btn=document.querySelector('.navbar-toggler');
let icon=btn.querySelector('.fa-bars');

btn.onclick=function()
{
    if(icon.classList.contains("fa-bars"))
    {
        icon.classList.replace("fa-bars","fa-xmark");
    }
    else{
        icon.classList.replace("fa-xmark","fa-bars");
    }
}


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
    duration: 1800,
    delay: 100
});

ScrollReveal().reveal('.header-img,.project-title,.service-title,.description-about,.skills-title,.contact-title,.gallery-title,.education-title,hr,.hire-title', { origin: 'top' });
ScrollReveal().reveal('.img-about,.h6-head,.description-hire-button,.email,.gallery-img', { origin: 'right' });
ScrollReveal().reveal('.prjct,.srvc,.text,.edc', { origin: 'bottom' });
ScrollReveal().reveal('.h1-head,.hire-description,.name,.gallery-about', { origin: 'left' });


ScrollReveal().reveal('.header-img', { scale: 0.4});
ScrollReveal().reveal('.img-about', { scale: 0.7});
