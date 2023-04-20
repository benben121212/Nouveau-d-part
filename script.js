const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const containerMain = document.querySelector('.containerMain');

function handleScroll() {
  section2.classList.remove('is-active');

  const section1Height = section1.offsetHeight;
  const scrollPosition = window.pageYOffset;
  const section2Height = Math.max(0, section2.offsetHeight - scrollPosition);
  containerMain.style.height = `${section2Height}px`;

  if (scrollPosition > section1Height) {
    section2.classList.add('is-active');
    section1.style.opacity = '0';
    containerMain.style.transition = 'transform 0.5s ease-in-out';
  } else {
    section1.style.opacity = '1';
    containerMain.style.transition = 'none';
  }

}

window.addEventListener('scroll', handleScroll);

section2.classList.remove('is-active');