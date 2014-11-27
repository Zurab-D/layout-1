/*global $, document */
var buttonAll = $('.works-button')[0],
    buttonWeb = $('.works-button')[1],
    buttonGraphic = $('.works-button')[2],
    buttonArt = $('.works-button')[3],
    worksWeb = $('.category-web'),
    worksGraphic = $('.category-graphic'),
    worksArt = $('.category-art'),
    worksAll = $('.work-image-link'),
    showOnly = function (cat) {
        return function (evt) {
            $('.work-buttons').children().each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            worksAll.hide();
            cat.show('fast', function () {
                cat.appendTo('.works-flow');
            });
        };
    };

$(document).ready(function () {
    "use strict";
    $(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });
    $(buttonAll).on('click', function () {
        worksAll.show('slow', function () {
            worksAll.appendTo('.works-flow');
        });
    });
    $(buttonWeb).on('click', showOnly(worksWeb));
    $(buttonGraphic).on('click', showOnly(worksGraphic));
    $(buttonArt).on('click', showOnly(worksArt));

    $(function () {
        $('#slides').slidesjs({
        width: 800,
        height: 500,
        callback: {
        loaded: function(){
          $('.slidesjs-pagination, .slidesjs-navigation').hide(0);
        }
        }
        });
    });

    $('.control-next').click(function(e) {
        e.preventDefault();
        $('.slidesjs-next').click();
    });

    $('.control-prev').click(function(e) {
        e.preventDefault();
        $('.slidesjs-next').click();
    });
});