$(function () {
    // OWL-CAROUSEL
    var owl = $('.owl-carousel.teamSlider');
    owl.owlCarousel({
        loop: true,
        margin: 28,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        moveSlides: 4,
        dots: false,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    //
    function countH(target){
        //- !!不可以有兩個子元素同高
        const $outer = target.find('.owl-item'),
            $caption = target.find('.caption'),
            h1 = $outer.eq(0).find('.caption').outerHeight(),
            h2 = $outer.eq(1).find('.caption').outerHeight(),
            h3 = $outer.eq(2).find('.caption').outerHeight(),
            h4 = $outer.eq(3).find('.caption').outerHeight();
        switch(true){
            case h1>=h2 && h1>=h3 && h1>=h4 :
                $caption.css({height:h1});
                break;
            case h2>=h1 && h2>=h3 && h3>=h4 :
                $caption.css({height:h2});
                break;
            case h3>=h1 && h3>=h2 && h3>=h4 :
                $caption.css({height:h3});
                break;
            case h4>=h1 && h4>=h2 && h4>=h3 :
                $caption.css({height:h4});
            default:
        };
    };
    
    for (i = 0; i < $('.owl-carousel').length; i++) {
        countH($('.owl-carousel').eq(i));
    }
});