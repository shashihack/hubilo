define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/Requestdemo.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {

            // the footer a tag on click kept the new page to bottom so this code brings the new page rendered to the top
            setInterval(changeImg, 1500);
            function changeImg(){
              var nextIndex = 2;
              var index = parseInt($(".req_demo_banner_main_container .main_image_container .screen_container img.show").attr("index"));
              if(index == 4){
                  nextIndex = 1;
              }else{
                  nextIndex = index+1;
              }
              $(".req_demo_banner_main_container .main_image_container .screen_container #r_d_img_"+index).removeClass("show");
              $(".req_demo_banner_main_container .main_image_container .screen_container #r_d_img_"+nextIndex).addClass("show");
            }
        },

        render: function () {
            this.$el.html(template());
            return this;
        }

    });

});
