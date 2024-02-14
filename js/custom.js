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





        // SERVICE DETAILS JQUERY PLUGIN- masirul
        // faq area start

        const accordionItemHeaders = document.querySelectorAll(
            ".accordion-item-header"
        );

        accordionItemHeaders.forEach((accordionItemHeader) => {
            accordionItemHeader.addEventListener("click", (event) => {
                // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

                const currentlyActiveAccordionItemHeader = document.querySelector(
                    ".accordion-item-header.active"
                );
                if (
                    currentlyActiveAccordionItemHeader &&
                    currentlyActiveAccordionItemHeader !== accordionItemHeader
                ) {
                    currentlyActiveAccordionItemHeader.classList.toggle("active");
                    currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
                }
                accordionItemHeader.classList.toggle("active");
                const accordionItemBody = accordionItemHeader.nextElementSibling;
                if (accordionItemHeader.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                } else {
                    accordionItemBody.style.maxHeight = 0;
                }
            });
        });

        // faq area end

        /* Home page brand logo slider testimonial
     ===========================================*/
        // let copy = document.querySelector(".logo-slide").cloneNode(true);
        // document.querySelector(".slide-one").appendChild(copy);
        // let copytwo = document.querySelector(".logo-slide").cloneNode(true);
        // document.querySelector(".slide-two").appendChild(copytwo);

        // mixitup 
        var containerEl = document.querySelector('.project-gallery-wrapper');
        // var mixer = mixitup(containerEl);

    });
})(jQuery);
