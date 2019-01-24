  $(window).scroll(function() {

  	if ($(".headerback").offset().top > 50) {
  		$(".fixed-top").addClass("top-nav-collapse");

  	} else {
  		$(".fixed-top").removeClass("top-nav-collapse");

  	}
  });



  function blink() {
  	$(".imagecontainer img").each(function(){
  		d = Math.random()*10000; 
  		$(this).delay(d).animate({opacity: 0}, {
      //while the thumbnails are fading out, we will use the step function to apply some transforms. variable n will give the current opacity in the animation.
      step: function(n){
        s = 1-n; //scale - will animate from 0 to 1
        $(this).css("transform", "scale("+s+")");
    }, 
    duration: 5000, 
})
  	}).animate({
  		"opacity": 1
  	}, 400);
  }
  var blinkInterval;  
  var pauseInterval;
  var blinking = true;

  $(document).ready(function () {
  	blinkInterval = setInterval(blink, 1000);
  	pauseInterval = setInterval(toggleBlink, 2000);
  });

  function toggleBlink() {
  	if (blinking) {
  		clearInterval(blinkInterval);
  		blinking = false;
  	} else {
  		blinkInterval = setInterval(blink, 1000);
  		blinking = true;
  	}
  }


  $(".hoverText div,.hoverTextLeft div").mouseenter(function(){
  	const headingdata=$(this).children("h1").text();
  	const name=$(this).children("h1").text();
  	const imagetoshow=$(this).children("img").attr("src");
  	const fb=$(this).children("a").attr("href");

  	$(".bakgroundimage img").attr("src",imagetoshow);
  	$(".bakgroundimage h3").text(name); 
  	$(".bakgroundimage a").attr("href",fb); 
  });

//faq toggle stuff 
$('.togglefaq').click(function(e) {
e.preventDefault();
var notthis = $('.active').not(this);
notthis.find('.icon-minus').addClass('icon-plus').removeClass('icon-minus');
notthis.toggleClass('active').next('.faqanswer').slideToggle(300);
 $(this).toggleClass('active').next().slideToggle("fast");
$(this).children('i').toggleClass('icon-plus icon-minus');
});

  

 
