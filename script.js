const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const toast = document.querySelector(".toast");

menuButton.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    document.querySelectorAll("[data-category]").forEach((card) => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

document.querySelector(".signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.currentTarget.querySelector("input");
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }
  showToast("Welcome to the circle.");
  event.currentTarget.reset();
});
