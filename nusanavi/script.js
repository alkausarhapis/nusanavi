const navbar = document.getElementById("navbar");
const sectionTentang = document.getElementById("tentang");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".custNavLink");

// Scrolled nav color
document.addEventListener("scroll", function () {
  if (window.scrollY >= sectionTentang.offsetTop) {
    navbar.classList.add("navScrolled");
  } else {
    navbar.classList.remove("navScrolled");
  }
});

// Active link
function highlightNavLink() {
  let scrollY = window.scrollY;

  navLinks.forEach(function (navLink) {
    let target = document.querySelector(navLink.getAttribute("href"));
    if (target) {
      // Periksa apakah bagian (section) ada di dalam tampilan
      if (
        target.offsetTop <= scrollY &&
        target.offsetTop + target.offsetHeight > scrollY
      ) {
        navLink.classList.add("navActive");
      } else {
        navLink.classList.remove("navActive");
      }
    }
  });
}

window.addEventListener("scroll", function () {
  highlightNavLink();
});
