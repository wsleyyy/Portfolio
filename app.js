document.addEventListener("DOMContentLoaded", () => {
  
  // 1. SMOOTH SCROLL FOR HERO BUTTON
  const exploreBtn = document.getElementById('explore-btn');
  const projectsSection = document.getElementById('projects');

  if (exploreBtn && projectsSection) {
    exploreBtn.addEventListener('click', () => {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 2. INTERACTIVE SCROLL REVEAL (Intersection Observer)
  const cards = document.querySelectorAll('.project-card');

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Apply the CSS transition state class
        entry.target.classList.add('reveal');
        // Stop observing once animated into view
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,     // Trigger when 15% of the card crosses into view
    rootMargin: "0px 0px -50px 0px"
  });

  cards.forEach(card => {
    revealOnScroll.observe(card);
  });
});
