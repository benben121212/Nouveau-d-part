// Sélectionner les éléments du DOM
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const transition = document.querySelector('.transition');

// Initialiser la variable qui indique la direction du scroll
let isScrollingDown = false;

// Ajouter un écouteur d'événement sur le scroll de la fenêtre
window.addEventListener('scroll', function() {
  // Récupérer la position de la section 2 par rapport à la fenêtre
  const section2Top = section2.getBoundingClientRect().top;
  // Vérifier si la section 2 est visible à l'écran
  const section2Visible = section2Top <= window.innerHeight * 0.5;
  
  // Si la section 2 est visible et que le scroll va vers le bas
  if (section2Visible && !isScrollingDown) {
    // Ajouter la classe .is-active à la section 2 et à la transition
    section2.classList.add('is-active');
    transition.classList.add('is-active');
  } 
  // Si la section 2 n'est pas visible et que le scroll va vers le haut
  else if (!section2Visible && isScrollingDown) {
    // Retirer la classe .is-active de la section 2 et de la transition
    section2.classList.remove('is-active');
    transition.classList.remove('is-active');
  }
  
  // Vérifier si la section 1 est visible à nouveau à l'écran
  const section1Visible = section1.getBoundingClientRect().top <= window.innerHeight * 0.5;
  
  // Si la section 1 est visible à nouveau à l'écran
  if (section1Visible) {
    // Retirer la classe .is-active de la section 2 et de la transition
    section2.classList.remove('is-active');
    transition.classList.remove('is-active');
  }
  
  // Mettre à jour la direction du scroll
  isScrollingDown = section2Top > 0;
});
