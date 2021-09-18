
$(document).ready(function() {
    $('.menu-bar i').click(function() {
        $(this).toggleClass("fa-times");
        $('.navbar').toggleClass('nav-toggle');
    })

    $(window).on('load scroll', function() {
        $('.menu-bar i').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        
        if($(window).scrollTop() > 10) {
            $('.header').addClass("header-active");
        }
        else {
            $('.header').removeClass("header-active");
        }
    })

    $('.facility').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
    
})