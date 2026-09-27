/* =====================================
   FORMSUBMIT CONTACT FORM
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.getElementById("contactForm");

    const submitButton =
        document.getElementById("submitButton");


    if (!contactForm) {
        return;
    }


    contactForm.addEventListener(
        "submit",
        function () {

            if (submitButton) {

                submitButton.disabled = true;

                submitButton.innerHTML =
                    "Sending...";

            }

        }
    );

});
