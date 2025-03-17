$(document).ready(function () {
	const dialog = $('.dialog');
	const dialogImage = $('.dialog-image');
	const downloadImage = $("#downloadImage");

	function Hash() {
		return location.hash.substring(1);
	}
	if (Hash() != '') {
		open_dial()
	}


	dialog.on('click', function (e) {
		if ($(e.target).is('.dialog')) {
			window.location.hash = ""
		}
	})

	$(window).on('hashchange', function (e) {
		if (Hash() != '') {
			open_dial()
		} else {
			dialog.removeClass('active')
		}
	})

	function open_dial() {
		var element = $(`#id${Hash()}`)
		var bgImage = $(element).css("background-image");
		var url = bgImage.replace(/url\(["']?(.*?)["']?\)/, '$1');

		dialogImage.attr('src', url)
		downloadImage.attr('href', url)

		dialog.addClass('active')
	}
});


// document.addEventListener("DOMContentLoaded", () => {
//     const elements = document.querySelectorAll("main > div");
//     const count = Math.floor(elements.length / 6);

//     let selectedIndexes = new Set();
//     while (selectedIndexes.size < count) {
//         let randomIndex = Math.floor(Math.random() * elements.length);
//         selectedIndexes.add(randomIndex);
//     }

//     selectedIndexes.forEach(index => {
//         elements[index].style.gridColumn = "span 2";
//     });
// });