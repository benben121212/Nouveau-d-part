const sectionNames = ['Accueil', 'Monde', 'Histoire', 'Personnage principal', 'Personnages secondaires', 'Faunes', 'Véhicules'];
const sectionIDs = ['accueil', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'];

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

const setActiveSection = (scrollPosition) => {
  sections.forEach((section, index) => {
    section.classList.remove('is-active');
    if (scrollPosition >= section3Start && scrollPosition < section4Start && index === 2) {
      section.classList.add('is-active');
    }
    if (scrollPosition >= section4Start && scrollPosition < section5Start && index === 3) {
      section.classList.add('is-active');
    }
    if (scrollPosition >= section5Start && scrollPosition < section6Start && index === 4) {
      section.classList.add('is-active');
    }
    if (scrollPosition >= section6Start && scrollPosition < section7Start && index === 5) {
      section.classList.add('is-active');
    }
    if (scrollPosition >= section7Start && index === 6) {
      section.classList.add('is-active');
    }
  });
};

const handleScroll = () => {
  const scrollPosition = window.pageYOffset;
  setActiveSection(scrollPosition);
};

window.addEventListener('scroll', handleScroll);
