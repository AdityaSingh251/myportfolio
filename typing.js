/* =====================================
   TYPING EFFECT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const typingText =
        document.getElementById("typingText");

    if (!typingText) {
        return;
    }

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

});
