
function showLogin(){
	$("#login_container").animate({
		opacity:.25,
		right:"+150%",//enough to get off of all screens
	}, 1500, function(){

	});
	$("#login_form").animate({
		//right:$("#login_form").parent().width() / 2+ $("login_form").width()/2 + $(document).width()/2
		left:"-=80%"
	}, 1500, function(){

	});
}

function showDefaultScreen(){
	$("#login_container").animate({
		opacity:.25,
		right:"-150%",//enough to get off of all screens
	}, 1500, function(){

	});
}