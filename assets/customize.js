/* ブランドストーリ */
function fadeAnime(){
    $('.fadeInTrigger').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeIn');
		}else{
		$(this).removeClass('fadeIn');
		}
	});
}

$(window).scroll(function (){
    fadeAnime();
});
$(window).on('load', function(){
    fadeAnime();
});

/* メディアキット */
$("#js-copy").on("click", function () {
	let copyText = document.querySelector('.copy-text').textContent;
	const copyTarget = document.getElementById("js-copy");

	navigator.clipboard.writeText(copyText);
	copyTarget.textContent = 'Copied!';
});

/* 配送 */
$(document).ready(function(){
$(".ms__field textarea").removeAttr('ご希望の配送日時を記載してください。・配送日のご指定は7日後から受付しております。例えば本日が5/25の場合、6/1からのご指定が可能です。・時間帯のご指定は下記よりご選択ください。- 指定なし- 午前中- 14時~16時- 16時~18時- 18時~20時- 19時~21時記入例）6/1 14時~16時');});
