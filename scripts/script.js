$(document).ready(function() {

    $('.more').click(function(e) {
    	e.preventDefault();
    	$('.hidden-p').toggle();
    	if ($(this).hasClass('wrapped')){
    		$(this).text('Скрыть').removeClass('wrapped');
    	}
    	$(this).text('Показать больше').addClass('wrapped');
    });

});