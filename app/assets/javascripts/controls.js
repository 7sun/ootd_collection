$(window).load(function(){

	console.log("window loaded!");

	$("#volume").click(function(){
		console.log("volume clicked");
		$(this).toggleClass('fa-volume-up fa-volume-off');
		$("#hero-video").prop('muted', function(){
			return ! $(this).prop('muted');
		});
	})

	$("#hero-video").bind("ended", function() {
  	$(this).hide();
  	console.log("fading in bg");
  	$("#landing-container").hide();
  	$("#landing-container").fadeIn(3000);

	});

})
