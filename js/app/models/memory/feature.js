define(function (require) {

    "use strict";

        var $               = require('jquery'),
        Backbone            = require('backbone'),

        features = [
            {"id": 1, "featureName": "Website", "designType" : "two_rows", "fg_img":"website/browser.png", "bg_img":"website/bg_browser.png", "banner_heading":"Get a stunningly beautiful event website", "banner_text":"Communicate the story of your event to your audience through a magnificent and dynamic website which is generated automatically within a few clicks.", "metakeywords" : "Event Website, Event Site, Create Event Website, Event Management Website, Event Website Template, Event Website Design, Event Website in India", "pageTitle":"Get Your Event Website Live In 24 Hours | Hubilo", "metadesc":"Communicate the story of your event to your audience through a magnificent and dynamic event website which is generated automatically within a few clicks."},
            {"id": 2, "featureName": "App", "designType" : "two_columns_custom", "img":"app/app_banner.png", "banner_heading":"Impress with a beautiful event app", "banner_text":"Get your native event app auto generated within minutes to give your attendees a worthwhile experience", "metakeywords" : "Event Application**, **Event App, Event Planning Application, Event Organizer Application, Event Management Application, Create Event Application", "pageTitle":"Build An Event Application Similar To Your Website | Hubilo", "metadesc":"Make your event application look exactly like your event website and give your audience a similar experience across both the platforms."},
            {"id": 3, "featureName": "Email", "designType" : "two_columns", "img":"email/email_banner.png", "banner_heading":"Email Campaigns", "banner_text":"Create and run different email campaigns to build a loyal customer base and stay connected with them without going through painfully long processes.", "metakeywords" : "Event Email Marketing, Event Marketing, Email Marketing Events, Email Marketing Automation, Events in Marketing, Email-Marketing", "pageTitle":"Promote Your Event Through Email Marketing | Hubilo", "metadesc":"Create and run different Email marketing campaigns to build a loyal customer base and stay connected with them without going through long processes."},
            {"id": 4, "featureName": "DigitalMarketing", "designType" : "two_columns", "img":"digital_marketing/digital_marketing_banner.png", "banner_heading":"Reach out to your audience", "banner_text":"Create Buzz on social media about your event with these effective features", "metakeywords" : "Event Promotion**, **Event Promotions, Digital Marketing Events, Social Media Marketing for Event, Promtional Event, Event Social Media Plan", "pageTitle":"Event Promotion Made Easy Social Media | Hubilo", "metadesc":"Create Buzz on social media about your event with event promotion features available at your own DIY Event Management Software."},
            {"id": 5, "featureName": "CustomForms", "designType" : "two_columns", "img":"custom_form/custom_form_banner.png", "banner_heading":"Easy to Set up Registration Forms", "banner_text":"Create your own registration forms that are quick to set up and easily manageable.", "metakeywords" : "Event Registration, Online Event Registration, Event Registration Form, Event Registration System", "pageTitle":"Easy To Set Up Registrations Forms | Hubilo", "metadesc":"Create your own event registration forms that are quick to set up and easily manageable. No need of any external integrations for the registration form."},
            {"id": 6, "featureName": "Ticketing", "designType" : "two_columns", "img":"ticketing/ticketing_banner.png", "banner_heading":"Comprehensive Ticketing", "banner_text":"Create the event tickets on your dashboard and get a secured  payment interface integrated, for smooth registrations", "metakeywords" : "Event Ticketing, Event Ticketing System, Event Ticketing Management, Sell Tickets Online, Ticketing System", "pageTitle":"Event Ticketing, Management & Payment- All at one Place | Hubilo", "metadesc":"Sell event tickets on your own domain. Create the event tickets on your dashboard and get a secured payment interface integrated, for smooth registrations."},
            {"id": 7, "featureName": "Networking", "designType" : "two_columns", "img":"networking/networking_banner.png", "banner_heading":"Unforgettable Networking Experience", "banner_text":"Build your network before you need it", "metakeywords" : "Event Networking, Event Networking Apps, Networking Platforms, Online Event Networking Platform, Social networking tool", "pageTitle":"Networking Platform- Build your network before you need it | Hubilo", "metadesc":"Get the networking platform integrated on your event website, building a social platform for the attendees on your own domain name."},
            {"id": 8, "featureName": "Analytics", "designType" : "two_rows_custom", "fg_img":"analytics/banner_fg.png", "phone_fg_img":"analytics/phone_banner_fg.png", "bg_img":"analytics/banner_bg.png", "banner_heading":"Real-time reporting about your event", "banner_text":"Analytics that will help you derive your event success rate", "metakeywords" : "Event Analytics, Event Tracking, Track Events, Google Analytics Event Tracking, Event Monitor, Event Monitoring", "pageTitle":"Real-time Event Analytics To Perform Better | Hubilo", "metadesc":"Analytics that will help you derive your event success rate. Visually Enhanced Promotions Performance Report. Track what's bringing users to your website."}
        ],

        findById = function (id) {
            var deferred = $.Deferred(),
                feature = null,
                l = features.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (features[i].id === id) {
                    feature = features[i];
                    break;
                }
            }
            deferred.resolve(feature);
            return deferred.promise();
        },


        Feature = Backbone.Model.extend({

            initialize: function () {

            },

            sync: function (method, model, options) {
                if (method === "read") {
                    findById(parseInt(this.id)).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        FeatureCollection = Backbone.Collection.extend({

            model: Feature,

            sync: function (method, model, options) {
                if (method === "read") {
                    findByName(options.data.name).done(function (data) {
                        options.success(data);
                    });
                }
            }

        });

    return {
        Feature: Feature,
        FeatureCollection: FeatureCollection
    };

});
