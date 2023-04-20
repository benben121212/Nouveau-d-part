// Sélectionner les éléments du DOM
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const transition = document.querySelector('.transition');

// Ajouter la classe .is-active à la section 1 au chargement de la page
section1.classList.add('is-active');

// Retirer la classe .is-active de la section 2 au chargement de la page
section2.classList.remove('is-active');

// Initialiser la variable qui indique la direction du scroll
let isScrollingDown = false;

// Ajouter un écouteur d'événement sur le chargement de la page
window.addEventListener('load', function() {
  // Ajouter la classe .is-active à la section 1
  section1.classList.add('is-active');
});

// Ajouter un écouteur d'événement sur le scroll de la fenêtre
window.addEventListener('scroll', function() {
  // Récupérer la position de la section 2 par rapport à la fenêtre
  const section2Top = section2.getBoundingClientRect().top;

  // Vérifier si la section 2 est visible à l'écran
  const section2Visible = section2Top <= window.innerHeight * 0.5;

  // Si la section 2 est visible et que le scroll va vers le bas
  if (section2Visible && !isScrollingDown && !transition.classList.contains('is-active')) {
    // Ajouter la classe .is-active à la transition
    transition.classList.add('is-active');

    // Ajouter la classe .is-transitioning à la section 1
    section1.classList.add('is-transitioning');

    // Retirer la classe .is-active de la section 1
    section1.classList.remove('is-active');

    // Ajouter un écouteur d'événement pour retirer la classe .is-transitioning de la section 1 après la fin de la transition
    transition.addEventListener('transitionend', function() {
      section1.classList.remove('is-transitioning');
    });
  }

  // Si la section 2 n'est pas visible et que le scroll va vers le haut
  else if (!section2Visible && isScrollingDown && !transition.classList.contains('is-active')) {
    // Ajouter la classe .is-active à la transition
    transition.classList.add('is-active');

    // Ajouter la classe .is-transitioning à la section 2
    section2.classList.add('is-transitioning');

    // Retirer la classe .is-active de la section 2
    section2.classList.remove('is-active');

    // Ajouter un écouteur d'événement pour retirer la classe .is-transitioning de la section 2 après la fin de la transition
    transition.addEventListener('transitionend', function() {
      section2.classList.remove('is-transitioning');
    });
  }

  // Vérifier si la section 1 remplit la page
  const section1Bottom = section1.getBoundingClientRect().bottom;
  const pageBottom = window.innerHeight;
  const section1FilledPage = section1Bottom >= pageBottom;

  // Si la section 1 remplit la page
  if (section1FilledPage && !section2Visible) {
    // Retirer la classe .is-active de la section 2 et de la transition
    section2.classList.remove('is-active');
    transition.classList.remove('is-active');
  }

// Mettre à jour la direction du scroll
isScrollingDown = section2Top > 0;
  });