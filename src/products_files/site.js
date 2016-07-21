$(window).bind("load", function() {

	// SVG fallback
	svgeezy.init(false, 'png');

	//- Smooth scroll to anchor
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 600);
				return false;
			}
		}
	});

	$('a[data-open="open-modal"]').click( function(e) {
		e.preventDefault();
		//document.ontouchmove = function(e){ e.preventDefault(); }
		$('body, .view').addClass('modal-open');
		$('#contact-modal').velocity("transition.fadeIn", { duration: 300, delay: 0 });
		setTimeout(function() {
			$("#contact-modal .animation-el").velocity("transition.slideLeftBigIn", { duration: 800, stagger: 100, drag: true });
		}, 300);
	});

	$('a[data-dismiss="dismiss-modal"]').click( function(e) {
		e.preventDefault();
		//document.ontouchmove = function(e){ return true; }
		$('body, .view').removeClass('modal-open');
		if ($("#thankyou-message .icon").length) {
			$("#thankyou-message .icon").addClass('animation-el');
		}
		$(".tm-modal .animation-el").velocity("transition.slideLeftOut", { duration: 600, stagger: 100, drag: true });
		$('.tm-modal').velocity("transition.fadeOut", { duration: 600, delay: 700 });
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('body, .view').removeClass('modal-open');
			//document.ontouchmove = function(e){ return true; }
			if ($("#thankyou-message .icon").length) {
				$("#thankyou-message .icon").addClass('animation-el');
			}
			$(".tm-modal .animation-el").velocity("transition.slideLeftOut", { duration: 600, stagger: 100, drag: true });
			$('.tm-modal').velocity("transition.fadeOut", { duration: 600, delay: 700 });
		}
	});

	if ($('#thankyou-message').length){
		$("#thankyou-message .icon").velocity("transition.bounceIn", { duration: 800, delay: 400 });
		$("#thankyou-message .animation-el").velocity("transition.slideLeftBigIn", { duration: 800, stagger: 100 });
	}

	// Contact form validation
	// ------------------------------
	$(".contact-form form").validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			}
		},
		messages: {
			name: "Please enter your name",
			email: "Please enter a valid email address",
			message: "Please enter your message"
		}
	});

});


//- Fade out the scroll down arrow
//$(window).scroll(function() {
//	var scroll = $(window).scrollTop();
//	if (scroll <= 10) {
//		$('.arrow-down').fadeOut();
//	}
//});





