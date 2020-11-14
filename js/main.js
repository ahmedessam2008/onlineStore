
$(document).ready(function () {
    $('#main-slide').carousel({
        interval: 7000
    });


    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 250) {
            $('.main-bar').addClass('navbar-fixed-top');
            $('.catigory span').animate({
                top: '0'
            }, 1);
        } else {
            $('.main-bar').removeClass('navbar-fixed-top');
            $('.catigory span').animate({
                top: '-7px'
            }, 1);
        };
    });

    // Start Mixer 1
    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config1 = {
        controls: {
            scope: 'local'
        },
        load: {
            filter: '.latest'
        }
    };
    var config2 = {
        controls: {
            scope: 'local'
        },
        load: {
            filter: '.care'
        }
    };

    var mixer1 = mixitup(containerEl1, config1);
    var mixer1 = mixitup(containerEl2, config2);

});