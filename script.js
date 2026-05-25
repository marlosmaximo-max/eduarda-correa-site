const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const progressBar = document.querySelector(".scroll-progress");
const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");
const mobileStickyCta = document.querySelector(".mobile-sticky-cta");
const parallaxItems = Array.from(document.querySelectorAll("[data-parallax-speed]"));
const revealItems = Array.from(
  document.querySelectorAll(
    ".proof-strip > div, .audience-copy, .audience-list > div, .about-media, .about-copy, .section-heading, .journey-visual, .journey-step, .statement-content, .method-copy, .timeline-item, .gallery-carousel, .cta-content, .cta-card, .location-copy, .map-card"
  )
);

revealItems.forEach((item) => item.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

function updateScrollEffects() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? scrollTop / scrollable : 0;

  if (progressBar) {
    progressBar.style.transform = `scaleX(${progress})`;
  }

  if (header) {
    header.classList.toggle("is-scrolled", scrollTop > 24);
  }

  if (hero && mobileStickyCta) {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    mobileStickyCta.classList.toggle("is-hidden", scrollTop < heroBottom - 120);
  }

  if (!prefersReducedMotion) {
    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.parallaxSpeed || 0);
      const rect = item.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      const translateY = centerOffset * speed;
      item.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
    });
  }
}

let ticking = false;
window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateScrollEffects();
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true }
);

window.addEventListener("resize", updateScrollEffects);
updateScrollEffects();

document.querySelectorAll("[data-float-card]").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (prefersReducedMotion || window.innerWidth < 900) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1200px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const previousButton = carousel.querySelector(".carousel-prev");
  const nextButton = carousel.querySelector(".carousel-next");
  const dotsContainer = carousel.querySelector(".carousel-dots");

  if (!track || slides.length <= 1) return;

  let activeIndex = 0;
  let timerId;
  let isPaused = false;

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Mostrar foto ${index + 1}`);
    dot.addEventListener("click", () => {
      showSlide(index);
      restart();
    });
    dotsContainer?.appendChild(dot);
    return dot;
  });

  function showSlide(index) {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translate3d(${-activeIndex * 100}%, 0, 0)`;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
      dot.setAttribute("aria-current", dotIndex === activeIndex ? "true" : "false");
    });
  }

  function next() {
    showSlide(activeIndex + 1);
  }

  function start() {
    if (prefersReducedMotion || isPaused) return;
    window.clearInterval(timerId);
    timerId = window.setInterval(next, 3600);
  }

  function pause() {
    isPaused = true;
    window.clearInterval(timerId);
  }

  function resume() {
    isPaused = false;
    start();
  }

  function restart() {
    window.clearInterval(timerId);
    start();
  }

  previousButton?.addEventListener("click", () => {
    showSlide(activeIndex - 1);
    restart();
  });

  nextButton?.addEventListener("click", () => {
    next();
    restart();
  });

  carousel.addEventListener("pointerenter", pause);
  carousel.addEventListener("pointerleave", resume);
  carousel.addEventListener("pointerdown", pause);
  carousel.addEventListener("pointerup", resume);
  carousel.addEventListener("pointercancel", resume);
  carousel.addEventListener("focusin", pause);
  carousel.addEventListener("focusout", resume);

  showSlide(0);
  start();
});
