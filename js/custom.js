// jquery for owlCarousel

$(function () {  
    $("#owl-demo").owlCarousel({
        items : 3,
        loop:true,
        dots:true,
        center:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1,    
            }
            ,
            768:{
                items:2,
                dots:false
            }
        }
 
    });

});