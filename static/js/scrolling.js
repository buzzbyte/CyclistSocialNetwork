
$('.smoothScroll').click(function(){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, "slow");
    current=$( $.attr(this, 'href') );
    return false;
});

$('#navbar ul li a').click(function(e) {
	
    $('#navbar ul li a.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});
