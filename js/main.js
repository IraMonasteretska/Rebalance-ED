
$(document).ready(function () {

    // VIDEO PLAYER -------------------------------- //
    if ( $(".js-player").length) {
        const player = new Plyr(".js-player");
    }

    //  BURGER MENU ----------------------------------- //
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header__content').toggleClass('active');
        $('body').toggleClass('hidden');
    });

    //  MENU MOBILE ------------------------------------ //
    $('.submenu-mobile').on('click', function () {
        $(this).children('.dropdown').slideToggle();
    });

    //  padding on full width blocks---------------------- //
    let windowWidth = $(window).width(),
        containerWidth = $('.container').width(),
        sideWidth = (windowWidth - containerWidth) / 2;

    $('.right-padding').css('padding-right', sideWidth + 'px');
    $('.left-padding').css('padding-left', sideWidth + 'px');

    $(window).resize(function () {
        let windowWidth = $(window).width(),
            containerWidth = $('.container').width(),
            sideWidth = (windowWidth - containerWidth) / 2;

        $('.right-padding').css('padding-right', sideWidth + 'px');
        $('.left-padding').css('padding-left', sideWidth + 'px');
    });

    // testimonial slider --------------------------------- //
    $('.testimonials__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        // autoplay: true,
        // autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
        ]
    });


});