$(document).ready(function() {

//--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
  // initiate an animation to a certain page element:
  $('html, body').stop().animate(
    { scrollTop: targetElement.offset().top-65 }, // move window so target element is at top of window
    speed, // speed in milliseconds
    'swing' // easing
  ); // end animate
} // end scrollThere function definition




//--- START SCROLL EVENTS ---//
// detect a mousewheel event (note: relies on jquery mousewheel plugin):
$(window).on('mousewheel', function (e) {

  // get Y-axis value of each div:
  var div1y = $('#maincontent').offset().top-65,
      div2y = $('#panel2').offset().top-65,
      div3y = $('#panel3').offset().top-65,
      div4y = $('#panel4').offset().top-65,
     // div5y = $('#panel5').offset().top-65,
//      div6y = $('#panel6').offset().top,
      // get window's current scroll position:
      lastScrollTop = $(this).scrollTop(),
      // for getting user's scroll direction:
      scrollDirection,
      // for determining the previous and next divs to scroll to, based on lastScrollTop:
      targetUp,
      targetDown,
      // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
      targetElement;

  // get scroll direction:
  if ( e.deltaY > 0 ) {
    scrollDirection = 'up';
  } else if ( e.deltaY <= 0 ) {
    scrollDirection = 'down';
  } // end if

  // prevent default behavior (page scroll):
  e.preventDefault();

  // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
  if (lastScrollTop === div1y) {
    targetUp = $('#panel1');
    targetDown = $('#panel2');
  } else if (lastScrollTop === div2y) {
    targetUp = $('#panel1');
    targetDown = $('#panel3');
  } else if (lastScrollTop === div3y) {
    targetUp = $('#panel2');
    targetDown = $('#panel4');
  }
    else if (lastScrollTop === div4y) {
    targetUp = $('#panel3');
   // targetDown = $('#panel5');
  } 
//    else if (lastScrollTop === div5y) {
//    targetUp = $('#panel4');
//    targetDown = $('#panel6');
//  }
//    else if (lastScrollTop === div6y) {
//    targetUp = $('#panel5');
//    targetDown = $('#panel6');
//  } 
    else if (lastScrollTop < div2y) {
    targetUp = $('#panel1');
    targetDown = $('#panel2');
  } else if (lastScrollTop < div3y) {
    targetUp = $('#panel2');
    targetDown = $('#panel3');
  } else if (lastScrollTop < div4y) {
    targetUp = $('#panel3');
    targetDown = $('#panel4');
  }
//    else if (lastScrollTop < div5y) {
//    targetUp = $('#panel4');
//    targetDown = $('#panel5');
//  } 
//    else if (lastScrollTop < div6y) {
//    targetUp = $('#panel5');
//    targetDown = $('#panel6');
//  } else if (lastScrollTop > div6y) {
//    targetUp = $('#panel6');
//    targetDown = $('#panel6');
//  } 
    // end else if

  // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
  if (scrollDirection === 'down') {
    targetElement = targetDown;
  } else if (scrollDirection === 'up') {
    targetElement = targetUp;
  } // end else if

  // scroll smoothly to the target element:
  scrollThere(targetElement, 600);

}); // end on mousewheel event
//--- END SCROLL EVENTS ---//
    
});