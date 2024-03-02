/*********************************************************************
***
*Original Author:       Anthony Patterson            *
*Date Created:          2/25/2024                    *
*Version:               1                            *
*Date Last Modified:    03/02/2024                   *
*Modified by:           Anthony Patterson            *
*Modification log:                                   *
***
******************************************************************** */
"use strict";

$(document).ready(() => {
    $(".gallery_image").on({
        mouseenter: function () {
            $(this).stop().animate({ width: '+=20px', height: '+=20px' }, 'fast');
        },
        mouseleave: function () {
            $(this).stop().animate({ width: '-=20px', height: '-=20px' }, 'fast');
        }
    });
});