var App = function () {

    var modal = function() {
        $('.ajax-popup').on('click', function(e) {
            e.preventDefault();

            var modal = $(this).attr('href');

            $(modal).arcticmodal();
        });
    }

    var maskedInput = function() {
        if ($('input[data-mask]')) {
            $('input[data-mask]').each(function () {
                var maskVal = $(this).attr('data-mask');

                $(this).mask(maskVal);
            });
        }
    }

    var navToggle = function() {
        $('.nav-toggle').on('click', function(e){
            e.preventDefault();

            $(this).toggleClass('active');

            $('.main-nav').toggleClass('active');
        });
    }

    var sticky = function() {
        var header = $('.header__content'),
            offTop = header.offset().top;
            
        $(window).scroll(function(){
            var winTop = $(window).scrollTop();

            if (winTop >= offTop) {
                header.addClass('sticky');
            } else {
                header.removeClass('sticky');
            }
        });
    }

    var sService = function() {
        var slider = $('.s-service-slider'),
            toggle = $('.s-service-item');

        slider.slick({
            autoPlay: false,
            arrows: false,
            draggable: false,
            swipe: false,
            touchMove: false,
            swipeToSlide: false,
            slidesToShow: 1,
            fade: true
        })

        toggle.on('mouseenter', function() {
            var slide = $(this).data('slide');

            slider.slick('slickGoTo', slide);
        })
    }

    var fancy = function() {
        $('.fancy').fancybox();
    }


    return {
        init: function () {
           navToggle();
           sticky();
           sService();
           fancy();
        }
    }
}();

$(document).ready(function () {
    App.init();
});

