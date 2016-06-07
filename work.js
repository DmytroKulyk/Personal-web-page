$(document).ready(function(){

function imgHover(id, link1, link2){
$(id).hover(function() {
    $(this).attr('src', link1);
   }, function(){
   	$(this).attr('src', link2);
     }); 
}

imgHover('#githubIcon', 'Images/icons/svg/Github.svg', 'Images/icons/svg/Github-black.svg' );
imgHover("#facebookIcon", "Images/icons/svg/Facebook.svg", "Images/icons/svg/Facebook-black.svg");
imgHover("#linkedinIcon", 'Images/icons/svg/Linkedin.svg', "Images/icons/svg/Linkedin-black.svg" );
imgHover("#letterIcon", 'Images/icons/svg/envelope.svg', "Images/icons/svg/letter.svg" );

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





















