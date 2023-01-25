'use strict'

window.addEventListener('load', () => {
  // ハンバーガーメニュー
  const hunburger_menu = document.getElementById('hunburger_menu');
  const header = document.getElementById('header');
  console.log(hunburger_menu);
  console.log(header);

  hunburger_menu.addEventListener('click', () => {
    header.classList.toggle('open');
  });
});
