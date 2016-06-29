$(document).ready(function(){

//==================Greeting code=========
var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18){
  greeting = "Good evening, my name is Dmytro!";
}else if(hourNow > 11){
  greeting = "Good afternoon, my name is Dmytro!";
}else if(hourNow > 0){
  greeting = "Good morning, my name is Dmytro!";
}else{
  greeting = "Hello, my name is Dmytro!"
}

 $(".greeting").append(greeting);



//================Social media icons=============
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
      if(y >= 1000){
        $('.view').addClass('slideSideLeft');
        $('.youtube_project').addClass('slideSideRighr'); 
        $('.portfolioContainer h2').addClass('slideDown');                                   
      }
      if(y >= 2100){
        $('.about_img').addClass('slideDown');
        $(".abount_text_p").addClass('slideUp');
        $(".about_container h2").addClass('slideSideLeft');
      }

  });

 $("#downArrow").hover(function() {
   $(this).fadeOut(100);
   $(this).fadeIn(500);
 });

//  // Get the modal
// var modal = $('#myModal');

// // Get the button that opens the modal
// var btn = $("#myButton");

// // Get the <span> element that closes the modal
// var span = $(".close")[0];

// When the user clicks on the button, open the modal 
$("#myButton").click(function() {
    $('#myModal').css("display", "block");
});

$("#myButton1").click(function() {
    $('#myModal1').css("display", "block");
});

$("#myButton2").click(function() {
    $('#myModal2').css("display", "block");
});

$("#myButton3").click(function() {
    $('#myModal3').css("display", "block");
});
// When the user clicks on <span> (x), close the modal
$(".close").click(function() {
    $('#myModal, #myModal1, #myModal2, #myModal3 ').css('display', "none");
})

// When the user clicks anywhere outside of the modal, close it
$(window).click(function(event) {
    if (event.target.id == 'myModal' || event.target.id == 'myModal1') {
        $('#myModal, #myModal1, #myModal2, #myModal3').css('display', "none");
    }
});

});





















