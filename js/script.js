/* 
-------------------------
* Table Of Content
-------------------------
* 1. Window Scroll Function Start
* 2. Shrink Navbar Function Start
* 3. Menu List Item Navigation Function Start
* 4. Banner Slide Navigation Function Start
* 5. BackToTop Navigation Function Start
*/

window.onscroll = function() {

  navbarScroll();

  var scorlling = $(this).scrollTop();

  if(scorlling > 100) {
    $(backToTop).fadeIn(500);
  } else {
    $(backToTop).fadeOut(500);
  }
};
// Window Scroll Function End
  
function navbarScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "8px 0";
    document.getElementById("logo").style.width = "120px";
  }else {
    document.getElementById("navbar").style.padding = "10px 0";
    document.getElementById("logo").style.width = "160px";
  }
};
// Shrink Navbar Function End
  
function navigationScroll() {
  var scrollLink = $('.scroll-link');
  
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 80
    }, 300);
  });
};
  
navigationScroll();
// Menu List Item Navigation Function End

function mainSlider() {
  var myBannerSlider = $('.banner-slide');

  myBannerSlider.on('init', function (e, slick) {
    var $firstAnimatingElements = $('.banner-content:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);
  });

  myBannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('.banner-content[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);
  });

  myBannerSlider.slick({
    autoplay: true,
    autoplaySpeed: 9000,
    speed: 500,
    dots: true,
    fade: true,
    arrows: false,
  });

  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
};

mainSlider();
// Banner Slide Function End

var backToTop = document.getElementById("btt");
  
function backTopFunction() {
  window.onload = function() {
    $(backToTop).hide();
  };

  $(backToTop).click(function(){
    $('html,body').animate({
        scrollTop : 0
    }, 300)
  });
};
  
backTopFunction();
// BackToTop Function End