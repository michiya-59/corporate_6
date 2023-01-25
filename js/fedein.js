'use strict'

window.addEventListener('load', () => {
  // BBBが選ばれる理由 フェードイン
    const reason_content_left = document.getElementById('reason_content_left');
    const reason_content_right = document.getElementById('reason_content_right');

    const school_content_part_left = document.getElementById('school_content_part_left');
    const school_content_part_right = document.getElementById('school_content_part_right');
    const school_content_part_left2 = document.getElementById('school_content_part_left2');
    const school_content_part_right2 = document.getElementById('school_content_part_right2');
  
    window.addEventListener('scroll', () => {
      //フェードインする要素の上部の位置を取得する
      const fedein_elem_top_left = reason_content_left.getBoundingClientRect().top;
      const fedein_elem_top_right = reason_content_right.getBoundingClientRect().top;

      const school_content_part_left_top = school_content_part_left.getBoundingClientRect().top;
      const school_content_part_right_top = school_content_part_right.getBoundingClientRect().top;
      const school_content_part_left2_top = school_content_part_left2.getBoundingClientRect().top;
      const school_content_part_right2_top = school_content_part_right2.getBoundingClientRect().top;
      //ブラウザの高さを取得
      const window_height = window.innerHeight;
      // 画面に表示された時にフェードインさせる処理
      if (window_height > fedein_elem_top_left + 50){
        reason_content_left.classList.add('fadein-after');
      }
      if (window_height > fedein_elem_top_right + 50){
        reason_content_right.classList.add('fadein-after');
      }
      if (window_height > school_content_part_left_top + 50){
        school_content_part_left.classList.add('fadein-after2');
      }
      if (window_height > school_content_part_right_top + 50){
        school_content_part_right.classList.add('fadein-after2');
      }
      if (window_height > school_content_part_left2_top + 50){
        school_content_part_left2.classList.add('fadein-after2');
      }
      if (window_height > school_content_part_right2_top + 50){
        school_content_part_right2.classList.add('fadein-after2');
      }
    });
});
