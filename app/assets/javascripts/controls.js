$(function(){

	$("#volume").click(function(){
		$(this).toggleClass('fa-volume-up fa-volume-off');
		$("#hero-video").prop('muted', function(){
			return ! $(this).prop('muted');
		});
	})

	$("#hero-video").bind("ended", function() {
  	$(this).hide();
  	$("#landing-container").hide();
  	$("#landing-container").fadeIn(3000);

	});

})
