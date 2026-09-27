/* =====================================
   ADIX PERSONAL PORTFOLIO ASSISTANT
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================
           CREATE CHATBOT HTML
        ================================= */

        const adixHTML = `

            <button
                class="adix-launcher"
                id="adixLauncher"
                aria-label="Open AdiX Assistant"
                type="button"
            >

                <span class="adix-logo">
                    Adi<span>X</span>
                </span>

                <span class="adix-online"></span>

            </button>


            <div
                class="adix-window"
                id="adixWindow"
                role="dialog"
                aria-label="AdiX Assistant"
            >

                <div class="adix-header">

                    <div class="adix-header-left">

                        <div class="adix-avatar">
                            AX
                        </div>

                        <div class="adix-header-info">

                            <strong>
                                AdiX
                            </strong>

                            <small>

                                <span
                                    class="adix-header-status"
                                ></span>

                                Portfolio Assistant

                            </small>

                        </div>

                    </div>


                    <button
                        class="adix-close"
                        id="adixClose"
                        type="button"
                        aria-label="Close AdiX"
                    >
                        ×
                    </button>

                </div>


                <div
                    class="adix-messages"
                    id="adixMessages"
                ></div>


                <div
                    class="adix-quick"
                    id="adixQuick"
                >

                    <button
                        type="button"
                        data-question="Tell me about Aditya"
                    >
                        About Aditya
                    </button>

                    <button
                        type="button"
                        data-question="What are his skills?"
                    >
                        Skills
                    </button>

                    <button
                        type="button"
                        data-question="Show me his projects"
                    >
                        Projects
                    </button>

                    <button
                        type="button"
                        data-question="What services does he offer?"
                    >
                        Services
                    </button>

                    <button
                        type="button"
                        data-question="How can I contact Aditya?"
                    >
                        Contact
                    </button>

                </div>


                <form
                    class="adix-input-area"
                    id="adixForm"
                >

                    <input
                        class="adix-input"
                        id="adixInput"
                        type="text"
                        autocomplete="off"
                        placeholder="Ask AdiX something..."
                    >

                    <button
                        class="adix-send"
                        type="submit"
                        aria-label="Send"
                    >
                        ↑
                    </button>

                </form>

            </div>

        `;


        document.body.insertAdjacentHTML(
            "beforeend",
            adixHTML
        );


        /* =================================
           ELEMENTS
        ================================= */

        const launcher =
            document.getElementById(
                "adixLauncher"
            );

        const chatWindow =
            document.getElementById(
                "adixWindow"
            );

        const closeButton =
            document.getElementById(
                "adixClose"
            );

        const messages =
            document.getElementById(
                "adixMessages"
            );

        const form =
            document.getElementById(
                "adixForm"
            );

        const input =
            document.getElementById(
                "adixInput"
            );

        const quickButtons =
            document.querySelectorAll(
                ".adix-quick button"
            );


        /* =================================
           OPEN / CLOSE
        ================================= */

        launcher.addEventListener(
            "click",
            function () {

                chatWindow.classList.toggle(
                    "open"
                );

                if (
                    chatWindow.classList.contains(
                        "open"
                    )
                ) {

                    input.focus();

                }

            }
        );


        closeButton.addEventListener(
            "click",
            function () {

                chatWindow.classList.remove(
                    "open"
                );

            }
        );


        /* =================================
           ADD MESSAGE
        ================================= */

        function addMessage(
            text,
            type
        ) {

            const message =
                document.createElement(
                    "div"
                );

            message.className =
                "adix-message " + type;


            const bubble =
                document.createElement(
                    "div"
                );

            bubble.className =
                "adix-bubble";


            bubble.textContent =
                text;


            message.appendChild(
                bubble
            );


            messages.appendChild(
                message
            );


            messages.scrollTop =
                messages.scrollHeight;

        }


        /* =================================
           TYPING INDICATOR
        ================================= */

        function showTyping() {

            const message =
                document.createElement(
                    "div"
                );

            message.className =
                "adix-message bot";

            message.id =
                "adixTypingMessage";


            message.innerHTML = `

                <div class="adix-bubble">

                    <div class="adix-typing">

                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                </div>

            `;


            messages.appendChild(
                message
            );


            messages.scrollTop =
                messages.scrollHeight;

        }


        function removeTyping() {

            const typing =
                document.getElementById(
                    "adixTypingMessage"
                );


            if (typing) {

                typing.remove();

            }

        }


        /* =================================
           RESPONSE ENGINE
        ================================= */

        function getResponse(message) {

            const text =
                message.toLowerCase();


            if (
                text.includes("hello") ||
                text.includes("hi") ||
                text.includes("hey")
            ) {

                return "Hello! I'm AdiX, Aditya's portfolio assistant. I can tell you about his background, skills, projects, services, experience and contact information.";

            }


            if (
                text.includes("about") ||
                text.includes("who is") ||
                text.includes("aditya")
            ) {

                return "Aditya Singh is a technology enthusiast, developer and entrepreneur. He works across web development, digital solutions and business-oriented technology projects.";

            }


            if (
                text.includes("skill") ||
                text.includes("technology") ||
                text.includes("tech stack")
            ) {

                return "Aditya's technical skills include HTML, CSS, JavaScript, Python, MySQL, data structures, OOP, machine learning concepts and web development technologies.";

            }


            if (
                text.includes("project") ||
                text.includes("work")
            ) {

                return "You can explore Aditya's portfolio projects in the Projects section. His work includes websites, web applications, portfolio projects and technology-focused solutions.";

            }


            if (
                text.includes("service") ||
                text.includes("offer")
            ) {

                return "The portfolio highlights services such as web development, responsive websites, landing pages, WordPress development and digital solutions.";

            }


            if (
                text.includes("experience") ||
                text.includes("career")
            ) {

                return "Aditya has experience across technology, web development, digital business and professional roles. You can see the detailed timeline in the Experience section.";

            }


            if (
                text.includes("resume") ||
                text.includes("cv")
            ) {

                return "You can download Aditya's latest resume using the Resume button in the navigation bar.";

            }


            if (
                text.includes("contact") ||
                text.includes("email") ||
                text.includes("hire") ||
                text.includes("reach")
            ) {

                return "You can contact Aditya through the Contact section of this portfolio. Fill out the contact form and your message will be sent directly to him.";

            }


            if (
                text.includes("github")
            ) {

                return "You can visit Aditya's GitHub profile using the GitHub link provided in the portfolio's social links.";

            }


            if (
                text.includes("linkedin")
            ) {

                return "You can connect with Aditya on LinkedIn through the LinkedIn link in the portfolio.";

            }


            if (
                text.includes("thank") ||
                text.includes("thanks")
            ) {

                return "You're welcome! If you'd like to know anything else about Aditya's work, just ask.";

            }


            return "I'm currently designed to answer questions about Aditya, his skills, projects, services, experience, resume and contact information. Try asking: “What are his skills?”";

        }


        /* =================================
           SEND MESSAGE
        ================================= */

        function sendMessage(text) {

            if (!text.trim()) {
                return;
            }


            addMessage(
                text,
                "user"
            );


            input.value = "";


            showTyping();


            setTimeout(
                function () {

                    removeTyping();


                    const response =
                        getResponse(text);


                    addMessage(
                        response,
                        "bot"
                    );

                },
                650
            );

        }


        /* =================================
           FORM SUBMIT
        ================================= */

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                sendMessage(
                    input.value
                );

            }
        );


        /* =================================
           QUICK QUESTIONS
        ================================= */

        quickButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        sendMessage(
                            button.dataset.question
                        );

                    }
                );

            }
        );


        /* =================================
           WELCOME MESSAGE
        ================================= */

        setTimeout(
            function () {

                addMessage(
                    "Hi! I'm AdiX 👋 Ask me anything about Aditya's skills, projects, experience, services or how to contact him.",
                    "bot"
                );

            },
            300
        );

    }
);
