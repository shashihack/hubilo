define(function (require) {

    "use strict";

        var $               = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/Feature.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {
            // the footer a tag on click kept the new page to bottom so this code brings the new page rendered to the top
            setTimeout(function() {
                window.scrollTo(0, 0);
            }, 1);
        },

        render: function () {
            this.$el.html(template(this.model.attributes));
            return this;
        }
    });

});
