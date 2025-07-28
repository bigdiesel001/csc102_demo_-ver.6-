document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("userForm");
    const messageDiv = document.getElementById("message");
    const wholesomeImage = document.getElementById("wholesomeImage");
    const switchImage1 = document.getElementById("switchImage1");
    const switchImage2 = document.getElementById("switchImage2");

    // Initial state: show wholesomeImage and switchImage1, hide switchImage2
    wholesomeImage.style.display = "block";
    switchImage1.style.display = "block";
    switchImage2.style.display = "none";

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const zipCode = document.getElementById("zipCode").value.trim();
        const fullName = firstName + " " + lastName;

        if (fullName.length > 20) {
            messageDiv.style.color = "red";
            messageDiv.textContent = "Full name must not exceed 20 characters.";
            return;
        }

        if (!/^\d{5}$/.test(zipCode)) {
            messageDiv.style.color = "red";
            messageDiv.textContent = "Zip code must be exactly 5 digits.";
            return;
        }

        // Change background color to black
        document.body.style.backgroundColor = "black";

        // Hide wholesomeImage and switchImage1, show switchImage2
        wholesomeImage.style.display = "none";
        switchImage1.style.display = "none";
        switchImage2.style.display = "block";

        messageDiv.style.color = "green";
        messageDiv.innerHTML = "Awesome work, " + fullName + "! Now before you join the Welcome to the Coding Illuminati, please go to our link to start! " +
            '<a href="https://youtu.be/W83Ylr8r_y0" target="_blank">Start Here</a>';
    });

    form.addEventListener("reset", function() {
        messageDiv.textContent = "";
        document.body.style.backgroundColor = ""; // Reset background

        // Restore initial state
        wholesomeImage.style.display = "block";
        switchImage1.style.display = "block";
        switchImage2.style.display = "none";
    });
});