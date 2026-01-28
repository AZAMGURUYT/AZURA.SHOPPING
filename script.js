gsap.registerPlugin(ScrollTrigger);

// HERO text
gsap.from(".hero h1", {
  y: 80,
  opacity: 0,
  duration: 1.4,
  ease: "power4.out"
});

gsap.from(".hero p", {
  y: 40,
  opacity: 0,
  delay: 0.4,
  duration: 1,
  ease: "power3.out"
});

.image {
  overflow: hidden;
}

.image img {
  transition: transform 1.2s ease;
}

.image:hover img {
  transform: scale(1.08);
}


// Split sections
gsap.utils.toArray(".split").forEach(section => {
  gsap.from(section.querySelector(".text"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    x: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  gsap.from(section.querySelector(".image"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    x: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});
