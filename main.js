// Typed.js
new Typed(".text", {
  strings: ["Computer Science Student", "Frontend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Mobile navbar toggle
const toggleBtn = document.querySelector(".menu-toggle");
const navbar   = document.querySelector(".navbar");

toggleBtn?.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

// Close menu after clicking a link (mobile UX)
navbar?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navbar.classList.remove("open"));
});

// Back-to-top smooth (optional—already smooth via CSS)
document.querySelector(".top")?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
