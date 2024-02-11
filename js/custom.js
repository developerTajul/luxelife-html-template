(function ($) {
    "use strict";
    $(document).ready(function () {

        /*
       Jquery Mobile Menu
       ============================*/
        $('#main-menu').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="bi bi-plus-lg"></i>'],
        });

        /*
       Jquery Sidebar Toggle
       ============================*/
        $(".mobile-menu-toggle-btn").on("click", function () {
            $(".menu-sidebar-area").addClass("active");
            $(".body-overlay").addClass("active");
        });
        $(".menu-sidebar-close-btn").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });

        /*
       Jquery Body Overlay
       ============================*/
        $(".body-overlay").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });
        /*
        Stikey Js
        ============================*/

        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if (100 < $(window).scrollTop()) {
            $(".header-menu-area.sticky-header").addClass("sticky_menu");
            $(".full-width-hidden").css("display", "none")
            $(".full-width-visible").css("display", "block")
        }

        if (height > 1400) {
            const nav = $(".header-menu-area.sticky-header");
            let scrolled = false;
            $(window).scroll(function () {
                if (160 < $(window).scrollTop() && !scrolled) {
                    nav
                        .addClass("sticky_menu animated fadeIn")
                        .animate({ "margin-top": "0px" });
                    scrolled = true;
                    $(".header-top").addClass("sticky-top")
                    $(".full-width-hidden").css("display", "none")
                    $(".full-width-visible").css("display", "block")
                }
                if (160 > $(window).scrollTop() && scrolled) {
                    nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
                    scrolled = false;
                    $(".header-top").removeClass("sticky-top")
                    $(".full-width-hidden").css("display", "block")
                    $(".full-width-visible").css("display", "none")
                }
            });
        }

        /*
        Jquery Empty Post Content Hide
        ============================*/
        $('.blog-area .post-content p').filter(function () {
            return /\u00A0/.test($(this).text());
        }).hide();



        /*
        Preeloader
        ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({ "overflow-x": "hidden" });
        });



        $('.isotope-grid').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
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
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        $(".filter-button-group").on("click", 'button', function () {
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

      
 
        

    });
})(jQuery);
