var App = {
    // sliderHome: function(){
    //     jQuery('.banner_slider').slick({
    //       infinite: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       autoplaySpeed: 5000,
    //       speed: 1500,
    //       dots: true,
    //       arrows: false,
    //       fade: false,
    //       focusOnSelect: true,
    //     });
    //     jQuery('.slider_partner').slick({
    //       infinite: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       variableWidth: true,
    //       centerMode: true,
    //       autoplay: false,
    //       autoplaySpeed: 5000,
    //       speed: 1500,
    //       dots: false,
    //       arrows: true,
    //       fade: false,
    //       focusOnSelect: true,
    //       prevArrow: '<div class="prev_slider"><img src="assets/images/left.png" class="img-fluid"/></div>',
    //       nextArrow: '<div class="next_slider"><img src="assets/images/right.png" class="img-fluid"/></div>',
    //     });
    // },
    slideView : function(){
        //count number slide
        jQuery('.slider-view-img').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            //count
            jQuery('.count-slide .current-slide').text((nextSlide*1+1));

        });
        //total slide
        var divCount = $('.slider-view-img div').length;
        $('.total').html(divCount);
        jQuery('.slider-view-img').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1500,
            dots: false,
            arrows: true,
            fade: false,
            focusOnSelect: true,
            asNavFor: '.slider-view-content',
            nextArrow: '.btn-control.right',
            prevArrow: '.btn-control.left'
        });
        jQuery('.slider-view-content').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1500,
            dots: false,
            arrows: false,
            fade: true,
            focusOnSelect: true,
            asNavFor: '.slider-view-img',
        });
    },
    sliderAmenity:function(){
        jQuery('.slider_amenity').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1500,
            arrows: false,
            variableWidth: true,
        });
    },

    mobileHandle:function(){
        jQuery('.menu-option').click(function(){
            jQuery('.overlay').css({'display':'block',});
            jQuery('.nav__mobile').css({'transform':'translateX(0%)'})
        })
        jQuery('.overlay').click(function(){
          jQuery('.overlay').css({'display':'none',});
          jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
        })
        jQuery('.nav-mobile__list li a').click(function(){
            jQuery('.overlay').css({'display':'none',});
            jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
        })
    },
    handleBtnTop : function(){
        var btn = jQuery('.btn-top');
        btn.on('click', function(e) {
        e.preventDefault();
        jQuery('html, body').animate({scrollTop:0}, 1000);
        });
        jQuery('.logo_site').click(function(e){
            e.preventDefault();
            jQuery('html, body').animate({scrollTop:0}, 1000);
        })
    }
};

jQuery(document).ready(function () {
   // App.sliderHome();
   $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        },1200 );
    });
    App.handleBtnTop();
    App.slideView();
    App.sliderAmenity();
    App.mobileHandle();
    AOS.init({duration: 2500,disable: 'mobile'});
});

