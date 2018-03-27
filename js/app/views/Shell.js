define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        models              = require('app/models/feature'),
        tpl                 = require('text!tpl/Shell.html'),

        template = _.template(tpl),
        $menuItems;

    return Backbone.View.extend({

        initialize: function () {
            var elements = document.getElementsByClassName("offsetme50");
            var i;
            for (i = 0; i < elements.length; i++) {
                var offset = elements[i].clientHeight * .7;   //.5 = 50%
                elements[i].setAttribute("data-wow-offset", offset);
            }
        },


        render: function () {
            this.$el.html(template());
            return this;
        },

        events: {
            "mouseenter .features" : "mouseoverfeatures",
            "mouseleave .features" : "mouseoutfeatures",
            "mouseenter .nav-container" : "mouseovercard",
            "mouseleave .nav-container" : "mouseoutcard",
            "click .feature-link" :  "hideFeatureDropdown",
            "click .nav_phone_btn_container img" : "phoneNavBtnClick",
            "click .nav_phone_dropdown .header-nav-button" : "closePhoneNav",
            "click .nav_feature_href" : "featureExitAnimation"
        },

        mouseoverfeatures: function(event) {
            $(".nav-container").addClass('show');
            clearTimeout(this.x);
            clearTimeout(this.y);
        },

        mouseoutfeatures: function(event) {
            this.x = setTimeout(function(){
                $(".nav-container").removeClass('show');
            },500);
        },

        mouseoutcard: function(event) {
            this.y = setTimeout(function(){
                $(".nav-container").removeClass('show');
            },250);
        },

        mouseovercard: function(event) {
            clearTimeout(this.x);
            clearTimeout(this.y);
        },

        hideFeatureDropdown: function(event) {
            $(".nav-container").removeClass('show');
        },

        phoneNavBtnClick: function(event){
            var theElement = $(".nav_phone_dropdown");
            theElement.toggleClass("open");
            if(theElement.hasClass("open")){
                theElement.slideDown(250);
                $(event.currentTarget).attr("src","pics/utility/close.png");
            }else{
                theElement.slideUp(500);
                $(event.currentTarget).attr("src","pics/utility/nav_btn.png");
            }
        },

        closePhoneNav: function(event){
            var theElement = $(".nav_phone_dropdown");
            theElement.toggleClass("open");
            theElement.slideUp(500);
            $(".nav_phone_btn_container img").attr("src","pics/utility/nav_btn.png");
        },

        featureExitAnimation: function(event) {
            event.preventDefault();
            var theThis = $(event.currentTarget);
            var href = theThis.attr("href");//get the href so we can navigate later

            var w = $(".feature_2r_container").length;
            var x = $(".feature_2c_container").length;
            var y = $(".feature_2rc_container").length;
            var z = $(".feature_2cc_container").length;

            var destination_page = href.split("#features/")[1];
            var current_page = $(".main_container_features_page .row-fluid").attr("id").split("r_f_")[1];

            if(destination_page != current_page){
              $(".feature_2r_container .feature_2r_images_container img.animated").each(function(){
                  var iThis = $(this);
                  if(iThis.hasClass("fadeInUp")){
                    iThis.removeClass("animated").removeClass("fadeInUp");
                    (function(href){
                      iThis.animate({top:40, opacity:'hide'}, 399,function() {
                        window.location = href;
                      })})(href);
                  }if(iThis.hasClass("zoomIn")){
                    iThis.removeClass("animated").removeClass("zoomIn");
                    (function(href){
                      iThis.animate({scale:2, opacity:'hide'}, 399,function() {
                        window.location = href;
                      })})(href);
                  }
              });
              $(".feature_2c_container td.animated").each(function(){
                  var iThis = $(this);
                  if(iThis.hasClass("fadeInLeft")){
                    iThis.removeClass("animated").removeClass("fadeInLeft");
                    (function(href){
                      iThis.animate({right:20, opacity:'hide'}, 400,function() {
                      })})(href);
                  }if(iThis.hasClass("fadeInRight")){
                    iThis.removeClass("animated").removeClass("fadeInRight");
                    (function(href){
                      iThis.animate({left:20, opacity:'hide'}, 399,function() {
                        window.location = href;
                      })})(href);
                  }
              });
              $(".feature_2cc_container td.animated").each(function(){
                  var iThis = $(this);
                  if(iThis.hasClass("fadeInLeft")){
                    iThis.removeClass("animated").removeClass("fadeInLeft");
                    (function(href){
                      iThis.animate({right:20, opacity:'hide'}, 400,function() {
                      })})(href);
                  }if(iThis.hasClass("fadeInRight")){
                    iThis.removeClass("animated").removeClass("fadeInRight");
                    (function(href){
                      iThis.animate({left:20, opacity:'hide'}, 400,function() {
                        window.location = href;
                      })})(href);
                  }
              });
              $(".feature_2rc_container .animated").each(function(){
                  var iThis = $(this);
                  if(iThis.hasClass("fadeInUp")){
                    iThis.removeClass("animated").removeClass("fadeInUp");
                    (function(href){
                      iThis.animate({bottom:20, opacity:'hide'}, 399,function() {
                        window.location = href;
                      })})(href);
                  }if(iThis.hasClass("fadeInDown")){
                    iThis.removeClass("animated").removeClass("fadeInDown");
                    (function(href){
                      iThis.animate({top:20, opacity:'hide'}, 401,function() {
                      })})(href);
                  }
              });
            }
            if(!w && !x && !y && !z){
              window.location = href;
            }
        },

    });

});
