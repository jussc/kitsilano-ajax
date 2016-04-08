/*-------------------------------------
| Document Ready
-------------------------------------*/
$(document).ready(function() {

	// $('#menu .first').trigger('click');

	// $('#sect1 .target').load('ajax-city.html');

/* Slideshow */


	console.log();

	function fade() {

		var lastImg = $('#container .slides img:last');

		$('#container .slides img:last').animate({'opacity':'0'}, 3000, function() {
			lastImg.prependTo('#container .slides');
			lastImg.css({'opacity':'1'});
			setTimeout(fade, 3000);
		});
	}

	setTimeout(fade, 3000);

/* Hovers */

$(function() {
	$('.upcoming .event li:nth-child(1)').hover(function() {
		$('div.popup1').show();
	}, function() {
		$('div.popup1').hide();
		});
	
});

$(function() {
	$('.upcoming .event li:nth-child(2)').hover(function() {
		$('div.popup2').show();
	}, function() {
		$('div.popup2').hide();
		});
	
});

$(function() {
	$('.upcoming .event li:nth-child(3)').hover(function() {
		$('div.popup3').show();
	}, function() {
		$('div.popup3').hide();
		});
	
});

/*-------------------------------------
| Gallery Image Hovers
-------------------------------------*/
function manage_galleries() {
	$('#gallery img')
		.animate({'opacity':'.5'}, 1000)
		.hover(
		function(){
			$(this).stop().animate({'opacity':'1'}, 500);
		},
		function() {
			$(this).stop().animate({'opacity':'.5'}, 500);
		}
	);
}

manage_galleries();

/*-------------------------------------
| AJAX Kill Links
-------------------------------------*/


/*-------------------------------------
| AJAX Load Web
-------------------------------------*/
/*function targetFadeUp() {
	$('#sect1 .target').animate({'opacity':'1'});
	manage_galleries();
}

function ajax_web(event) {
	event.preventDefault();

	$('#sect1 .target').stop(true).css({'opacity':'0'}).load('ajax-web.html #gallery', targetFadeUp);
}

$('#sect1 nav.ajax a.web').click(ajax_web);

$('#sect1 nav.ajax a.web').trigger('click');

function ajax_sketches(event) {
	event.preventDefault();

	$('#sect1 .target').stop(true).css({'opacity':'0'}).load('ajax-sketches.html #gallery', targetFadeUp);
}

$('#sect1 nav.ajax a.sketches').click(ajax_sketches);*/

function targetFadeUp() {
	$('#sect1 .target').animate({'opacity':'1'});
}

function ajax_city(event) {
	event.preventDefault();

	$('#sect1 .target').stop(true).css({'opacity':'0'}).load('ajax-city.html .container', targetFadeUp);

}

$('#menu .first').click(ajax_city);
$('#menu .first').trigger('click');


function ajax_outdoors(event) {
	event.preventDefault();

	$('#sect1 .target').stop(true).css({'opacity':'0'}).load('ajax-outdoors.html .container', targetFadeUp);

}

$('#menu .second').click(ajax_outdoors);

function ajax_contact(event) {
	event.preventDefault();

	$('#sect1 .target').stop(true).css({'opacity':'0'}).load('ajax-contact.html .container', targetFadeUp);

}

$('#menu .third').click(ajax_contact);

/*-------------------------------------
| AJAX Load Sketches
-------------------------------------*/


/*-------------------------------------
| AJAX After Load Assign Behaviors
-------------------------------------*/


/*-------------------------------------
| AJAX Default Gallery
-------------------------------------*/
/* Tabbed Lightboxes */

$('.gallery section:gt(0)').hide();

function tab_click(event) {
	event.preventDefault();

	$('.gallery nav a').removeClass('theChosenOne');
	$(this).addClass('theChosenOne');

	$('.gallery section').hide();

	var whichSection = $(this).attr('href');
	$(whichSection).show();

}

$('.gallery nav a').click(tab_click);


/* Lightboxes */

function light_on() {
	var theSrc = $(this).attr('src');
	$('#lb .light img').attr('src', theSrc);

	$('#lb').show();
}

function light_off() {
	$('#lb').hide();
}

$('.gallery img').click(light_on);
$('#lb .light .close').click(light_off);

$('#lb').click(light_off);

$(document).keyup(function(e) {
			if (e.keyCode == 27) { // escape key maps 	to keycode `27`
		// <DO YOUR WORK HERE>
		light_off();

		console.log('Escape of image success');
    }
});

/* stop propagation */

$('#lb .light img, #lb .light .text').click(function(event) {
	// event.preventDefault ();
	// this affects its parents/ancestors (could work with links)
	// instead do this:

	event.stopPropagation();
});




}); /* document ready over */


