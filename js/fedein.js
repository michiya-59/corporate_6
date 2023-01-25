'use strict'

window.addEventListener('load', () => {
  // BBBが選ばれる理由 フェードイン
    const reason_content_left = document.getElementById('reason_content_left');
    const reason_content_right = document.getElementById('reason_content_right');
  
    window.addEventListener('scroll', () => {
      //フェードインする要素の上部の位置を取得する
      const fedein_elem_top_left = reason_content_left.getBoundingClientRect().top;
      const fedein_elem_top_right = reason_content_right.getBoundingClientRect().top;
      //ブラウザの高さを取得
      const window_height = window.innerHeight;
      // 画面に表示された時にフェードインさせる処理
      if (window_height > fedein_elem_top_left + 50){
        reason_content_left.classList.add('fadein-after');
      }
      if (window_height > fedein_elem_top_right + 50){
        reason_content_right.classList.add('fadein-after');
      }
    });
});
