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
  console.log(imgArray);
  console.log(slideNo);
	imgArray[slideNo].style.opacity = 1;
	setTimeout(function(){viewSlide(className, slideNo);}, 5000);
}