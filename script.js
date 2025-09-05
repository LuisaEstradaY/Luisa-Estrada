// Animación de barras de progreso en habilidades
document.addEventListener('DOMContentLoaded', function() {
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const percent = bar.getAttribute('data-skill');
    bar.style.width = percent + '%';
  });
});
// Menú hamburguesa
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Animación de barras de progreso
const progressBars = document.querySelectorAll(".progress-bar");

function showProgress() {
  progressBars.forEach(bar => {
    const value = bar.getAttribute("data-skill");
    bar.style.width = value + "%";
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos) {
    showProgress();
  }
});

// Validación de formulario
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  alert("Formulario enviado con éxito 🚀");
  form.reset();
});
