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
