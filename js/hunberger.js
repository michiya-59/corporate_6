'use strict'

window.addEventListener('load', () => {
  // ハンバーガーメニュー
  const hunburger_menu = document.getElementById('hunburger_menu');
  const header = document.getElementById('header');
  const mask_menu = document.getElementById('mask_menu');
  const studio = document.getElementById('studio');
  const summary = document.getElementById('summary');
  const free_entry = document.getElementById('free_entry');

  hunburger_menu.addEventListener('click', () => {
    header.classList.toggle('open');
  });
  mask_menu.addEventListener('click', () => {
    header.classList.toggle('open');
  });
});
