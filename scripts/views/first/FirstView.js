/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 7/10/12
 * Time: 5:26 PM
 */

define(['jquery', 'underscore', 'Backbone', 'views/second/SecondView', 'text!./FirstView.tpl'],
    function ($, _, Backbone, SecondView, FirstTemplate) {

        var HomeView = Backbone.View.extend({

            events:{
                'click #btnPushSecondView':'btnPushSecondView_clickHandler'
            },

            render:function () {
                this.$el.html(FirstTemplate);
                return this;
            },

            btnPushSecondView_clickHandler:function () {
                $.mobile.jqmNavigator.pushView(new SecondView);
            }

        });

        return HomeView;
    });