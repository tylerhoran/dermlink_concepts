// Dermlink - Clinical Serenity Interactions

document.addEventListener("DOMContentLoaded", () => {
  // Navigation scroll effect
  const nav = document.querySelector(".nav");
  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    },
    { passive: true },
  );

  // Scroll-triggered animations
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    ".section-header, .step, .appt-card, .trust-item, .clinicians-content, .clinician-card",
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.querySelector(".nav").offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight -
          16;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });
});
