define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/Home.html'),
        bxslider            = require('jquery.bxslider'),

        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {

            //for initializing animation in auto generated sections
            function afterReveal( el ) {

                var screenWidth = $(window).width();
                var noOfSlides = 3;
                var rdnoOfSlides = 5;
                var singleSlideWidth = 370;
                var rdslideWidth = 200;

                $('.bxslider#clientphone').bxSlider({
                  pager: false,
                  auto: true,
                  pause: 1000,
                  nextSelector: '.slide_icon_right_container',
                  nextText: '',
                  prevSelector: '.slide_icon_left_container',
                  prevText: '',
                  slideWidth: 165,
                  minSlides: 1,
                  maxSlides: 1,
                  moveSlides: 1
                });
                $('.bxslider#testimonialphone').bxSlider({
                  pager: false,
                  auto: false,
                  touchEnabled: true,
                  preventDefaultSwipeX: false,
                  nextText: '',
                  prevText: '',
                  slideWidth: 80,
                  minSlides: 3,
                  maxSlides: 3,
                  moveSlides: 1
                });
                if(screenWidth >= 992){
                  noOfSlides = 3;
                  singleSlideWidth = 370;
                }else if(screenWidth >= 768 && screenWidth < 992){
                  noOfSlides = 2;
                  singleSlideWidth = 350;
                }else{
                  noOfSlides = 1;
                  singleSlideWidth = 300;
                }

                $('.bxslider#home').bxSlider({
                  pager: false,
                  nextSelector: '.slide_icon_right_container',
                  nextText: '<div class="slide_icon slide_icon_right" id="right"></div>',
                  prevSelector: '.slide_icon_left_container',
                  prevText: '<div class="slide_icon slide_icon_left" id="left"></div>',
                  slideWidth: singleSlideWidth,
                  minSlides: noOfSlides,
                  maxSlides: noOfSlides,
                  moveSlides: 1
                });

                if(screenWidth >= 1900){
                  rdnoOfSlides = 7;
                  rdslideWidth = 200;
                  $('.bxslider#rd').bxSlider({
                    pager: false,
                    auto: true,
                    pause: 1250,
                    nextSelector: '.right_arrow_column',
                    nextText: '<img class="slide_icon_right_container_rd" src="pics/requestdemo/right_arrow.png">',
                    prevSelector: '.left_arrow_column',
                    prevText: '<img class="slide_icon_left_container_rd" src="pics/requestdemo/left_arrow.png">',
                    slideWidth: rdslideWidth,
                    minSlides: rdnoOfSlides,
                    maxSlides: rdnoOfSlides,
                    moveSlides: 1
                  });
                }else if(screenWidth >= 1200 && screenWidth < 1900){
                  rdnoOfSlides = 5;
                  rdslideWidth = 200;
                  $('.bxslider#rd').bxSlider({
                    pager: false,
                    auto: true,
                    pause: 1250,
                    nextSelector: '.right_arrow_column',
                    nextText: '<img class="slide_icon_right_container_rd" src="pics/requestdemo/right_arrow.png">',
                    prevSelector: '.left_arrow_column',
                    prevText: '<img class="slide_icon_left_container_rd" src="pics/requestdemo/left_arrow.png">',
                    slideWidth: rdslideWidth,
                    minSlides: rdnoOfSlides,
                    maxSlides: rdnoOfSlides,
                    moveSlides: 1
                  });
                }else if(screenWidth >= 1000 && screenWidth < 1200){
                  rdnoOfSlides = 4;
                  rdslideWidth = 200;
                  $('.bxslider#rd').bxSlider({
                    pager: false,
                    auto: true,
                    pause: 1250,
                    nextSelector: '.right_arrow_column',
                    nextText: '<img class="slide_icon_right_container_rd" src="pics/requestdemo/right_arrow.png">',
                    prevSelector: '.left_arrow_column',
                    prevText: '<img class="slide_icon_left_container_rd" src="pics/requestdemo/left_arrow.png">',
                    slideWidth: rdslideWidth,
                    minSlides: rdnoOfSlides,
                    maxSlides: rdnoOfSlides,
                    moveSlides: 1
                  });
                }else if(screenWidth >= 700 && screenWidth < 1000){
                  rdnoOfSlides = 3;
                  rdslideWidth = 200;
                  $('.bxslider#rd').bxSlider({
                    pager: false,
                    auto: true,
                    pause: 1250,
                    nextSelector: '.right_arrow_column',
                    nextText: '<img class="slide_icon_right_container_rd" src="pics/requestdemo/right_arrow.png">',
                    prevSelector: '.left_arrow_column',
                    prevText: '<img class="slide_icon_left_container_rd" src="pics/requestdemo/left_arrow.png">',
                    slideWidth: rdslideWidth,
                    minSlides: rdnoOfSlides,
                    maxSlides: rdnoOfSlides,
                    moveSlides: 1
                  });
                }else if(screenWidth < 700){
                  rdnoOfSlides = 2;
                  rdslideWidth = 130;
                  $('.bxslider#rd').bxSlider({
                    pager: false,
                    auto: true,
                    pause: 900,
                    nextSelector: '.right_arrow_column',
                    nextText: '',
                    prevSelector: '.left_arrow_column',
                    prevText: '',
                    slideWidth: rdslideWidth,
                    minSlides: rdnoOfSlides,
                    maxSlides: rdnoOfSlides,
                    moveSlides: 1
                  });
                }

                //for displaying images after it gets loaded
                $(".feature_2r_images_container img").each(function(){
                    $(this).css("opacity","1");
                });
                $(".feature_2c_images_container img").each(function(){
                    $(this).css("opacity","1");
                });

                //for initializing scroll it plugin
                if(this.id == "hiw_banner_text"){
                    if(screenWidth < 900){
                        if(screenWidth < 700){
                            var equation_val = 9023.404 - (8.51 * screenWidth);
                            var yValue = (Math.round(equation_val*10)/10);
                            document.getElementById("howitworks_phone_svg").setAttribute("viewBox","0 99 612 "+yValue);
                        }
                    }
                }

                //trigger this function when the animation starts
                el.addEventListener('animationstart',function(event){
                    if(this.id == 'thetrigger1'){
                      console.log("hiw starts");
                      //the below code is for initializing the animation of how it works banner
                      $.getScript( "plugins/flat-surface-shader-master/flat-surface-shader.js", function( data, textStatus, jqxhr ){
                        $.getScript( "plugins/flat-surface-shader-master/shader.js", function( data, textStatus, jqxhr ) {});
                      });
                    }
                    if(this.id == "why_animation_point"){
                        setTimeout(function(){
                            $(".hub-why#why .individual_box .semi_circle_inner").show();
                            setTimeout(function(){
                                $(".hub-why#why .individual_box .semi_circle_outer").show();
                                setTimeout(function(){
                                    $(".hub-why#why .individual_box .images").css("visibility","visible");
                                    $(".hub-why#why .individual_box .images").css("opacity","1");
                                    setTimeout(function(){
                                        $(".hub-why#why .individual_box .sparkles").show();
                                    },900);
                                },700);
                            },400);
                        },100);
                    }else if(this.id == "ftrigger" || this.id == "ftrigger"){
                        setTimeout(function(){
                            $(".feature_2cc_container .app_banner_container .app_phone_img").addClass("app_banner_phone_animation");
                        },600);
                        setTimeout(function(){
                            $(".feature_2cc_container .app_banner_container .app_cloud_img").addClass("app_banner_cloud_animation");
                        },800);
                    }else if(this.id == "svg_animation_div"){
                        var iThis = $(this);
                        if ($(window).width() >= 768){
                            var first_classes = $(this).find(".first").attr('class');
                            iThis.find(".first").attr('class', first_classes.split(' on')[0]);
                        }
                        setTimeout(function(){
                            iThis.find(".only_screen").fadeIn(1100);
                        },2000);
                    }else if(this.id == "email_svg_animation_div"){
                        var iThis = $(this);
                        if ($(window).width() >= 768){
                            var first_classes = $(this).find(".first").attr('class');
                            iThis.find(".first").attr('class', first_classes.split(' on')[0]);
                        }
                        setTimeout(function(){
                            $(".autogenerated_email_section .website_static_container .website_static").hide();
                            $(".autogenerated_email_section .website_static_container .website_full").addClass("autogenerated_email_animation_max"); //?"+current_time+"
                            iThis.find(".mailbox_screen").show();
                        },2000);
                    }else if(this.id == "social_svg_animation_div"){
                        var iThis = $(this);
                        if ($(window).width() >= 768){
                            var first_classes = $(this).find(".first").attr('class');
                            iThis.find(".first").attr('class', first_classes.split(' on')[0]);
                        }
                        setTimeout(function(){
                            $(".autogenerated_social_section .website_static_container .browser_img").addClass("autogenerated_email_animation_max"); //?"+current_time+"
                            iThis.find(".fb_post").fadeIn(1300);
                        },2000);
                    }else if(this.id == "hiw_banner_text"){
                        if($(window).width() > 900){
                            var $word = $("#howitworks_svg path");
                            // prepare SVG
                            pathPrepare($word);
                            // init controller
                            var controller = new ScrollMagic.Controller();
                            // build tween
                            var tween = new TimelineMax()
                                .add(TweenMax.to($word, 0.9, {strokeDashoffset: 10, ease:Linear.easeNone}))
                                .add(TweenMax.to("path", 0.9, {strokeDashoffset: 10, ease:Linear.easeNone}), 0);
                            var theWidth = $(window).width();
                            var yfactor = 4950/1366;
                            var yValue = (Math.round((yfactor*theWidth)*10)/10);
                            // build scene
                            var scene = new ScrollMagic.Scene({triggerElement: "#hiw_banner_text", duration: yValue, tweenChanges: true})
                                            .setTween(tween)
                                            .addTo(controller);
                        }
                        else{
                            if($(window).width() > 700){
                                var $word = $("#howitworks_ipad_svg path");
                                // prepare SVG
                                pathPrepare($word);
                                // init controller
                                var controller = new ScrollMagic.Controller();
                                // build tween
                                var tween = new TimelineMax()
                                    .add(TweenMax.to($word, 0.9, {strokeDashoffset: 10, ease:Linear.easeNone}))
                                    .add(TweenMax.to("path", 0.9, {strokeDashoffset: 10, ease:Linear.easeNone}), 0);
                                var theWidth = $(window).width();
                                var yfactor = 5000/899;
                                var yValue = (Math.round((yfactor*theWidth)*10)/10)-250.0;
                                // build scene
                                var scene = new ScrollMagic.Scene({triggerElement: "#hiw_banner_text", duration: yValue, tweenChanges: true})
                                                .setTween(tween)
                                                .addTo(controller);
                            }else{
                                var $word = $("#howitworks_phone_svg path");
                                // prepare SVG
                                pathPrepare($word);
                                // init controller
                                var controller = new ScrollMagic.Controller();
                                // build tween
                                var tween = new TimelineMax()
                                    .add(TweenMax.to($word, 0.9, {strokeDashoffset: 10, ease:Linear.easeNone}))
                                    .add(TweenMax.to("path", 0.9, {strokeDashoffset: 10, ease:Linear.easeNone}), 0);
                                var theWidth = $(window).width();
                                var yfactor = 4700/414;
                                var yValue = (Math.round((yfactor*theWidth)*10)/10);

                                // build scene
                                var scene = new ScrollMagic.Scene({triggerElement: "#hiw_banner_text", duration: yValue, tweenChanges: true})
                                                .setTween(tween)
                                                .addTo(controller);
                            }
                        }
                    }
                });
            }

            function pathPrepare ($el){
                var lineLength = $el[0].getTotalLength();
                $el.css("stroke-dasharray", lineLength);
                $el.css("stroke-dashoffset", lineLength);
            }

            //for initializing wow(animate on scroll) plugin
            new WOW({
                callback: afterReveal,
                offset: 0
            }).init();

        },

        events: {
            "click .templates_section .image_container .interactive_container .block" : "selectEmailerTheme",
            "click .icons_container .notification_icon" : "selectNotification",
            "click #speaker_section .speaker_img_container .add-speaker-btn" : "addSpeakerHome",
            "click #speaker_section .icon .overlay" : "addSpeakerInImg",
            "click .speaker_section_table_phone .arrow_container .left_arrow" : "addSpeakerInImgOnPhoneLeft",
            "click .speaker_section_table_phone .arrow_container .right_arrow" : "addSpeakerInImgOnPhoneRight",
            "click .testimonial_main_container .arrow_container_phone .left_arrow_phone" : "prevTestimonialPhone",
            "click .testimonial_main_container .arrow_container_phone .right_arrow_phone" : "nextTestimonialPhone",
            "click #testimonial .testimonial_main_container .left_arrow" : "prevTestimonial",
            "click #testimonial .testimonial_main_container .right_arrow" : "nextTestimonial",
            "mouseenter .home_page_header .desc_column .hub-button" : "radbtnmouseenter1",
            "mouseleave .home_page_header .desc_column .hub-button" : "radbtnmouseleave1",
            "mouseenter #request_demo .request_demo_main_container .request_part .req-demo-btn" :"radbtnmouseenter1",
            "mouseleave #request_demo .request_demo_main_container .request_part .req-demo-btn" : "radbtnmouseleave1",
        },

        radbtnmouseenter1: function(event) {
            var iThis = $(event.currentTarget);
            var theImg = iThis.find(".arrow_img");
            theImg.removeClass("fadeOutLeft").addClass("animated").addClass("fadeInLeft").show();
        },

        radbtnmouseleave1: function(event) {
            var iThis = $(event.currentTarget);
            var theImg = iThis.find(".arrow_img");
            theImg.removeClass("animated").removeClass("fadeInLeft").addClass("animated").addClass("fadeOutLeft");
            setTimeout(function(){
              theImg.hide();
            },399);
        },

        selectEmailerTheme: function(event) {
            var iThis = $(event.currentTarget);
            var block_img = iThis.find("img");
            $(".templates_section .image_container .interactive_container .block").each(function(){
                $(this).find("img").hide();
            });
            block_img.show();
            $(".templates_section .image_container .interactive_container .right_container img").addClass("animated");
            $(".templates_section .image_container .interactive_container .right_container img").removeClass("fadeInUp");
            $(".templates_section .image_container .interactive_container .right_container img").addClass("fadeOutUp");
            setTimeout(function(){
                $(".templates_section .image_container .interactive_container .right_container img").attr("src","pics/features/email/theme_"+iThis.attr('id')+".png");
                $(".templates_section .image_container .interactive_container .right_container img").hide();
                $(".templates_section .image_container .interactive_container .right_container img").removeClass("fadeOutUp");
                $(".templates_section .image_container .interactive_container .right_container img").addClass("fadeInUp");
                $(".templates_section .image_container .interactive_container .right_container img").show();
            },400);
        },

        selectNotification: function(event){
            var iThis = $(event.currentTarget);
            var current_id = iThis.attr("id");
            var img_no = iThis.attr("no");
            $(".notifications_images_container img").each(function(){
                var theThis = $(this);
                if(theThis.hasClass("seen")){
                    theThis.fadeOut().removeClass("seen");
                    $(".notification_engagement .notification_icon").each(function(){
                        var temp = $(this).attr("no");
                        console.log(temp);
                        if(temp == img_no){
                            $(this).attr("src","pics/features/engagement/click_"+img_no+".png");
                        }else{
                            $(this).attr("src","pics/features/engagement/"+temp+".png");
                        }
                    });
                }
            });
            setTimeout(function(){
                if(!$(".notifications_images_container #"+current_id+"_img").hasClass('seen')){
                    $(".notifications_images_container #"+current_id+"_img").fadeIn().addClass("seen");
                }
            },400);
        },

        addSpeakerHome: function(event){
            var iThis = $(event.currentTarget);
            var screenWidth = $(window).width();
            var speakerAppearTime = 0;
            var device_section_name="";
            if(iThis.hasClass("add")){
                // this code is for animating multiple path svg
                if(screenWidth > 767 && screenWidth < 992){
                    var paths = document.querySelectorAll('.speaker_section_table_ipad #home_speaker_svg path');
                    [].forEach.call(paths, function(path) {
                        var theId = path.id;
                        if(theId == "path3" || theId == "path4"){
                            setTimeout(function(){
                                var length = path.getTotalLength();
                                path.style.transition = path.style.WebkitTransition = 'none'; // Clear any previous transition
                                path.style.strokeDasharray = length + ' ' + length; // Set up the starting positions
                                path.style.strokeDashoffset = '0';
                                path.getBoundingClientRect(); // Trigger a layout so styles are calculated & the browser picks up the starting position before animating
                                path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 0.5s ease-in-out'; // Define our transition
                                path.style.stroke = '#1FAAAD';
                                path.style.strokeDashoffset = length; // The animation begins !
                            },100);
                        }else{
                            var length = path.getTotalLength();
                            path.style.transition = path.style.WebkitTransition = 'none';
                            path.style.strokeDashoffset = '0';
                            path.getBoundingClientRect();
                            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                            path.style.stroke = '#1FAAAD';
                            path.style.strokeDashoffset = length;
                            path.style.strokeDasharray = length + ' ' + length;
                        }
                    });
                    device_section_name = "speaker_section_table_ipad";
                }else if(screenWidth > 992){
                    var paths = document.querySelectorAll('.speaker_section_table #home_speaker_svg path');
                    [].forEach.call(paths, function(path) {
                        var theId = path.id;
                        if(theId == "path3" || theId == "path4"){
                            setTimeout(function(){
                                var length = path.getTotalLength();
                                path.style.transition = path.style.WebkitTransition = 'none'; // Clear any previous transition
                                path.style.strokeDasharray = length + ' ' + length; // Set up the starting positions
                                path.style.strokeDashoffset = '0';
                                path.getBoundingClientRect(); // Trigger a layout so styles are calculated & the browser picks up the starting position before animating
                                path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 0.5s ease-in-out'; // Define our transition
                                path.style.stroke = '#1FAAAD';
                                path.style.strokeDashoffset = length; // The animation begins !
                            },100);
                        }else{
                            var length = path.getTotalLength();
                            path.style.transition = path.style.WebkitTransition = 'none';
                            path.style.strokeDashoffset = '0';
                            path.getBoundingClientRect();
                            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                            path.style.stroke = '#1FAAAD';
                            path.style.strokeDashoffset = length;
                            path.style.strokeDasharray = length + ' ' + length;
                        }
                    });
                    device_section_name = "speaker_section_table";
                }else{
                    $(".speaker_section_table_phone .arrow_container .left_arrow").attr("state","removed");
                    $(".speaker_section_table_phone .arrow_container .right_arrow").attr("state","removed");
                    device_section_name = "speaker_section_table_phone";
                }
                iThis.removeClass("add");
                iThis.text("Add Speaker");
                $("#speaker_section ."+device_section_name+" .left_column .icon").each(function(){
                   $(this).attr("state","removed");
                });
                $("#speaker_section ."+device_section_name+" .right_column .deliverable_feature_img_container").each(function(){
                    if($(this).hasClass("show")){
                        var theobj = $(this).find(".object");
                        theobj.removeClass("animated");
                        theobj.removeClass("pulse");
                        theobj.fadeOut();
                    }
                });
            }else{
                // this code is for animating multiple path svg
                if(screenWidth > 767 && screenWidth < 992){
                    var paths = document.querySelectorAll('.speaker_section_table_ipad #home_speaker_svg path');
                    var subject = "";
                    [].forEach.call(paths, function(path){
                        var theId = path.id;
                        if(theId == "path3" || theId == "path4"){
                            setTimeout(function(){
                                var length = path.getTotalLength();
                                path.style.transition = path.style.WebkitTransition = 'none';
                                path.style.strokeDasharray = length + ' ' + length;
                                path.style.strokeDashoffset = length;
                                path.getBoundingClientRect();
                                path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 0.5s ease-in-out';
                                path.style.stroke = '#1FAAAD';
                                path.style.strokeDashoffset = '0';
                            },450);
                        }else{
                            var length = path.getTotalLength();
                            path.style.transition = path.style.WebkitTransition = 'none';
                            path.style.strokeDasharray = length + ' ' + length;
                            path.style.strokeDashoffset = length;
                            path.getBoundingClientRect();
                            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                            path.style.stroke = '#1FAAAD';
                            path.style.strokeDashoffset = '0';
                        }
                    });
                    speakerAppearTime = 1000;
                    device_section_name = "speaker_section_table_ipad";
                }else if(screenWidth > 992){
                    var paths = document.querySelectorAll('.speaker_section_table #home_speaker_svg path');
                    var subject = "";
                    [].forEach.call(paths, function(path) {
                        var theId = path.id;
                        if(theId == "path3" || theId == "path4"){
                            setTimeout(function(){
                                var length = path.getTotalLength();
                                path.style.transition = path.style.WebkitTransition = 'none';
                                path.style.strokeDasharray = length + ' ' + length;
                                path.style.strokeDashoffset = length;
                                path.getBoundingClientRect();
                                path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 0.5s ease-in-out';
                                path.style.stroke = '#1FAAAD';
                                path.style.strokeDashoffset = '0';
                            },400);
                        }else{
                            var length = path.getTotalLength();
                            path.style.transition = path.style.WebkitTransition = 'none';
                            path.style.strokeDasharray = length + ' ' + length;
                            path.style.strokeDashoffset = length;
                            path.getBoundingClientRect();
                            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                            path.style.stroke = '#1FAAAD';
                            path.style.strokeDashoffset = '0';
                        }
                    });
                    speakerAppearTime = 1000;
                    device_section_name = "speaker_section_table";
                }else{
                    speakerAppearTime = 200;
                    $(".speaker_section_table_phone .arrow_container .left_arrow").attr("state","added");
                    $(".speaker_section_table_phone .arrow_container .right_arrow").attr("state","added");
                    device_section_name = "speaker_section_table_phone";
                }
                iThis.addClass("add");
                iThis.text("Remove Speaker");
                $("#speaker_section ."+device_section_name+" .left_column .icon").each(function(){
                   $(this).attr("state","added");
                });
                $("#speaker_section ."+device_section_name+" .right_column .deliverable_feature_img_container").each(function(){
                    if($(this).hasClass("show")){
                        subject = $(this);
                    }
                });
                setTimeout(function(){
                    var theobj = subject.find(".object");
                    theobj.addClass("animated");
                    theobj.addClass("pulse");
                    theobj.show();
                    setTimeout(function(){
                        theobj.removeClass("animated");
                        theobj.removeClass("pulse");
                    },1000);
                },speakerAppearTime);
            }
        },

        addSpeakerInImg: function(event){
            var iThis = $(event.currentTarget);
            var speaker_state = iThis.parent().attr("state");
            var speaker_subject = iThis.parent().attr("subject");
            $("#speaker_section .right_column .deliverable_feature_img_container").each(function(){
                $(this).css("display","none");
                $(this).removeClass("show");
            });
            if(speaker_state == "removed"){
                $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject+" .object").css("display","none");
            }else if(speaker_state == "added"){
                $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject+" .object").addClass("animated").addClass("pulse").show();
            }
            $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject).fadeIn();
            $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject).addClass("show");
        },

        addSpeakerInImgOnPhoneLeft: function(event){
            var iThis = $(event.currentTarget);
            var speaker_state = iThis.attr("state");
            var speaker_subject = iThis.attr("index");
            if(speaker_subject == '1'){
                speaker_subject = 'website';
                $(".speaker_section_table_phone .arrow_container .left_arrow").attr("index","4");
                $(".speaker_section_table_phone .arrow_container .right_arrow").attr("index","2");
            }else if(speaker_subject == '2'){
                speaker_subject = 'phone';
                $(".speaker_section_table_phone .arrow_container .left_arrow").attr("index","1");
                $(".speaker_section_table_phone .arrow_container .right_arrow").attr("index","3");
            }else if(speaker_subject == '3'){
                speaker_subject = 'email';
                $(".speaker_section_table_phone .arrow_container .left_arrow").attr("index","2");
                $(".speaker_section_table_phone .arrow_container .right_arrow").attr("index","4");
            }else if(speaker_subject == '4'){
                speaker_subject = 'social_media_post';
                $(".speaker_section_table_phone .arrow_container .left_arrow").attr("index","3");
                $(".speaker_section_table_phone .arrow_container .right_arrow").attr("index","1");
            }
            $("#speaker_section .right_column .deliverable_feature_img_container").each(function(){
                $(this).css("display","none");
                $(this).removeClass("show");
            });
            if(speaker_state == "removed"){
                $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject+" .object").css("display","none");
            }else if(speaker_state == "added"){
                $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject+" .object").addClass("animated").addClass("pulse").show();
            }
            $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject).addClass("animated").addClass("slideInRight");
            $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject).show();
            $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject).addClass("show");
            setTimeout(function(){
                $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject).removeClass("animated").removeClass("slideInRight");
            },500);
        },

        addSpeakerInImgOnPhoneRight: function(event){
            var iThis = $(event.currentTarget);
            var speaker_state = iThis.attr("state");
            var speaker_subject = iThis.attr("index");
            if(speaker_subject == '1'){
                speaker_subject = 'website';
                $(".speaker_section_table_phone .arrow_container .left_arrow").attr("index","4");
                $(".speaker_section_table_phone .arrow_container .right_arrow").attr("index","2");
            }else if(speaker_subject == '2'){
                speaker_subject = 'phone';
                $(".speaker_section_table_phone .arrow_container .left_arrow").attr("index","1");
                $(".speaker_section_table_phone .arrow_container .right_arrow").attr("index","3");
            }else if(speaker_subject == '3'){
                speaker_subject = 'email';
                $(".speaker_section_table_phone .arrow_container .left_arrow").attr("index","2");
                $(".speaker_section_table_phone .arrow_container .right_arrow").attr("index","4");
            }else if(speaker_subject == '4'){
                speaker_subject = 'social_media_post';
                $(".speaker_section_table_phone .arrow_container .left_arrow").attr("index","3");
                $(".speaker_section_table_phone .arrow_container .right_arrow").attr("index","1");
            }
            $("#speaker_section .right_column .deliverable_feature_img_container").each(function(){
                $(this).css("display","none");
                $(this).removeClass("show");
            });
            if(speaker_state == "removed"){
                $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject+" .object").css("display","none");
            }else if(speaker_state == "added"){
                $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject+" .object").addClass("animated").addClass("pulse").show();
            }
            $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject).addClass("animated").addClass("slideInLeft");
            $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject).show();
            $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject).addClass("show");
            setTimeout(function(){
                $("#speaker_section .right_column .deliverable_feature_img_container#"+speaker_subject).removeClass("animated").removeClass("slideInLeft");
            },500);
        },

        prevTestimonial: function(event){
            var current_t = 0;
            var prev_t = 0;
            var total_t = $("#testimonial .single_testimonial_container .individual_testimonial").length;
            $("#testimonial .single_testimonial_container .individual_testimonial").each(function(){
                var temp = $(this);
                if(temp.hasClass("show")){
                    current_t = parseInt(temp.attr("id").split("_")[1]);
                }
            });
            var temp = current_t-1;
            if(temp<1){
                prev_t = total_t;
            }else{
                prev_t = temp;
            }
            $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+current_t).addClass("animated").addClass("slideOutLeft").hide();
            setTimeout(function(){
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+prev_t).addClass("animated").addClass("slideInRight");
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+prev_t).show();
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+current_t).removeClass("animated").removeClass("slideOutLeft").removeClass("show");
                setTimeout(function(){
                    $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+prev_t).removeClass("animated").removeClass("slideInRight").addClass("show");
                },400);
            },400);
        },

        prevTestimonialPhone: function(event){
            var current_t = 0;
            var prev_t = 0;
            var total_t = $("#testimonial .single_testimonial_container .individual_testimonial").length;
            $("#testimonial .single_testimonial_container .individual_testimonial").each(function(){
                var temp = $(this);
                if(temp.hasClass("show")){
                    current_t = parseInt(temp.attr("id").split("_")[1]);
                }
            });
            var temp = current_t-1;
            if(temp<1){
                prev_t = total_t;
            }else{
                prev_t = temp;
            }
            $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+current_t).addClass("animated").addClass("slideOutLeft").hide();
            setTimeout(function(){
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+prev_t).addClass("animated").addClass("slideInRight");
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+prev_t).show();
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+current_t).removeClass("animated").removeClass("slideOutLeft").removeClass("show");
                setTimeout(function(){
                    $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+prev_t).removeClass("animated").removeClass("slideInRight").addClass("show");
                },400);
            },400);
        },

        nextTestimonialPhone: function(event){
            var current_t = 0;
            var next_t = 0;
            var total_t = $("#testimonial .single_testimonial_container .individual_testimonial").length;
            $("#testimonial .single_testimonial_container .individual_testimonial").each(function(){
                var temp = $(this);
                if(temp.hasClass("show")){
                    current_t = parseInt(temp.attr("id").split("_")[1]);
                }
            });
            var temp = current_t+1;
            if(temp>total_t){
                next_t = 1;
            }else{
                next_t = temp;
            }
            $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+current_t).addClass("animated").addClass("slideOutRight").hide();
            setTimeout(function(){
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+next_t).addClass("animated").addClass("slideInLeft");
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+next_t).show();
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+current_t).removeClass("animated").removeClass("slideOutRight").removeClass("show");
                setTimeout(function(){
                    $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+next_t).removeClass("animated").removeClass("slideInLeft").addClass("show");
                },400);
            },400);
        },

        nextTestimonial: function(event){
            var current_t = 0;
            var next_t = 0;
            var total_t = $("#testimonial .single_testimonial_container .individual_testimonial").length;
            $("#testimonial .single_testimonial_container .individual_testimonial").each(function(){
                var temp = $(this);
                if(temp.hasClass("show")){
                    current_t = parseInt(temp.attr("id").split("_")[1]);
                }
            });
            var temp = current_t+1;
            if(temp>total_t){
                next_t = 1;
            }else{
                next_t = temp;
            }
            $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+current_t).addClass("animated").addClass("slideOutRight").hide();
            setTimeout(function(){
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+next_t).addClass("animated").addClass("slideInLeft");
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+next_t).show();
                $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+current_t).removeClass("animated").removeClass("slideOutRight").removeClass("show");
                setTimeout(function(){
                    $("#testimonial .single_testimonial_container .individual_testimonial#testimonial_"+next_t).removeClass("animated").removeClass("slideInLeft").addClass("show");
                },400);
            },400);
        },

        render: function () {
            this.$el.html(template());
            return this;
        }

    });

});
