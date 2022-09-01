$(document).ready(function () {
    $(
        '#shelf .container , #deal-of-the-day .container, #comments .container'
    ).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    })

    $('#mobile-shelf .container').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000
    })
})
