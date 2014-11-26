/*global $, document */
var buttonAll = $('.works-button')[0],
    buttonWeb = $('.works-button')[1],
    buttonGraphic = $('.works-button')[2],
    buttonArt = $('.works-button')[3],
    worksWeb = $('.category-web'),
    worksGraphic = $('.category-graphic'),
    worksArt = $('.category-art'),
    worksAll = $('.work-image-link');

$(document).ready(function () {
    "use strict";
    $(buttonAll).on('click', function () {
        worksAll.show('slow', function () {
            worksAll.appendTo('.works-flow');
        });
    });

    $(buttonWeb).on('click', function () {
        worksAll.hide('slow');
        worksWeb.show('slow', function () {
            worksWeb.appendTo('.works-flow');
        });
    });

    $(buttonGraphic).on('click', function () {
        worksAll.hide('slow');
        worksGraphic.show('slow', function () {
            worksGraphic.appendTo('.works-flow');
        });
    });

    $(buttonArt).on('click', function () {
        worksAll.hide('slow');
        worksArt.show('slow', function () {
            worksArt.appendTo('.works-flow');
        });
    });

});