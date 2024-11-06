document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! Thank you for reaching out.");
    document.getElementById("contact-form").reset();
});

function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}
document.querySelectorAll(".nav-links .txt").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav-links").classList.remove("show");
    });
});

