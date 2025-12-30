const title = document.querySelector ('.title-aboutme');

window.addEventListener('scroll', () => {
  const titleTop =title.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.9) {
    title.classList.add('show');
  } else {
      title.classList.remove('show');
      title.style.transitionDelay = '0s'; 
    }
});

const box = document.querySelector('.about-text');

window.addEventListener('scroll', () => {
  const boxTop = box.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (boxTop < windowHeight * 0.4) {
    box.classList.add('show');
  } else {
    box.classList.remove('show');
    box.style.transitionDelay = '0s';
  }
});

const img = document.querySelector('.about-me img');

window.addEventListener('scroll', () => {
  const imgTop = img.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (imgTop < windowHeight * 0.4) {
    img.classList.add('show');
  } else {
    img.classList.remove('show');
    img.style.transitionDelay = '0s';
  }
});

const cards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.8) {
      card.style.transitionDelay = `${index * 0.2}s`; 
      card.classList.add('show');
    } else {
      card.classList.remove('show');
      card.style.transitionDelay = '0s';
    }
  });
});


const carousel = document.querySelectorAll('.my-skills-card');

window.addEventListener('scroll', () => {
  carousel.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.9) {
      card.style.transitionDelay = `${index * 0.3}s`; 
      card.classList.add('show');
    }
  });
});

// mutiple img/text show 
const skills = document.querySelectorAll('.type-skills');

window.addEventListener('scroll', () => {
  skills.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.7) {
      card.style.transitionDelay = `${index * 0.2}s`; 
      card.classList.add('show');
    }
  });
});

const container = document.querySelector('.contact-form');

window.addEventListener('scroll', () => {
  const boxTop = container.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (boxTop < windowHeight * 0.6) {
    container.classList.add('show');
  }
});

const certificates = document.querySelectorAll('.certification-link');

window.addEventListener('scroll', () => {
  certificates.forEach((certificate, index) => {
    const cardTop = certificate.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.7) {
      certificate.style.transitionDelay = `${index * 0.2}s`; 
      certificate.classList.add('show');
    } else {
      certificate.classList.remove('show');
      certificate.style.transitionDelay = '0s'; 
    }
  });
});
const page = document.querySelector ('.title-page h1');

window.addEventListener('scroll', () => {
  const titleTop =page.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.9) {
    page.classList.add('show');
  } else {
      page.classList.remove('show');
      page.style.transitionDelay = '0s'; 
    }
});

const titlepage = document.querySelector ('.title-page p');

window.addEventListener('scroll', () => {
  const titleTop =titlepage.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.9) {
    titlepage.classList.add('show');
  } else {
      titlepage.classList.remove('show');
      titlepage.style.transitionDelay = '0s'; 
    }
});

const tool = document.querySelector ('.title-container');

window.addEventListener('scroll', () => {
  const titleTop =tool.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.9) {
    tool.classList.add('show');
  } else {
      tool.classList.remove('show');
      tool.style.transitionDelay = '0s'; 
    }
});

const certificate = document.querySelector ('.my-certificate');

window.addEventListener('scroll', () => {
  const titleTop =certificate.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.9) {
    certificate.classList.add('show');
  } else {
      certificate.classList.remove('show');
      certificate.style.transitionDelay = '0s'; 
    }
});

const mytools = document.querySelectorAll('.my-tools');

window.addEventListener('scroll', () => {
  mytools.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.8) {
      card.style.transitionDelay = `${index * 0.2}s`;
      card.classList.add('show');
    } else {
      card.classList.remove('show');
      card.style.transitionDelay = '0s';
    }
  });
});
