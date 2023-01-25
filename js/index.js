'use strict'

// ハンバーガーメニュー
window.onload = function(){
  const hunburger_menu = document.getElementById('hunburger_menu');
  const header = document.getElementById('header');

  hunburger_menu.addEventListener('click', () => {
    header.classList.toggle('open');
  });
}

// 写真のスライドショー
window.addEventListener('load', function () {
	viewSlide('.main_visual_right img');
});

function viewSlide(className, slideNo = -1){
	let imgArray = document.querySelectorAll(className);
	if (slideNo >= 0) {
		//初回以外は現在のスライドを消す
		imgArray[slideNo].style.opacity = 0;
	}
	slideNo++;
	if (slideNo >= imgArray.length) {
		slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
	}

	imgArray[slideNo].style.opacity = 1;
	setTimeout(function(){viewSlide(className, slideNo);}, 5000);
}

// BBBが選ばれる理由 フェードイン
window.onload = function(){
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
}