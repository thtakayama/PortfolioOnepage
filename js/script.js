const imagensGaleria = document.querySelectorAll('.grid-gallery img');

imagensGaleria.forEach((item) => {
  if(imagensGaleria.length > 3) {
    item.style.marginBottom = 1.25 + 'rem';
  }
});


const imagensPerfil = document.querySelectorAll('.profile-img img');
console.log(imagensPerfil);
imagensPerfil.forEach((item) => {
  if(item.width > item.height) {
    item.style.height = '100%';
    item.style.width = 'auto';
  }
});

const tabButtons = document.querySelectorAll('[data-tab="buttons"] li');
const btnTodos = tabButtons[0];
const btnPets = tabButtons[1];
const btnPaisagens = tabButtons[2];
const btnCasamentos = tabButtons[3];
const tabTodos = document.querySelectorAll('[data-tab="todos"] img');
const tabPets = document.querySelectorAll('[data-tab="pet"]');
const tabPaisagens = document.querySelectorAll('[data-tab="paisagem"]');
const tabCasamentos = document.querySelectorAll('[data-tab="casamento"]');

function desaparecerTodos() {
  tabTodos.forEach((item) => {
    item.style.display='none';
  });
};

function tabAparecer(tabButton, tabContent) {
  tabButton.addEventListener('click', function() {
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
  
    this.classList.add('active');

    desaparecerTodos();
  
    tabContent.forEach((item) => {
      item.style.display='block';
      item.style.animation='show 1s forwards';
    })
  })
}

tabAparecer(btnTodos, tabTodos);
tabAparecer(btnPets, tabPets);
tabAparecer(btnPaisagens, tabPaisagens);
tabAparecer(btnCasamentos, tabCasamentos);

