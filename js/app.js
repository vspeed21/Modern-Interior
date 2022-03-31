const navBtn = document.querySelector('.nav__boton');
const navBtnI = document.querySelector('.nav__boton i');
const navMenu = document.querySelector('.nav__menu');
const titulo = document.querySelector('.titulo')

navBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav__menu--visible');
  

  if(navMenu.classList.contains('nav__menu--visible')){
    navBtnI.classList.remove('fa-solid', 'fa-bars');
    navBtnI.classList.add('fa-solid', 'fa-xmark');
    titulo.style.display = 'none'
  }else{
    navBtnI.classList.remove('fa-solid', 'fa-xmark');
    navBtnI.classList.add('fa-solid', 'fa-bars');
    titulo.style.display = 'block'
  }
});