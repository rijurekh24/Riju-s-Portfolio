//preloader animation
$(window).on("load", function () {
  setTimeout(function () {
    $(".preloader").addClass("preloader-deactivate");
  }, 2600);

  setTimeout(function () {
    $(".slide").addClass("slide-deactivate");
  }, 2950);
});

//entry preloader text
const entry = document.querySelector(".entry");
const entrytextLoad = () => {
  setTimeout(() => {
    entry.textContent = "Eat";
  }, 0);
  setTimeout(() => {
    entry.textContent = "Sleep";
  }, 800);
  setTimeout(() => {
    entry.textContent = "</Code>";
  }, 1800);

  setTimeout(() => {
    entry.textContent = "Repeat";
  }, 2700);
};
entrytextLoad();

//hamburger sign
let btn = document.querySelector(".navbar-toggler");
let icon = btn.querySelector(".fa-bars");

btn.onclick = function () {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
};

//navbar color
var navbar = document.getElementById("navbar");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//multiple text
const text = document.querySelector(".multiple-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "UI/UX Designer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Photographer";
  }, 1500);
  setTimeout(() => {
    text.textContent = "Full-stack Web Developer";
  }, 3100);
};
textLoad();
setInterval(textLoad, 4600);

//skill animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hp");
    } else {
      entry.target.classList.add("hp");
    }
  });
});

const progressBars = document.querySelectorAll(".progress-bar");
progressBars.forEach((el) => observer.observe(el));

//scroll animation
ScrollReveal({
  reset: true,
  distance: "95px",
  duration: 1500,
  delay: 250,
  viewFactor: 0.15,
});

ScrollReveal().reveal(
  ".project-title,.service-title,.description-about,.skills-title,.contact-title,.gallery-title,.education-title,hr,.hire-title",
  { origin: "top" }
);
ScrollReveal().reveal(
  ".img-about,.h6-head,.description-hire-button,.email,.gallery-img",
  { origin: "right" }
);
ScrollReveal().reveal(".srvc,.text,.edc", { origin: "bottom" });
ScrollReveal().reveal(".h1-head,.hire-description,.name,.gallery-about", {
  origin: "left",
});

ScrollReveal().reveal(".header-img", { scale: 1.7 });
ScrollReveal().reveal(".prjct", { scale: 0.5, duration: 1500, interval: 200 });
ScrollReveal().reveal(".srvc", { interval: 150 });

ScrollReveal().reveal(".hire-description", { delay: 400 });
ScrollReveal().reveal(".fa-brands", {
  origin: "bottom",
  delay: 500,
  interval: 150,
  distance: "35px",
});
ScrollReveal().reveal(".h1-head,.h6-head,.header-img", {
  delay: 3050,
  reset: true,
  useDelay: "onload",
});

//mode  light dark
var navbar = document.querySelector("#navbar");
var about = document.querySelector("#about");
var skills = document.querySelector("#skills");
var hire = document.querySelector("#hire");
var gallery = document.querySelector("#gallery");
var footer = document.querySelector("#FOOTER");
var education = document.querySelector("#education");
var services = document.querySelector("#services");
var projects = document.querySelector("#projects");
var contact = document.querySelector("#contact");
var theme = document.querySelector(".theme");
var icn = theme.querySelector(".fa-moon");
const audio = new Audio();

function changeTheme() {
  navbar.classList.toggle("dark");
  about.classList.toggle("dark");
  skills.classList.toggle("dark");
  hire.classList.toggle("dark");
  gallery.classList.toggle("dark");
  footer.classList.toggle("dark");
  education.classList.toggle("dark2");
  services.classList.toggle("dark2");
  projects.classList.toggle("dark2");
  contact.classList.toggle("dark2");

  audio.src = "click.wav ";

  if (icn.classList.contains("fa-moon")) {
    icn.classList.replace("fa-moon", "fa-sun");
  } else {
    icn.classList.replace("fa-sun", "fa-moon");
  }
}
