$(function(){

	$("#volume").click(function(){
		$(this).toggleClass('fa-volume-up fa-volume-off');
		$("#hero-video").prop('muted', function(){
			return ! $(this).prop('muted');
		});
	})

})
