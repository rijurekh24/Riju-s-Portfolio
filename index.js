//preloader animation
$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass('preloader-deactivate');
    }, 2500);

    setTimeout(function () {
        $('.slide').addClass('slide-deactivate');
    }, 2900);
});

//entry preloader text
const entry = document.querySelector(".entry");
const entrytextLoad = () => {
    setTimeout(() => {
        entry.textContent = "Eat";
    }, 0);
    setTimeout(() => {
        entry.textContent = "Sleep";
    }, 900);
    setTimeout(() => {
        entry.textContent = "</Code>";
    }, 1800);

    setTimeout(() => {
        entry.textContent = "Repeat";
    }, 2700);

}
entrytextLoad();
// setInterval(entrytextLoad, 4500);

//hamburger sign

let btn = document.querySelector('.navbar-toggler');
let icon = btn.querySelector('.fa-bars');

btn.onclick = function () {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    }
    else {
        icon.classList.replace("fa-xmark", "fa-bars");
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
            // console.log(percentVal);

            setInterval(function () {
                if (percentVal < finalVal) {
                    percentVal += 0.5;
                    entry.target.style.width = percentVal + '%';
                    entry.target.setAttribute('aria-valuenow', percentVal);
                }
            }, 0.1);
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


ScrollReveal().reveal('.project-title,.service-title,.description-about,.skills-title,.contact-title,.gallery-title,.education-title,hr,.hire-title', { origin: 'top' });
ScrollReveal().reveal('.img-about,.h6-head,.description-hire-button,.email,.gallery-img', { origin: 'right' });
ScrollReveal().reveal('.srvc,.text,.edc', { origin: 'bottom' });
ScrollReveal().reveal('.h1-head,.hire-description,.name,.gallery-about', { origin: 'left' });

ScrollReveal().reveal('.header-img', { scale: 1.7 });
ScrollReveal().reveal('.prjct', { scale: 0.5, duration: 1500, interval: 200 });
ScrollReveal().reveal('.srvc', { interval: 150 });

ScrollReveal().reveal('.hire-description', { delay: 300 });
ScrollReveal().reveal('.fa-brands', { origin: 'bottom', delay: 500, interval: 150, distance: '30px' });
ScrollReveal().reveal('.h1-head,.h6-head,.header-img', { delay: 2800, reset: false });


//mode  light dark
var navbar = document.querySelector('#navbar');
var about = document.querySelector('#about');
var skills = document.querySelector('#skills');
var hire = document.querySelector('#hire');
var gallery = document.querySelector('#gallery');
var footer = document.querySelector('#FOOTER');
var education = document.querySelector('#education');
var services = document.querySelector('#services');
var projects = document.querySelector('#projects');
var contact = document.querySelector('#contact');
var theme = document.querySelector('.theme');
var icn = theme.querySelector('.fa-moon');

function changeTheme() {
    navbar.classList.toggle('dark');
    about.classList.toggle('dark')
    skills.classList.toggle('dark')
    hire.classList.toggle('dark')
    gallery.classList.toggle('dark')
    footer.classList.toggle('dark')
    education.classList.toggle('dark2')
    services.classList.toggle('dark2')
    projects.classList.toggle('dark2')
    contact.classList.toggle('dark2')

    if (icn.classList.contains("fa-moon")) {
        icn.classList.replace("fa-moon", "fa-sun");
    }
    else {
        icn.classList.replace("fa-sun", "fa-moon");
    }
}

