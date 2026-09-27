/* =====================================
   PORTFOLIO MAIN JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       DARK / LIGHT THEME
    ===================================== */

    const themeToggle =
        document.getElementById("themeToggle");


    function setTheme(theme) {

        if (theme === "dark") {

            document.body.classList.add(
                "dark-theme"
            );

            if (themeToggle) {

                themeToggle.textContent = "☀";

            }

        } else {

            document.body.classList.remove(
                "dark-theme"
            );

            if (themeToggle) {

                themeToggle.textContent = "☼";

            }
        }

        localStorage.setItem(
            "portfolioTheme",
            theme
        );
    }


    /* Load saved theme */

    const savedTheme =
        localStorage.getItem(
            "portfolioTheme"
        );


    if (savedTheme === "dark") {

        setTheme("dark");

    } else {

        setTheme("light");

    }


    /* Toggle theme */

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            function () {

                const darkMode =
                    document.body.classList.contains(
                        "dark-theme"
                    );


                if (darkMode) {

                    setTheme("light");

                } else {

                    setTheme("dark");

                }

            }
        );

    }



    /* =====================================
       MOBILE NAVIGATION
    ===================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (menuToggle && mainNav) {

        menuToggle.addEventListener(
            "click",
            function () {

                menuToggle.classList.toggle(
                    "open"
                );

                mainNav.classList.toggle(
                    "open"
                );

            }
        );


        const navLinks =
            document.querySelectorAll(
                ".nav-link"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        menuToggle.classList.remove(
                            "open"
                        );

                        mainNav.classList.remove(
                            "open"
                        );

                    }
                );

            }
        );

    }



    /* =====================================
       HEADER SCROLL
    ===================================== */

    const siteHeader =
        document.getElementById(
            "siteHeader"
        );


    window.addEventListener(
        "scroll",
        function () {

            if (!siteHeader) {
                return;
            }


            if (window.scrollY > 30) {

                siteHeader.classList.add(
                    "scrolled"
                );

            } else {

                siteHeader.classList.remove(
                    "scrolled"
                );

            }

        }
    );



    /* =====================================
       SCROLL PROGRESS
    ===================================== */

    const scrollProgress =
        document.getElementById(
            "scrollProgress"
        );


    window.addEventListener(
        "scroll",
        function () {

            if (!scrollProgress) {
                return;
            }


            const scrollTop =
                window.scrollY;


            const documentHeight =
                document.documentElement
                    .scrollHeight
                - window.innerHeight;


            if (documentHeight <= 0) {
                return;
            }


            const percentage =
                (
                    scrollTop /
                    documentHeight
                ) * 100;


            scrollProgress.style.width =
                percentage + "%";

        }
    );



    /* =====================================
       BACK TO TOP
    ===================================== */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 500
                ) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



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


        counters.forEach(
            function (counter) {

                const target =
                    Number(
                        counter.dataset.count
                    );


                let current = 0;


                const timer =
                    setInterval(
                        function () {

                            current++;


                            counter.textContent =
                                current;


                            if (
                                current >= target
                            ) {

                                clearInterval(
                                    timer
                                );

                            }

                        },
                        50
                    );

            }
        );

    }


    const statsSection =
        document.querySelector(
            ".stats-section"
        );


    if (statsSection) {

        const statsObserver =
            new IntersectionObserver(
                function (entries) {

                    if (
                        entries[0]
                            .isIntersecting
                    ) {

                        startCounters();

                        statsObserver.disconnect();

                    }

                },
                {
                    threshold: 0.3
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
        function (element) {

            element.classList.add(
                "reveal"
            );

        }
    );


    const revealObserver =
        new IntersectionObserver(
            function (
                entries,
                observer
            ) {

                entries.forEach(
                    function (entry) {

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
                threshold: 0.1
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );



    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    if (
        sections.length &&
        navLinks.length
    ) {

        const navigationObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                const id =
                                    entry.target.id;


                                navLinks.forEach(
                                    function (link) {

                                        link.classList.remove(
                                            "active"
                                        );


                                        if (
                                            link.getAttribute(
                                                "href"
                                            ) ===
                                            "#" + id
                                        ) {

                                            link.classList.add(
                                                "active"
                                            );

                                        }

                                    }
                                );

                            }

                        }
                    );

                },
                {
                    rootMargin:
                        "-80px 0px -50% 0px"
                }
            );


        sections.forEach(
            function (section) {

                navigationObserver.observe(
                    section
                );

            }
        );

    }

});
