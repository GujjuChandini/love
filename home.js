// Navbar Transparency on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile Menu Toggle
const toggleBtn = document.querySelector(".toggle_btn");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("open");
});

function toggleMenu() {
    const menu = document.querySelector('.dropdown_menu');
    menu.classList.toggle('open');
}

