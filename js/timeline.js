$(document).ready(function($){
    var $timeline_block = $('.timeline-block');

    //hide timeline blocks which are outside the viewport
    var i = 0;
    $timeline_block.each(function(){
        if(i){
            if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
                $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
            }
        }
        i=1;
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-icon').hasClass('is-hidden') ) {
                $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
            if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
                $(this).find('.timeline-icon, .timeline-content').removeClass('bounce-in').addClass('is-hidden');
            }
        });
    });


});