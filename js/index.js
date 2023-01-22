'use strict'

window.onload = function(){
  const hunburger_menu = document.getElementById('hunburger_menu');
  const header = document.getElementById('header');

  hunburger_menu.addEventListener('click', () => {
    header.classList.toggle('open');
  });
}