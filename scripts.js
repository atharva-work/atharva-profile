console.log("JS file loaded");

document.addEventListener("DOMContentLoaded", () => {
  const hoverSound = document.getElementById("hoverSound");

  // Unlock audio playback with a user gesture
  document.body.addEventListener("click", () => {
    hoverSound.play().then(() => {
      hoverSound.pause();
      hoverSound.currentTime = 0;
    }).catch(err => {
      console.warn("Audio unlock failed:", err);
    });
  }, { once: true });
});

const cards = document.querySelectorAll(".award-card, .contact-card, .cert-card, .experience-item, .skill-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(err => {
      console.error("Playback failed:", err);
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("visible");
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(aboutSection);
});
