const menuHamburger = document.querySelector(".menu-hamburger")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })


const sections = document.querySelectorAll(".navbar, header, section");

function activateSection(section) {
  sections.forEach((s) => s.classList.remove("active"));
  section.classList.add("active");
}

function detectActiveSection() {
  sections.forEach((section) => {
    const distanceToTop = section.getBoundingClientRect().top;
    if (distanceToTop < window.innerHeight * 0.5) {
      activateSection(section);
    }
  });
}

detectActiveSection();

window.addEventListener("scroll", detectActiveSection);
