
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
    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            $('.scroll-top i').addClass('active')
        }
        else {
            $('.scroll-top i').removeClass('active')
        }
    })
    $('.scroll-top i').click(function() {
        $(window).scrollTop({
            top: 0,
            behavior: 'smooth'
        })
    })

    $('.facility').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
})

// Javascript
function loading() {
    document.querySelector(".loading-container").classList.add('fade-out')
}
function fadeOut() {
    setInterval(loading, 2500);
}
window.onload = fadeOut();