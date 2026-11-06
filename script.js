// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", function () {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});
mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Product category filter
const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (item) { item.classList.remove("active"); });
    button.classList.add("active");
    const selectedCategory = button.dataset.filter;
    productCards.forEach(function (card) {
      card.style.display = selectedCategory === "all" || card.dataset.category === selectedCategory ? "block" : "none";
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
