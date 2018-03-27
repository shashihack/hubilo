define(function (require) {

    "use strict";

        var $    = require('jquery'),
        Backbone  = require('backbone'),
        ShellView  = require('app/views/Shell'),
        HomeView = require('app/views/Home'),
        HowitworksView  = require('app/views/Howitworks'),
        RequestdemoView  = require('app/views/Requestdemo'),

        $body = $('#body-root'),
        shellView = new ShellView({el: $body}).render(),
        $content = $("#content", shellView.el),
        homeView = new HomeView({el: $content}),
        howitworksView = new HowitworksView({el: $content}),
        requestdemoView = new RequestdemoView({el: $content});

    // Close the search dropdown on click anywhere in the UI
    $body.click(function () {
        $('.dropdown').removeClass("open");
    });

    $("body").on("click", "#showMeBtn", function (event) {
        event.preventDefault();
        shellView.search();
    });

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "howitworks":"howitworks",
            "requestdemo":"requestdemo",
            "features/:id": "featureDetails"
        },

        home: function () {
            document.getElementsByTagName('meta').keywords.content = 'Event Management Platform, Event Management Software, Event Planning Software, Event Tech, Event Registration Software, Event Management';
            document.getElementsByTagName('meta').description.content = 'India\'s first all-in-one event management software for organizers to create, promote, engage & analyze their events & attendees to build their networks.';
            document.getElementsByTagName('title')[0].innerHTML = 'All-in-one Event Management Software | Hubilo';
            $body.find(".row-fluid").attr("id","home");
            window.scrollTo(0, 0);
            homeView.delegateEvents(); // delegate events when the view is recycled
            homeView.render();
        },

        howitworks: function () {
            document.getElementsByTagName('meta').keywords.content = 'Event Management Process, Event Management Works, Event Organizer Work, How to manage an event, How to event management';
            document.getElementsByTagName('meta').description.content = 'Find how easy it is to create your event within minutes, following the simple steps and communicate the story of your event to your audience.';
            document.getElementsByTagName('title')[0].innerHTML = 'How Hubilo Works : Event Planning and Organising';
            $body.find(".row-fluid").attr("id","hiw");
            window.scrollTo(0, 0);
            howitworksView.delegateEvents(); // delegate events when the view is recycled
            howitworksView.render();
        },

        requestdemo: function () {
            // document.getElementsByTagName('meta').keywords.content = "";
            // document.getElementsByTagName('meta').description.content = '';
            document.getElementsByTagName('title')[0].innerHTML = 'Request a Free Demo | Hubilo';
            $body.find(".row-fluid").attr("id","rad");
            window.scrollTo(0, 0);
            requestdemoView.delegateEvents(); // delegate events when the view is recycled
            requestdemoView.render();
        },

        featureDetails: function (id) {
            window.scrollTo(0, 0);
            require(["app/views/Feature", "app/models/feature"], function (FeatureView, models) {
                var feature = new models.Feature({id: id});
                feature.fetch({
                    success: function (data) {
                        // instead of creating new instances
                        document.getElementsByTagName('meta').keywords.content = data.attributes.metakeywords;
                        document.getElementsByTagName('meta').description.content = data.attributes.metadesc;
                        document.getElementsByTagName('title')[0].innerHTML = data.attributes.pageTitle;
                        $body.find(".row-fluid").attr("id","r_f_"+id);
                        var view = new FeatureView({model: data, el: $content});
                        view.render();
                    }
                });
            });
        }

    });

});
