$(document).ready(function() {

	// VARIABLES
	var navOpenWidth;
	var navClosedWidth;
	var unitValue;
	var navIsOpen  = false;


	// EVENT HANDLERS
	$("#sideNav").hover(
		function () {
			if(window.innerWidth>=978){
				showNav();
			}
		},
		function() {
			if(window.innerWidth>=978){
				hideNav();
			}
		}
	 );

	 $('#sideNav').on('click', function(){

		if(window.innerWidth<978){
			if(navIsOpen == false){
				navIsOpen  = true;
				showNav();
			} else {
				navIsOpen = false;
				hideNav();
			}
		}
	});

	$("nav a").on("tap", function(){
		if(navIsOpen == true){
			event.stopPropagation();
		}

		 //other behaviors...
	})




	// FUNCTIONS
	function initializeInterface(){
		setNavDimensions();
		initializeNav();
	};

	function setNavDimensions(){
		if(window.innerWidth>=978){
			// 222 - 60
			navOpenWidth = 300;
			navClosedWidth = 80;
			unitValue = "px";
		} else if(window.innerWidth<978 && window.innerWidth>=768){
			// 24.2 - 10
			navOpenWidth = 35;
			navClosedWidth = 10;
			unitValue = "%";
		} else if(window.innerWidth<768){

		};
	};

	function initializeNav(){
		$("#sideNav").css("width", navClosedWidth + unitValue);

		$("#sideNav").css("opacity", ".9");

		$("#sideNav span").removeClass("navOpen");
		$("#content").css("left", "0px");
		$("#content").css("position", "static");
		navIsOpen = false;
	};

	function hideNav(){
		$("#sideNav").stop(true).animate({
			width: navClosedWidth + unitValue
		}, 500, "easeOutExpo");
		$("#sideNav span").removeClass("navOpen");
		$("#content").stop(true).animate({
			left: 0
		}, 500, "easeOutExpo", function(){
			$("#content").css("position", "static");
		});
	}

	function showNav(){
		$("#content").css("position", "absolute");
		$("#sideNav").stop(true).animate({
			width: navOpenWidth + unitValue
		}, 500, "easeOutExpo");
		$("#sideNav span").addClass("navOpen");
		$("#content").stop(true).animate({
			left: navOpenWidth + unitValue
		}, 500, "easeOutExpo");
	};

	$(window).resize(function() {
		setNavDimensions();
		initializeNav();
	});



		$(".tab").click(function() {



		if($(this).hasClass("active")){
			$(".content").hide();
			$(this).removeClass("active");
		} else {
			$(".content").hide();
			  var activeTab = $(this).attr("rel");
			  $("#"+activeTab).fadeIn();

			  $(".tabs").removeClass("active");
			  $(this).addClass("active");


			  $(".tab").removeClass("d_active");
			  $(".tab[rel^='"+activeTab+"']").addClass("d_active");
		}


    });

	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// hide #back-top first
	$("#back-top").hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});


	// INITIALIZATION
	initializeInterface();



});
