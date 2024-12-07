<script>
emailjs.init("N6Z387gNh7z1Y7HvY");

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs
        .send("9l2e90q", "z8dvl7y", formData)
        .then(() => {
            alert("Message sent successfully!");
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("Failed to send message. Please try again.");
        });
});
</script>