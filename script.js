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
