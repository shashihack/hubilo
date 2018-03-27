require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app', //relative to the base url
        tpl: '../tpl'
    },

    map: {
        '*': {
            'app/models/feature': 'app/models/memory/feature' 
        }
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'app/router'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});