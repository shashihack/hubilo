jQuery(document).ready(function($) {
   
   'use strict';
   
   //REV SLIDER
 //   jQuery('.tp-banner').show().revolution(
	// {
	// 	dottedOverlay:"none",
	// 	delay:9000,
	// 	hideThumbs: 0,
	// 	// startwidth:1170,
	// 	// startheight:700,
	// 	hideThumbs:0,
		
	// 	thumbWidth:100,
	// 	thumbHeight:50,
	// 	thumbAmount:0,
		
	// 	navigationType:"none",
	// 	navigationArrows:"solo",
	// 	navigationStyle:"preview1",
		
	// 	touchenabled:"on",
	// 	onHoverStop:"on",
		
	// 	swipe_velocity: 0.7,
	// 	swipe_min_touches: 1,
	// 	swipe_max_touches: 1,
	// 	drag_block_vertical: false,
								
								
	// 	keyboardNavigation:"on",
		
	// 	navigationHAlign:"center",
	// 	navigationVAlign:"bottom",
	// 	navigationHOffset:0,
	// 	navigationVOffset:20,

	// 	soloArrowLeftHalign:"left",
	// 	soloArrowLeftValign:"center",
	// 	soloArrowLeftHOffset:20,
	// 	soloArrowLeftVOffset:0,

	// 	soloArrowRightHalign:"right",
	// 	soloArrowRightValign:"center",
	// 	soloArrowRightHOffset:20,
	// 	soloArrowRightVOffset:0,
				
	// 	shadow:0,
	// 	fullWidth:"off",
	// 	fullScreen:"on",

	// 	spinner:"spinner0",
		
	// 	stopLoop:"off",
	// 	stopAfterLoops:-1,
	// 	stopAtSlide:-1,

	// 	shuffle:"off",
		
								
	// 	forceFullWidth:"off",						
	// 	fullScreenAlignForce:"off",						
	// 	minFullScreenHeight:"400",						
								
	// 	hideThumbsOnMobile:"off",
	// 	hideNavDelayOnMobile:1500,						
	// 	hideBulletsOnMobile:"off",
	// 	hideArrowsOnMobile:"off",
	// 	hideThumbsUnderResolution:0,
		
	// 	hideSliderAtLimit:0,
	// 	hideCaptionAtLimit:0,
	// 	hideAllCaptionAtLilmit:0,
	// 	startWithSlide:0,
	// 	fullScreenOffsetContainer: ".header"	
	// });
   
	  
    //SMOOTH SCROLL EFFECT
    $('[data-toggle="elementscroll"]').on("click", function(){    	
    	'use strict';
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    		var target = $(this.hash);
    		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    		if (target.length) {
    			$('html,body').animate({ scrollTop: target.offset().top }, 1000);
    			return false;
    		}
    	}
    	
    });  
	 
	$('.event-start').hide();
	$('.event-over').hide(); 	 
    //COUNTDOWN
    var date=$("#eventStartDate").val();
    var d = new Date(date);
    var year=d.getFullYear();
    var month=d.getMonth();
    var day=d.getDate();
    $('#countdown').countdown({until: new Date(year, month, day+1), padZeroes: true});		  		
    

	//CHANGE THE TEXT OF CLOCK
    var milliseconds = Math.floor((new Date).getTime()/1000);
    var endDatemili=$("#eventEndDateMili").val();
    var startDatemili=$("#eventStartDateMili").val();

    if(milliseconds>startDatemili && milliseconds<endDatemili){
    	$('.event-join').hide();
    	$('.event-clock').hide();
    	$('.event-start').show();
    	$('.event-over').hide(); 
    }else if(milliseconds>endDatemili){
    	$('.event-join').hide();
    	$('.event-clock').hide();
    	$('.event-start').hide();
    	$('.event-over').show();    	
    }
 	


    //AGENDA SLIDER
    $('a[id^="Program_"]').on('click',function(){
        var Id=this.id.split('_');
        if($('#'+Id[0]+''+Id[1]+'').length >0){
            if($('#'+Id[0]+''+Id[1]+'').hasClass('in')){
                $('#Speaker_'+this.id+'').show();
            }else{
                $('#Speaker_'+this.id+'').hide();
            }                    
        }
     });
	 
	 	
	//MAGNIFIC POPUP IMAGE
	$('.image-popup').magnificPopup({
		type:'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},		
	});
        
    
	    //FAQ TOGGLE 
	    $('.faqs dd').hide();
	    $('.faqs dt').on({
	        click : function(){ $(this).next().slideToggle('normal'); },
	        mouseenter : function(){ $(this).addClass('hover'); },
	        mouseleave : function(){ $(this).removeClass('hover'); }
	    });
	  
	  
	//OWLCAROUSEL FUNFACT CAROUSEL
	var owl = $("#funfacts-carousel");
	  owl.owlCarousel({
		  itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 4],
			[1000, 4],
			[1200, 4],
			[1600, 4]
		  ],
		  navigation : false,
		  navigationText : ['<i class="pe-4x pe-7s-angle-left pe-border"></i>','<i class="pe-4x  pe-7s-angle-right pe-border"></i>'],
	  });
	  
		
	// FUNFACTS
	 $('.number').counterUp({
		delay: 10,
		time: 3000
	});
	
	//FIX HOVER EFFECT ON IOS DEVICES
	document.addEventListener("touchstart", function(){}, true);
	
});


$(window).load(function(){
		
    
	$("#nav-primary").sticky({ topSpacing: 0, });
	
    //PRELOADER
    $('#preload').delay(30004444444).fadeOut('fast'); // will fade out the white DIV that covers the website.
	
	
	//CUSTOM TOOLBAR'
	 $('div[id^="content_"]').mCustomScrollbar({
        theme: "dark-3",
		live: "on",
      });

	 $('div[id^="exhibitorContent_"]').mCustomScrollbar({
        theme: "dark-3",
		live: "on",
      });

	 $('div[id^="sponsorContent_"]').mCustomScrollbar({
        theme: "dark-3",
		live: "on",
      });

});

// REGISTER FORM FUNCTION
var send_mail = function(eventId){
	
	'use strict';
	send_mail
	var name  = $("#name").val();
	var email = $("#email").val();
	var message  = $("#message").val();
	var orgEmail  = $("#organizer-email").val();
	var eventName  = $("#eventName-email").val();

 	if ( name=="" ){ $("#error").text("Name area is empty!"); $("#name").focus(); }
	else if ( email=="" ){ $("#error").text("Email address area is empty!"); $("#email").focus(); }
	else if ( message=="" ){ $("#error").text("Message area is empty!"); $("#message").focus(); }
	else {
		$("#error").text("");
		$.post("mail.php", { name:name, email:email, message:message, organizerEmail:orgEmail, eventName:eventName }, function( result ){
			if ( result["status"] || result["status"] == true){
				$("#error").text("Your contact form is sent.");
				setTimeout(function(){
					$("#name").val("");
					$("#email").val("");
					$("#message").val("");
				}, 3000);
				sendMessageCountIncrement(eventId);
			} else {
				$("#error").text("Your contact form isn't sent. Please check fields and try again.");
			}
		});
	}

};

