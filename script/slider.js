$(document).ready(function(){
    $('.rapture__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow:'<button type="button" class="slick-prev"><img src="/src/img/prev.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="/src/img/next.png"></button>'
    });

});