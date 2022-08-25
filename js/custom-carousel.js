$('.carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
});

$('.games-carousel').slick({
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.games-carousel-control.left'),
    nextArrow: $('.games-carousel-control.right'),
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ],
});

$('.coins-carousel').slick({
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.coins-carousel-control.left'),
    nextArrow: $('.coins-carousel-control.right'),
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ],
});

$('.services-carousel').slick({
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.services-carousel-control.left'),
    nextArrow: $('.services-carousel-control.right'),
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ],
});

$('.screenshots-carousel').slick({
    //slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    prevArrow: $('.screenshots-carousel-controls.left'),
    nextArrow: $('.screenshots-carousel-controls.right'),
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ],
});

$('.reviews-carousel').slick({
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.reviews-carousel-control.left'),
    nextArrow: $('.reviews-carousel-control.right'),
    responsive: [
        {
            breakpoint: 993,
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
        },
    ],
})

$('.blog-carousel').slick({
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.blog-carousel-control.left'),
    nextArrow: $('.blog-carousel-control.right'),
    responsive: [
        {
            breakpoint: 993,
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
        },
    ],
})
