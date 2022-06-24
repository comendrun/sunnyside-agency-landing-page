const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const navbar = document.getElementById("navbar");
const allNavLinks = document.querySelectorAll(".nav-links");

// console.log(windowWidth);

hamburger.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("hidden");
}

overlay.addEventListener("click", toggleNavbar);

for (let i = 0; i < allNavLinks.length; i++) {
  allNavLinks[i].addEventListener("click", toggleNavbar);
}

//listen for window resize event
// i just added this for when we are trnasitioning from mobile to desktop mode and after getting back to mibile mode, navbar was still open. i wanted navbar to get clossed after that
window.addEventListener("resize", () => {
  let windowWidth = window.innerWidth;
  if (windowWidth > 800) {
    // navbar.classList.add("hidden");
    overlay.classList.add("hidden");
    navbar.classList.remove("bubble");
  } else if (windowWidth < 800) {
    navbar.classList.add("bubble");
  }
});
