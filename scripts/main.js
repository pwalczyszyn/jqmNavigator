/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 7/4/12
 * Time: 7:52 PM
 */

require.config({
    paths:{
        text:'libs/require/text',
        domReady:'libs/require/domReady',
        jquery:'libs/jquery/jquery-1.7.1',
        jqm:'libs/jquery.mobile/jquery.mobile-1.1.0',
        jqmNavigator:'libs/jquery.mobile/jqmNavigator',
        Backbone:'libs/backbone/backbone-min',
        underscore:'libs/underscore/underscore-min'
    },
    shim:{
        Backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        },
        jqm:{
            deps:['jquery', 'jqmNavigator', 'jqm-config']
        }
    }
});

require(['domReady', 'jqm', 'views/first/FirstView'],
    function (domReady, jqm, FirstView) {

        domReady(function () {

            function initApp() {
                $.mobile.jqmNavigator.pushView(new FirstView);
            }

//            if (window.PhoneGap)
//                document.addEventListener("deviceready", initApp, false);
//            else
            initApp();

        });

    }
);