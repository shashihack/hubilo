define(function (require) {

    "use strict";

        var $               = require('jquery'),
        Backbone            = require('backbone'),

        Feature = Backbone.Model.extend({

            //urlRoot: "http://localhost:3000/features",
            urlRoot: "/directory-rest-php/features",

            initialize: function () {
                this.reports = new FeatureCollection();
                this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        FeatureCollection = Backbone.Collection.extend({

            model: Feature,
            //url: "http://localhost:3000/features"
            url: "/directory-rest-php/features"

        }),

        originalSync = Backbone.sync;

    Backbone.sync = function (method, model, options) {
        if (method === "read") {
            options.dataType = "jsonp";
            return originalSync.apply(Backbone, arguments);
        }
    };

    return {
        Feature: Feature,
        FeatureCollection: FeatureCollection
    };


});