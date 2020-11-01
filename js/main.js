
$(document).ready(function () {
    $('#main-slide').carousel({
        interval: 7000
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 250) {
            $('.main-bar').addClass('navbar-fixed-top');
        } else {
            $('.main-bar').removeClass('navbar-fixed-top');
        }
    });

    // Start Mixer 1
    var containerEl;
    var mixer = mixitup('#filtery1');
    var mixer = mixitup('#filtery1', {
        multifilter: {
            enable: true // enable the multifilter extension for the mixer
        },
        selectors: {
            target: '.blog-item',
            filter: '.btn-filter1'
        },
        animation: {
            duration: 300
        }
    });
    mixer.filter('.latest');

    // Start swiper2 
    $('#latest-slide, #feature-slide, #best-slide').carousel({
        interval: false
    });
    // =====================================================

    var containerEl;
    var mixer = mixitup('#filtery2');
    var mixer = mixitup('#filtery2', {
        multifilter: {enable: true}, // enable the multifilter extension for the mixer
        selectors: {
            target: '.blog-item',
            filter: '.btn-filter2'
        },
        animation: {
            duration: 300
        }
    });
    mixer.filter('.care');

    $('#care-slide, #tool-slide, #mobi-slide').carousel({
        interval: false
    });
});