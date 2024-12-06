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

// Open the popup and load the HTML page
function openPopup(url) {
    const popup = document.getElementById('popup');
    const iframe = document.getElementById('popup-iframe');
    iframe.src = url; // Load the HTML file into the iframe
    popup.style.display = 'flex'; // Show the popup
  }
  
  // Close the popup
  function closePopup() {
    const popup = document.getElementById('popup');
    const iframe = document.getElementById('popup-iframe');
    iframe.src = ''; // Clear the iframe content
    popup.style.display = 'none'; // Hide the popup
  }
  