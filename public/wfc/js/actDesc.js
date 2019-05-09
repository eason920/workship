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
        var $outer = target,
            h1 = $outer.eq(1).find('.caption').outerHeight(),
            h2 = $outer.eq(2).find('.caption').outerHeight(),
            h3 = $outer.eq(3).find('.caption').outerHeight(),
            h4 = $outer.eq(4).find('.caption').outerHeight();
        if(h1>=h2 && h1>=h3 && h1>=h4){
            //- console.log('h1 is highter')
            $outer.find('.caption').css({'height':h1})
        }else if(h2>=h1 && h2>=h3 && h3>=h4){
            //- console.log('h2 is highter')
            $outer.find('.caption').css({'height':h2})
        }else if(h3>=h1 && h3>=h2 && h3>=h4){
            //- console.log('h3 is highter')
            $outer.find('.caption').css({'height':h3})
        }else if(h4>=h1 && h4>=h2 && h4>=h3){
            //- console.log('h4 is highter')
            $outer.find('.caption').css({'height':h4})
        }
    }
    countH( $('.t1 .owl-item') );
    countH( $('.t2 .owl-item') );
    countH( $('.t3 .owl-item') );	
    countH( $('.t4 .owl-item') );
});