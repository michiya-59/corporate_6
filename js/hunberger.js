'use strict'

window.addEventListener('load', () => {
  // ハンバーガーメニュー
  const hunburger_menu = document.getElementById('hunburger_menu');
  const header = document.getElementById('header');
  const mask_menu = document.getElementById('mask_menu');

  hunburger_menu.addEventListener('click', () => {
    header.classList.toggle('open');
  });
  mask_menu.addEventListener('click', () => {
    header.classList.toggle('open');
  });
});
