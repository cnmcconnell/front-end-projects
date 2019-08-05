window.onload = function() {

  var nextSlide = $(".slideshow :first-child");

  while (nextSlide.next().length !== 0) {
  nextSlide = nextSlide.next();
    nextSlide.fadeOut(0);

    console.log('hey');
  }

  nextSlide = $(".slideshow :first-child");

  setInterval( function() {
    console.log('tick');
    nextSlide.fadeOut(1000);

    // function() {
    if (nextSlide.next().length == 0) {
      nextSlide = $(".slideshow :first-child");
    }
    else {
      nextSlide = nextSlide.next();
    }
    // }

    nextSlide.fadeIn(1000);

  },
4000);
};
