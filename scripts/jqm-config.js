/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 7/10/12
 * Time: 5:31 PM
 */

define(['jquery'], function ($) {

    $(document).one("mobileinit", function () {

        $.mobile.pageContainer = $('#container');
        $.mobile.defaultPageTransition = 'slide';

    });

});