// Sélection des éléments HTML
const sections = document.querySelectorAll('.section');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const containerMain = document.querySelector('.containerMain');

// Variables pour stocker les hauteurs des sections
let section1Height = sections[0].offsetHeight;
let section2Height = sections[1].offsetHeight;

// Fonction pour gérer le défilement de la page
function handleScroll() {
  // Réinitialiser la classe "is-active" de la section 2
  section2.classList.remove('is-active');

  // Calculer la hauteur de la section 2 en fonction de la position de défilement
  const scrollPosition = window.pageYOffset;
  section2Height = Math.max(0, sections[1].offsetHeight - scrollPosition);
  containerMain.style.height = `${section2Height}px`;

  // Calculer le décalage nécessaire pour la section2 en fonction de la position de défilement
  const parallaxOffset = -scrollPosition / 2;

  // Appliquer la transformation en translation à la section2
  section2.style.transform = `translateY(${parallaxOffset}px)`;

  // Vérifier si la section 1 est hors de vue
  if (scrollPosition > section1Height) {
    // Ajouter la classe "is-active" à la section 2
    section2.classList.add('is-active');
    // Masquer la section 1
    sections[0].style.opacity = '0';
    // Ajouter la transition à la boîte principale
    containerMain.classList.add('transition');
  } else {
    // Réafficher la section 1
    sections[0].style.opacity = '1';
    // Supprimer la transition de la boîte principale
    containerMain.classList.remove('transition');
  }
}

// Écouter l'événement de défilement
window.addEventListener('scroll', handleScroll);

// Initialiser la classe "is-active" de la section 2
section2.classList.add('is-active');

// Commentaire expliquant l'objectif de la fonction handleScroll: cette fonction gère le défilement de la page et modifie l'apparence de la section 1 et 2 ainsi que la hauteur de la boîte principale en fonction de la position de défilement de la page.
