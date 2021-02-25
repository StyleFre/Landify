let arrow = document.querySelector('.arrow');
let dropdown = document.querySelector('.dropdown');


 arrow.onclick = function () {
   arrow.classList.toggle('active-dropdown');
   dropdown.classList.toggle('actively');
 }



let header__burger = document.querySelector('.header__burger');
let header__nav = document.querySelector('.header__nav');
let back = document.querySelector('body');
let nav__flex = document.querySelector('nav__flex');


header__burger.onclick = function(){
  header__burger.classList.toggle('active');
  header__nav.classList.toggle('active');
  back.classList.toggle('lock');
}

nav__flex.onclick = function(){
  nav__flex.classList.remove('active');
  back.classList.toggle('lock');
}