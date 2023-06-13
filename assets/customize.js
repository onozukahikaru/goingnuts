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
	if (!navigator.clipboard) {
		alert("このブラウザは対応していません");
		return;
	}
});
$("#js-copy-owner").on("click", function () {
	let copyText = document.querySelector('.copy-owner').textContent;
	const copyTarget = document.getElementById("js-copy-owner");

	navigator.clipboard.writeText(copyText);
	copyTarget.textContent = 'Copied!';
	if (!navigator.clipboard) {
		alert("このブラウザは対応していません");
		return;
	}
});
