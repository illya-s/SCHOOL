$(document).ready(function () {
	const dialog = $('.dialog');
	const player = $('#player');

	player.volume = 50

	$('.video-btn').each(function() {
		this.volume = 0;
	});
	$('.video-btn').hover(
		function () {
			this.play();
		},
		function () {
			this.pause();
			this.currentTime = 0;
		}
	)

	$(".video-btn").on("click", function (e) {
		e.preventDefault();

		var newFile = $(this).attr('src');
		player.attr("src", newFile);

		dialog.addClass('active')

		player.on('loadedmetadata', function() {
			player.get(0).play();
		});
	});

	$(document).on('click', function (e) {
		if (!$(e.target).closest('.dialog-cont, .video-btn').length) {
			dialog.removeClass('active')
			player.get(0).pause();
		}
	})
});