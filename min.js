(function ($){
    "use strict";
    // testimonial
    $( ".testimonal-carousel").OwlCarousel({
autoplay:true,
smartspeed:1000,
margin:25,
dot:false,
loop:true,
nav:true,
navText:[
    '<i class=" bi b-arrow-left"></i>',
    '<i class=" bi b-arrow-right"></i>'
],
resoponsive:{
    0:{
        item:1
    },
    768:{
        items:2
    }
}

    })
    
})(jQueury);