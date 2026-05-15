const menuBtn = document.querySelector('.menu-btn');
  

  if(!isDeleting && charIndex === currentWord.length){

    isDeleting = true;

    setTimeout(typeEffect, 1000);

    return;

  }

  if(isDeleting && charIndex === 0){

    isDeleting = false;

    wordIndex = (wordIndex + 1) % words.length;

  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);



typeEffect();


// SCROLL REVEAL ANIMATION

const reveals = document.querySelectorAll('.reveal');

function revealSections(){

  reveals.forEach((section) => {

    const windowHeight = window.innerHeight;

    const revealTop = section.getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      section.classList.add('active');

    }

  });

}

window.addEventListener('scroll', revealSections);

revealSections();