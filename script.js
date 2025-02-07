document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const pages = document.querySelectorAll(".page");
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector("nav");

    function showPage(pageId) {
        pages.forEach((page) => {
            page.classList.remove("active");
            if (page.id === pageId) {
                page.classList.add("active");
            }
        });

        // Hide the navbar after clicking a link
        navbar.classList.remove("active");
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const pageId = this.getAttribute("data-page");
            showPage(pageId);
        });
    });

    // Set default page to "Home"
    showPage("home");
});

// Toggle Navbar
function toggleMenu() {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("active");
}