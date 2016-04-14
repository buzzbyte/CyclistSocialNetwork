
$('.smoothScroll').click(function(){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, "slow");
    current=$( $.attr(this, 'href') );
    return false;
});
