$(document).ready(function(){

function imgHover(id, link1, link2){
$(id).hover(function() {
    $(this).attr('src', link1);
   }, function(){
   	$(this).attr('src', link2);
     }); 
}

imgHover('#githubIcon', 'images/png/Github2.png', 'images/png/Github.png' );
imgHover("#facebookIcon", "images/png/Facebook2.png", "images/png/Facebook.png");
imgHover("#linkedinIcon", 'images/png/Linkedin.png', "images/png/Linkedin2.png" );
imgHover("#letterIcon", 'images/png/email1.png', "images/png/email.png" );


//============Scrolling==============

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);    
}
});

 //=============TextAnimation===========  

$(".main h1").textillate({
    in: {effect: "fadeIn", delay: 70},
});

$(".main h2").textillate({
    in: {effect: "bounceInDown", delay: 50},
});


//============ScrollingTextAnimation=========== 
  $(window).scroll(function(event) {
      var y = $(this).scrollTop();

      if(y >= 400){
        $('.skillsContainer').addClass('slideDown');
      }
      if(y >= 900){
        $('.twiter_project').addClass('slideSideLeft');
        $('.youtube_project').addClass('slideSideRighr'); 
        $('.portfolioContainer h2').addClass('slideDown');                                   
      }
      if(y >= 1600){
        $('.about_img').addClass('slideDown');
        $(".abount_text_p").addClass('slideUp');
        $(".about_container h2").addClass('slideSideLeft');
      }

  });



});





















