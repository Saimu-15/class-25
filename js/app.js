$(function(){

// preloader js start
$(window).on('load', function () {
    $('#preloader').fadeOut(1000);
 })
// preloader js end

// back to top section js start
$(window).on("scroll",function() {
    // back to top
    var scrollsize = $(window).scrollTop()
    if (scrollsize > 200) {
        $('#backtotop').show(500)
    } else {
        $('#backtotop').hide(500)
    }

    // menu fixed
    if (scrollsize > 88) {
        $('#nav').addClass('active')
    } else {
        $('#nav').removeClass('active')
    }
})
$('#backtotop').on('click',function(){
    $('html,body').animate({
        scrollTop:0
    },1500)
})
// back to top section js end

// banner slider start
    $('.banner_slider').slick({
        arrows:false,
        autoplay:true,
        speed:500,
        dots:true,
        dotsClass:'banner_slider_dots',
    })
// banner slider end

// recent product slider
    $('.recent_product_slider').slick({
        slidesToShow:4,
        prevArrow:'<i class="fa-solid fa-chevron-left recent_product_slider_icon"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right recent_product_slider_icon"></i>'
    })
// recent product slider end

// search button js
$('#searchbtn').on('click', function(){
    $('#searchBar').toggle(500);
})

// countdown activation
$('#deals_countdown').countdown("2023/01/01", function (event) {
    var $this = $(this).html(
        event.strftime(
            "" +
            "<div class='deals_countdown_item'><span>%D</span><span>Days</span></div>" +
            "<span class='separator'>:</span>" +
            "<div class='deals_countdown_item'><span>%H</span><span>Hours</span></div>" +
            "<span class='separator'>:</span>" +
            "<div class='deals_countdown_item'><span>%M</span><span>Minutes</span></div>" +
            "<span class='separator'>:</span>" +
            "<div class='deals_countdown_item'><span>%S</span><span>Seconds</span></div>"
        )
    )
})
})
