//section2//

const section2 = document.querySelector('.section2 h2');

window.addEventListener('scroll', () => {
    const top = section2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.9) {
        section2.classList.add('show');
    } else {
        section2.classList.remove('show');
        section2.style.transitionDelay = '0s';
    }
});

const img = document.querySelector('.choose-img img');

window.addEventListener('scroll', () => {
    const top = img.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.6) {
        img.classList.add('show');
    } else {
        img.classList.remove('show');
        img.style.transitionDelay = '0s';
    }
});

const messege = document.querySelector('.the-messege');

window.addEventListener('scroll', () => {
    const top = messege.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.6) {
        messege.classList.add('show');
    } else {
        messege.classList.remove('show');
        messege.style.transitionDelay = '0s';
    }
});


//section3//

const messege2 = document.querySelector('.section3 h1');

window.addEventListener('scroll', () => {
  const top = messege2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (top < windowHeight *0.9) {
    messege2.classList.add('show');
  } else {
    messege2.classList.remove('show');
    messege2.style.transitionDelay = '0s';
  }
})

const cakepic = document.querySelectorAll('.cake-card');

window.addEventListener('scroll', () => {
  cakepic.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.9) {
      card.style.transitionDelay = `${index * 0.3}s`; 
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
});

//section4//

const section4 = document.querySelector('.section4');

window.addEventListener('scroll', () => {
  const top = section4.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (top < windowHeight * 0.7) {
    section4.classList.add('show');
  } else {
    section4.classList.remove('show');
    section4.style.transitionDelay = '0s';
  }
})

//section4//

const img2 = document.querySelector('.gift-image');

window.addEventListener('scroll', () => {
  const top = img2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (top < windowHeight * 0.6) {
    img2.classList.add('show');
  } else {
    img2.classList.remove('show');
    img2.style.transitionDelay = '0s';
  }
})

const messege3 = document.querySelector('.gift-content');

window.addEventListener('scroll', () => {
  const top = messege3.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (top < windowHeight *0.6) {
    messege3.classList.add('show');
  } else {
    messege3.classList.remove('show');
    messege3.style.transitionDelay = '0s';
  }
})