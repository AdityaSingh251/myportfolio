/* =====================================
   MOBILE MENU
===================================== */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", function () {

    menuButton.classList.toggle("open");

    navMenu.classList.toggle("show");

});


/* Close menu after clicking link */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

        menuButton.classList.remove("open");

    });

});


/* =====================================
   DARK / LIGHT MODE
===================================== */

const themeButton =
    document.getElementById("themeButton");


const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀";

}


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (
        document.body.classList.contains("dark")
    ) {

        localStorage.setItem(
            "portfolioTheme",
            "dark"
        );

        themeButton.textContent = "☀";

    } else {

        localStorage.setItem(
            "portfolioTheme",
            "light"
        );

        themeButton.textContent = "☾";

    }

});


/* =====================================
   TYPING ANIMATION
===================================== */

const typingText =
    document.getElementById("typingText");


const words = [

    "digital experiences",

    "modern websites",

    "digital solutions",

    "business ideas",

    "technology products"

];


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function typeAnimation() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                letterIndex + 1
            );

        letterIndex++;


        if (
            letterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeAnimation,
                1600
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                letterIndex - 1
            );

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 45 : 80;


    setTimeout(
        typeAnimation,
        speed
    );

}


typeAnimation();


/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) {

                    return;

                }


                const counter =
                    entry.target;


                const target =
                    Number(
                        counter.dataset.target
                    );


                let current = 0;


                const increment =
                    Math.max(
                        1,
                        Math.ceil(target / 40)
                    );


                function updateCounter() {

                    current += increment;


                    if (current >= target) {

                        counter.textContent =
                            target + "+";

                        return;

                    }


                    counter.textContent =
                        current;


                    requestAnimationFrame(
                        updateCounter
                    );

                }


                updateCounter();


                observer.unobserve(counter);

            });

        },

        {
            threshold: 0.5
        }

    );


counters.forEach(function (counter) {

    counterObserver.observe(counter);

});


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener(
    "scroll",
    function () {

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(function (section) {

            const top =
                section.offsetTop;

            const height =
                section.offsetHeight;

            const id =
                section.getAttribute("id");


            if (
                scrollPosition >= top &&
                scrollPosition <
                top + height
            ) {

                navLinks.forEach(function (link) {

                    link.classList.remove(
                        "active"
                    );

                });


                const activeLink =
                    document.querySelector(
                        '.nav-link[href="#' +
                        id +
                        '"]'
                    );


                if (activeLink) {

                    activeLink.classList.add(
                        "active"
                    );

                }

            }

        });

    }
);


/* =====================================
   CURRENT YEAR
===================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================
   ESCAPE KEY
===================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            navMenu.classList.remove("show");

            menuButton.classList.remove("open");

        }

    }
);
/* =====================================
   SKILL BAR ANIMATION
===================================== */

const skillProgress =
    document.querySelectorAll(".skill-progress");


const skillObserver =
    new IntersectionObserver(

        function(entries, observer) {

            entries.forEach(function(entry) {

                if (!entry.isIntersecting) {
                    return;
                }


                const progress =
                    entry.target;


                const width =
                    progress.dataset.width;


                progress.style.width =
                    width + "%";


                observer.unobserve(progress);

            });

        },

        {
            threshold: 0.4
        }

    );


skillProgress.forEach(function(progress) {

    skillObserver.observe(progress);

});



/* =====================================
   PROJECT FILTER
===================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            filterButtons.forEach(
                function(btn) {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            const filter =
                button.dataset.filter;


            projectCards.forEach(
                function(card) {

                    const category =
                        card.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.classList.remove(
                            "hidden"
                        );

                    } else {

                        card.classList.add(
                            "hidden"
                        );

                    }

                }
            );

        }
    );

});



/* =====================================
   CONTACT FORM
===================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const subject =
                document.getElementById(
                    "subject"
                ).value.trim();


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                formMessage.textContent =
                    "Please fill in all fields.";

                return;

            }


            formMessage.textContent =
                "Thank you! Your message is ready to be connected to the email service.";


            contactForm.reset();

        }
    );

}
/* =====================================
   SCROLL PROGRESS
===================================== */

const scrollProgress =
    document.getElementById("scrollProgress");


window.addEventListener("scroll", function() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;


    const percentage =
        (scrollTop / documentHeight) * 100;


    scrollProgress.style.width =
        percentage + "%";

});



/* =====================================
   BACK TO TOP
===================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener(
    "click",
    function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================
   DARK / LIGHT THEME
===================================== */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    themeToggle.textContent = "☀";

}


themeToggle.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "dark-theme"
        );


        const isDark =
            document.body.classList.contains(
                "dark-theme"
            );


        if (isDark) {

            localStorage.setItem(
                "portfolioTheme",
                "dark"
            );

            themeToggle.textContent = "☀";

        } else {

            localStorage.setItem(
                "portfolioTheme",
                "light"
            );

            themeToggle.textContent = "☼";

        }

    }
);



/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
    document.querySelectorAll(
        "[data-count]"
    );


let countersStarted = false;


function startCounters() {

    if (countersStarted) {
        return;
    }


    countersStarted = true;


    counters.forEach(function(counter) {

        const target =
            Number(
                counter.dataset.count
            );


        let current = 0;


        const increment =
            Math.max(
                1,
                Math.ceil(target / 40)
            );


        const timer =
            setInterval(function() {

                current += increment;


                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }


                counter.textContent =
                    current;

            }, 35);

    });

}


const statsSection =
    document.querySelector(
        ".stats-section"
    );


if (statsSection) {

    const statsObserver =
        new IntersectionObserver(
            function(entries) {

                if (
                    entries[0].isIntersecting
                ) {

                    startCounters();

                    statsObserver.disconnect();

                }

            },
            {
                threshold: .4
            }
        );


    statsObserver.observe(
        statsSection
    );

}



/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, \
         .timeline-item, \
         .skill-card, \
         .technology-box, \
         .project-card, \
         .service-card, \
         .education-card, \
         .certificate-card, \
         .contact-item, \
         .contact-form"
    );


revealElements.forEach(
    function(element) {

        element.classList.add("reveal");

    }
);


const revealObserver =
    new IntersectionObserver(
        function(entries, observer) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    function(element) {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================
   CURRENT YEAR
===================================== */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}
