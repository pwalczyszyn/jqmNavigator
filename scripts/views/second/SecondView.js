/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 7/10/12
 * Time: 5:26 PM
 */

define(['jquery', 'underscore', 'Backbone', 'views/third/ThirdView', 'text!./SecondView.tpl'],
    function ($, _, Backbone, ThirdView, SecondTemplate) {

        var SecondView = Backbone.View.extend({

            events:{
                'click #btnBack':'btnBack_clickHandler',
                'click #btnPushThirdView':'btnPushThirdView_clickHandler',
                'click #btnReplaceWithThirdView':'btnReplaceWithThirdView_clickHandler'
            },

            render:function () {
                this.$el.html(SecondTemplate);
                return this;
            },

            btnBack_clickHandler:function () {
                $.mobile.jqmNavigator.popView();
            },

            btnPushThirdView_clickHandler:function () {
                $.mobile.jqmNavigator.pushView(new ThirdView);
            },

            btnReplaceWithThirdView_clickHandler:function () {
                $.mobile.jqmNavigator.replaceView(new ThirdView, {reverse:true})
            }

        });

        return SecondView;
    });