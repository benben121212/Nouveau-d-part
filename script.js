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

// Bouton selecteur jeu video
document.getElementById("btnSections").onclick = function() {
    var sectionsContainer = document.getElementById("sectionsContainer");
    sectionsContainer.classList.toggle("sections-visible");
    if (sectionsContainer.classList.contains("sections-visible")) {
      document.getElementById("btnSections").innerHTML = "Masquer les sections";
    } else {
      document.getElementById("btnSections").innerHTML = "Afficher les sections";
    }
  }
  // Bouton selecteur jeu video
function toggleSections() {
    var sectionsContainer = document.getElementById("sectionsContainer");
    var btnSections = document.getElementById("btnSections");
    if (sectionsContainer.classList.contains("sections-visible")) {
      sectionsContainer.classList.remove("sections-visible");
      btnSections.innerHTML = "Afficher les sections";
    } else {
      sectionsContainer.classList.add("sections-visible");
      btnSections.innerHTML = "Masquer les sections";
    }
  }
  
  document.getElementById("btnSections").onclick = toggleSections;
  