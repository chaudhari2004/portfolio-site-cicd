function changeText() {
  document.getElementById("demo").innerText = "🔥 Welcome to my portfolio!";
}

/* Smooth scroll effect (future use) */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* Simple console log (for debug) */
console.log("Portfolio loaded successfully 🚀");
