const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const homeLink = document.querySelector('#home');
const aboutLink = document.querySelector('#aboutButton');
const projectsLink = document.querySelector('#projectsButton');
const contactLink = document.querySelector('#contactButton');
const colorNavBar = document.querySelector('#navbar');

const btnProjectsView = document.querySelector('#btnProjectsView')

// Ajouter un gestionnaire d'événements clic au bouton "hamburger"
toggleButton.addEventListener('click', function () {
  // Masquer ou afficher le menu de navigation en plein écran en fonction de son état actuel
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'flex';
    navMenu.style.position = 'fixed';
    navMenu.style.top = '0';
    navMenu.style.left = '0';
    navMenu.style.right = '0';
    navMenu.style.bottom = '0';
    navMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    navMenu.style.zIndex = '999';
  }
});

// Ajouter un gestionnaire d'événements clic au premier lien
homeLink.addEventListener('click', function () {
  // Masquer le menu de navigation lorsque le lien est cliqué
  if (window.innerWidth < 768) {
    navMenu.style.display = 'none';
  }
});
aboutLink.addEventListener('click', function () {
  if (window.innerWidth < 768) {
    navMenu.style.display = 'none';
  }
})
projectsLink.addEventListener('click', function () {
  if (window.innerWidth < 768) {
    navMenu.style.display = 'none';
  }
})
projectsLink.addEventListener('click', function () {
  if (window.innerWidth < 768) {
    navMenu.style.display = 'none';
  }
})

// changement de style du la nav-bar
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    colorNavBar.style.backgroundColor = '#000';
  } else {
    colorNavBar.style.backgroundColor = 'transparent';
  }
})
const alertBoxText = document.getElementById('alert-box')
window.onerror = function(message, url, line, column, error) {
  const newTextError = document.createElement('p');
  newTextError.textContent = message;
  alertBoxText.appendChild(newTextError)

  showAlertBox()
};
function showAlertBox() {
  document.getElementById("alert-box").style.display = "block";
}

function closeAlertBox() {
  document.getElementById("alert-box").style.display = "none";
}
