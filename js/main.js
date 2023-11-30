
(function($){

// nav

var $navbarToggler = $(".navbar-toggler");
var $navbar = $(".navbar-collapse");
var $openNav = $(".open");
var $colsNave = $(".colse");

    if($navbar.css("display" , "none" )){
        $($navbarToggler).on('click' , function(){
            $navbar.css("display" , "block" );
            $openNav.css("display" , "none").fadeOut("slow");
            $colsNave.css("display" , "block" ).fadeIn("slow");
        })
    } 
    $colsNave.on("click" , function(){
        $navbar.css("display" , "none" );
        $openNav.css("display" , "block").fadeIn("slow");
        $colsNave.css("display" , "none" ).fadeOut("slow");
    });


    // Aside about

    $("p.p-About-active").on("click" ,function(){
        $("p.p-about-active").removeClass("active");
        $("p.p-About-active").addClass("active");
    });
    $("p.p-about-active").on("click" ,function(){
        $("p.p-about-active").addClass("active");
        $("p.p-About-active").removeClass("active");
    });


    // back to top

    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $('.back-to-top').fadeIn('slow');
        }else{
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').on("click" ,function(){
        $("body , html").animation({screenTop: 0} , 1500, 'easeInOutExpo')
        return false;
    });

})(jQuery);




