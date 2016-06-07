$(document).ready(function(){

function imgHover(id, link1, link2){
$(id).hover(function() {
    $(this).attr('src', link1);
   }, function(){
   	$(this).attr('src', link2);
     }); 
}

imgHover('#githubIcon', 'images/icons/svg/Github.svg', 'images/icons/svg/Github-black.svg' );
imgHover("#facebookIcon", "images/icons/svg/Facebook.svg", "images/icons/svg/Facebook-black.svg");
imgHover("#linkedinIcon", 'images/icons/svg/Linkedin.svg', "images/icons/svg/Linkedin-black.svg" );
imgHover("#letterIcon", 'images/png/message.psd', "images/icons/png/closed-envelope-circle.psd" );

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
//==============NavBarButton=======
 // $('button').click(function(){ 
 // $('.navHeaderCollapse').toggle('slow');
   
 //   });

});





















