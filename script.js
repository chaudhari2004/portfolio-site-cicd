// 🔥 Dynamic Welcome Text (Typing Effect)
const text = "🚀 Welcome to Vivek's AWS Portfolio!";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("demo").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

// Button click action
function changeText() {
  document.getElementById("demo").innerHTML = "";
  index = 0;
  typeEffect();

  // Button animation
  const btn = document.querySelector("button");
  btn.innerText = "Loaded ✅";
  btn.style.backgroundColor = "#22c55e";
}

// 🔥 Smooth Scroll (Improved)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// 🔥 Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
});

// 🔥 Page Load Message
window.onload = () => {
  console.log("✅ Portfolio loaded successfully 🚀");

  // Greeting based on time
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) greeting = "🌅 Good Morning!";
  else if (hour < 18) greeting = "☀️ Good Afternoon!";
  else greeting = "🌙 Good Evening!";

  document.getElementById("demo").innerHTML = greeting + " Welcome to my portfolio!";
};
