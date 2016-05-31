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
imgHover("#letterIcon", 'images/icons/svg/envelope.svg', "images/icons/svg/letter.svg" );



$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

    });
});


