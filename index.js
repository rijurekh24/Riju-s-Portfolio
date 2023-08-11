
var navbar=document.getElementById('navbar');

document.addEventListener("scroll", ()=>{
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
} );



    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                var percentVal = 0;
                var finalVal = parseInt(entry.target.getAttribute('aria-valuenow'));
                console.log(percentVal);

                setInterval(function () {
                    if (percentVal < finalVal) {
                        percentVal += 1;
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


    // animate1

    function reveal() {
        var reveals = document.querySelectorAll(".animate");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 100;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);

      //animate2

      function reveal2() {
        var reveals = document.querySelectorAll(".animate2");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 100;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal2);

      //animate3
      function reveal3() {
        var reveals = document.querySelectorAll(".animate3");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 100;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal3);

