document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    function handleSubmit(event) {

        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value.trim();
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(emailValue)) {
            event.preventDefault();
            alert("Please enter a valid email address.");
            return;
        }

        const nomInput = document.getElementById("nom");
        const nomValue = nomInput.value.trim();
        const containsOnlyLetters = /^[a-zA-Z]+$/.test(nomValue);

        if (!containsOnlyLetters) {
            event.preventDefault();
            alert("Name must contain only letters.");
            return;
        }
    }

    contactForm.addEventListener("submit", handleSubmit);
});