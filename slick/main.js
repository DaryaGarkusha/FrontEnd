
 
    $(document).ready(function(){
      $('.slider').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 3
     });

       $('.sliderComment').slick({
        dots: true,
       slidesToShow: 2,
       slidesToScroll: 2,
       vertical: true
       });
    });
