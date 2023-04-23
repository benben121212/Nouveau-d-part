const sectionNames = ['Menu', 'Accueil', 'Monde', 'Histoire', 'Personnage principal', 'Personnages secondaires', 'Faunes', 'Véhicules'];
const sectionIDs = ['sectionmenu', 'sectionaccueil', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'];

const sections = document.querySelectorAll('.section');
const sectionHeights = [...sections].map(section => section.offsetHeight);
const totalHeight = sectionHeights.reduce((total, height) => total + height);

const section3Start = sectionHeights[0] + sectionHeights[1];
const section4Start = section3Start + sectionHeights[2];
const section4End = section4Start + sectionHeights[3];
const section5Start = section4End;
const section5End = section5Start + sectionHeights[4];
const section6Start = section5End;
const section6End = section6Start + sectionHeights[5];
const section7Start = section6End;

function toggleMenu() {
  var nav = document.querySelector('.menu-deroulant nav');
  nav.classList.toggle('menu-deroulant--visible');
}

const setActiveSection = (scrollPosition) => {
  let delay = 0;
  sections.forEach((section, index) => {
    section.classList.remove('is-active', 'is-fixed');
    if (scrollPosition >= section3Start && scrollPosition < section4Start && index === 2) {
      setTimeout(() => {
        section.classList.add('is-active');
      }, delay);
      delay += 200;
    }
    if (scrollPosition >= section4Start && scrollPosition < section5Start && index === 3) {
      setTimeout(() => {
        section.classList.add('is-active', 'is-fixed');
      }, delay);
      delay += 200;
    }
    if (scrollPosition >= section5Start && scrollPosition < section6Start && index === 4) {
      setTimeout(() => {
        section.classList.add('is-active', 'is-fixed');
      }, delay);
      delay += 200;
    }
    if (scrollPosition >= section6Start && scrollPosition < section7Start && index === 5) {
      setTimeout(() => {
        section.classList.add('is-active', 'is-fixed');
      }, delay);
      delay += 200;
    }
    if (scrollPosition >= section7Start && index === 6) {
      setTimeout(() => {
        section.classList.add('is-active', 'is-fixed');
      }, delay);
      delay += 200;
    }
  });
};

const handleScroll = () => {
  const scrollPosition = window.pageYOffset;
  setActiveSection(scrollPosition);
};

window.addEventListener('scroll', handleScroll);
