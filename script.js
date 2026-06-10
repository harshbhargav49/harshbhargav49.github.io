// ===========================
// DARK / LIGHT MODE
// ===========================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");

  if (isLight) {
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// ===========================
// ACTIVE NAVBAR LINK
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================

const revealElements = document.querySelectorAll(
  ".stat-card, .skill-card, .timeline-item, .project-card",
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===========================
// SMOOTH BUTTON SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// ===========================
// HEADER SHADOW ON SCROLL
// ===========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
  } else {
    header.style.boxShadow = "none";
  }
});

// ===========================
// HERO TEXT ANIMATION
// ===========================

const heroTitle = document.querySelector(".hero h1");

heroTitle.style.opacity = "0";
heroTitle.style.transform = "translateY(30px)";

setTimeout(() => {
  heroTitle.style.transition = "0.8s ease";
  heroTitle.style.opacity = "1";
  heroTitle.style.transform = "translateY(0)";
}, 300);

// ===========================
// CONTACT FORM
// ===========================

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thank you for reaching out! I'll get back to you soon.");

  form.reset();
});

// ===========================
// TYPING EFFECT
// ===========================

const typingText = [
  "Frontend Developer",
  "React Developer",
  "MERN Stack Learner",
];

let index = 0;
let charIndex = 0;

const typingElement = document.createElement("span");
typingElement.classList.add("typing");

const heroTag = document.querySelector(".hero-tag");
heroTag.appendChild(document.createElement("br"));
heroTag.appendChild(typingElement);

function typeEffect() {
  if (charIndex < typingText[index].length) {
    typingElement.textContent += typingText[index].charAt(charIndex);

    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[index].substring(0, charIndex - 1);

    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index++;

    if (index >= typingText.length) {
      index = 0;
    }

    setTimeout(typeEffect, 300);
  }
}

typeEffect();
