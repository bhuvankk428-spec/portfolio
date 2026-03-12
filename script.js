const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const revealElements = document.querySelectorAll(".reveal");
const projectTriggers = document.querySelectorAll("[data-project]");
const modal = document.getElementById("project-modal");
const modalCloseTargets = document.querySelectorAll("[data-close-modal]");
const modalPanel = document.querySelector(".modal-panel");

let lastFocusedElement = null;

function setLoadedState() {
  window.requestAnimationFrame(() => {
    body.classList.add("is-loaded");
  });
}

function toggleMobileNav(forceClose = false) {
  if (!menuToggle || !siteNav) return;

  const shouldOpen = forceClose ? false : !siteNav.classList.contains("open");
  siteNav.classList.toggle("open", shouldOpen);
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
}

function setupNav() {
  if (!menuToggle || !siteNav) return;

  menuToggle.addEventListener("click", () => toggleMobileNav());
  navLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMobileNav(true));
  });
}

function setupReveals() {
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function openModal() {
  if (!modal) return;

  lastFocusedElement = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  body.style.overflow = "hidden";
  modalPanel?.focus();
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  body.style.overflow = "";

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function setupProjectModal() {
  if (!modal) return;

  if (modalPanel) {
    modalPanel.setAttribute("tabindex", "-1");
  }

  projectTriggers.forEach((trigger) => {
    trigger.addEventListener("click", openModal);
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal();
      }
    });
  });

  modalCloseTargets.forEach((target) => {
    target.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

setLoadedState();
setupNav();
setupReveals();
setupProjectModal();
