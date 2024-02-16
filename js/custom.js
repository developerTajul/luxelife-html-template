(function ($) {
    "use strict";
    $(document).ready(function () {

      
        // INTRO SLIDER

        $(".intro_slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            vertical: true,
            rtl: false,

            responsive: [{
                breakpoint: 767,
                settings: {
                    autoplay: false,
                },
            }, 
        ],

            

            prevArrow: '<span class="prevArrow"><i class="bi bi-arrow-up"></i></span>',
            nextArrow: '<span class="nextArrow"><i class="bi bi-arrow-down"></i></span>',
        });


        /*latest blog Slider
        ============================*/
        $(".latest_blog_news_slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true, 
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500, 
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
            ],

            prevArrow: '<span class="prevArrow"><i class="bi bi-arrow-left"></i></span>',
            nextArrow: '<span class="nextArrow"><i class="bi bi-arrow-right"></i></span>',
        });

      
        // TESTIMONIAL SLIDER
        $(".testimonial_slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true, 
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500, 

            prevArrow: '<span class="prevArrow"><i class="bi bi-arrow-left"></i></span>',
            nextArrow: '<span class="nextArrow"><i class="bi bi-arrow-right"></i></span>',
        });
        
 
        // BRAND SLIDER STYLE TWO
        $(".brand_slider_wrapper").slick({
            slidesToShow: 5,
            infinite: true,
            autoplay: true,
            draggable: true, 
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 500, 
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
            ],
        });
        

        var $grid = $('.isotope-grid').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
            masonry: {
                columnWidth: '.isotope-item'
            }
        });
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
        // filter items on button click
        $('.filter-button-group').on('click', '.gallery-info', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        $(".filter-button-group").on("click", '.gallery-info', function () {
            $('.filter-button-group button').removeClass("active");
            $(this).addClass("active");
        });

 

        // mixitup 
        var containerEl = document.querySelector('.project-gallery-wrapper');
        // var mixer = mixitup(containerEl);

    });
})(jQuery);
