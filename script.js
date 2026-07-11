// ===============================
// THE BOY FROM LAST - SCRIPT.JS
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const revealElements = document.querySelectorAll(
    ".section-inner, .chapter-card, .featured-left, .featured-card, .notes-box, .character-card, .story-card"
  );

  // -------------------------------
  // Navbar shadow / background on scroll
  // -------------------------------
  function handleNavbar() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbar);
  handleNavbar();

  // -------------------------------
  // Reveal on scroll animation
  // -------------------------------
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
// -------------------------------
// CLEAN PETAL EFFECT (no unicode)
// -------------------------------
function createSnowdrop() {
  const drop = document.createElement("span");
  drop.className = "snowdrop";

  drop.style.left = Math.random() * window.innerWidth + "px";
  drop.style.width = (6 + Math.random() * 6) + "px";
  drop.style.height = drop.style.width;
  drop.style.animationDuration = (7 + Math.random() * 5) + "s";
  drop.style.opacity = (0.25 + Math.random() * 0.35).toFixed(2);

  document.body.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 13000);
}

setInterval(createSnowdrop, 900)});
function lockedChapter(){
    alert("🔒 Chapter 6 — The Housemaid (Part I)\n\nComing Soon...");
}