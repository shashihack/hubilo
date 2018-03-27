define(function (require) {

    "use strict";

        var $       = require('jquery'),
        Backbone    = require('backbone'),

        Feature = Backbone.Model.extend({

            urlRoot: "http://localhost:3000/features",

            initialize: function () {
                this.reports = new FeatureCollection();
                this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        FeatureCollection = Backbone.Collection.extend({

            model: Feature,

            url: "http://localhost:3000/features"

        });

    return {
        Feature: Feature,
        FeatureCollection: FeatureCollection
    };

});