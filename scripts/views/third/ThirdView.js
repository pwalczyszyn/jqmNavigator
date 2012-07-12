/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 7/10/12
 * Time: 5:26 PM
 */

define(['jquery', 'underscore', 'Backbone', 'text!./ThirdView.tpl'],
    function ($, _, Backbone, ThirdTemplate) {

        var SecondView = Backbone.View.extend({

            events:{
                'click #btnBack':'btnBack_clickHandler',
                'click #btnPopToFirst':'btnPopToFirst_clickHandler'
            },

            render:function () {
                this.$el.html(ThirdTemplate);
                return this;
            },

            btnBack_clickHandler:function () {
                $.mobile.jqmNavigator.popView();
            },

            btnPopToFirst_clickHandler:function () {
                $.mobile.jqmNavigator.popToFirst();
            }

        });

        return SecondView;
    });