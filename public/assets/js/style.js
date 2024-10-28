
// // -------counter-js------//
// /*--------counter-----------*/
// (function ($) {
//     $.fn.countTo = function (options) {
//         options = options || {};

//         return $(this).each(function () {
//             // set options for current element
//             var settings = $.extend({}, $.fn.countTo.defaults, {
//                 from:            $(this).data('from'),
//                 to:              $(this).data('to'),
//                 speed:           $(this).data('speed'),
//                 refreshInterval: $(this).data('refresh-interval'),
//                 decimals:        $(this).data('decimals')
//             }, options);

//             // how many times to update the value, and how much to increment the value on each update
//             var loops = Math.ceil(settings.speed / settings.refreshInterval),
//                 increment = (settings.to - settings.from) / loops;

//             // references & variables that will change with each update
//             var self = this,
//                 $self = $(this),
//                 loopCount = 0,
//                 value = settings.from,
//                 data = $self.data('countTo') || {};

//             $self.data('countTo', data);

//             // if an existing interval can be found, clear it first
//             if (data.interval) {
//                 clearInterval(data.interval);
//             }
//             data.interval = setInterval(updateTimer, settings.refreshInterval);

//             // initialize the element with the starting value
//             render(value);

//             function updateTimer() {
//                 value += increment;
//                 loopCount++;

//                 render(value);

//                 if (typeof(settings.onUpdate) == 'function') {
//                     settings.onUpdate.call(self, value);
//                 }

//                 if (loopCount >= loops) {
//                     // remove the interval
//                     $self.removeData('countTo');
//                     clearInterval(data.interval);
//                     value = settings.to;

//                     if (typeof(settings.onComplete) == 'function') {
//                         settings.onComplete.call(self, value);
//                     }
//                 }
//             }

//             function render(value) {
//                 var formattedValue = settings.formatter.call(self, value, settings);
//                 $self.text(formattedValue);
//             }
//         });
//     };

//     $.fn.countTo.defaults = {
//         from: 0,               // the number the element should start at
//         to: 0,                 // the number the element should end at
//         speed: 1000,           // how long it should take to count between the target numbers
//         refreshInterval: 100,  // how often the element should be updated
//         decimals: 0,           // the number of decimal places to show
//         formatter: formatter,  // handler for formatting the value before rendering
//         onUpdate: null,        // callback method for every time the element is updated
//         onComplete: null       // callback method for when the element finishes updating
//     };

//     function formatter(value, settings) {
//         return value.toFixed(settings.decimals);
//     }
// }(jQuery));

//     jQuery(function ($) {
     
//       // start all the timers
//       $('.timer').each(count);
      
//       // restart a timer when a button is clicked
//       $( window ).scroll(function () {
//         //console.log($(window).scrollTop());
//     if($(window).scrollTop() > 300 && $(window).scrollTop() < 2000)
//     {
//        $('.timer').each(count);
//      }
//       });
      
//       function count(options) {
//         var $this = $(this);
//         options = $.extend({}, options || {}, $this.data('countToOptions') || {});
//         $this.countTo(options);
//       }
//     });



// // header-sticky-js-start

//       $(window).scroll(function(){

//         if ($(this).scrollTop() > 90) {

//             $('header').addClass('sticky-header');

//         } else {

//             $('header').removeClass('sticky-header');

//         }

//     });



//     $(window).on('scroll', function () {

//         if ($(this).scrollTop()> 90) {

//             $('.navbar').addClass("shrink");

//             $('.navbar-brand  img').attr('src', 'assets/image/heal-logo.svg');

//         }else{

//             $('.navbar').removeClass("shrink");

//             $('.navbar-brand  img').attr('src', 'assets/image/healin-logo.svg');

//         }

//         });



// // owl-js

//   $('.support-team-slider').owlCarousel({

//         loop:true,

//         margin:0,

//         nav:true,

//          //center:true,

//         dots:false,

//         autoplay:true,

//         autoplayTimeout:2000,

//         autoplayHoverPause:true,


//         responsive:{

//         0:{

//             items:1

//         },

//         600:{

//             items:3

//         },

//         1000:{

//             items:6

//         }

//     }

//     });




//       $('#testimonial_content').owlCarousel({

//         items:1,

//         loop:true,

//         margin:50,

//         nav:false,

//         dots:true,

//         autoplay:true,

//         autoplayTimeout:2000,

//         autoplayHoverPause:true,

//         responsive:{

//             0:{

//                 items:1

//             },

//             600:{

//                 items:1

//             },

//             1000:{

//                 items:1

//             }

//         }

//     });

//     $('#service_content').owlCarousel({

//         items:1,

//         loop:true,

//         margin:20,

//         nav:true,

//         center:true,

//         dots:false,

//         responsive:{

//         0:{

//             items:1

//         },

//         600:{

//             items:1

//         },

//         1000:{

//             items:3

//         }

//     }

//     });




   


// Fancybox.bind("[data-fancybox]", {

//     // Your custom options

// });



// // tabs-js



// function openCity(evt, cityName) {

//   var i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("tabcontent");

//   for (i = 0; i < tabcontent.length; i++) {

//     tabcontent[i].style.display = "none";

//   }

//   tablinks = document.getElementsByClassName("tablinks");

//   for (i = 0; i < tablinks.length; i++) {

//     tablinks[i].className = tablinks[i].className.replace(" active", "");

//   }

//   document.getElementById(cityName).style.display = "block";

//   evt.currentTarget.className += " active";

// }



// // Show the first tab and hide the rest

// $('#tabs-nav li:first-child').addClass('active');

// $('.tab-content').hide();

// $('.tab-content:first').show();



// // Click function

// $('#tabs-nav li').mouseenter(function(){

//   $('#tabs-nav li').removeClass('active');

//  // $(this).addClass('active');

//   $('.tab-content').hide();

  

//   var activeTab = $(this).find('a').attr('href');

//   $(activeTab).fadeIn();

//   return false;

// });



// // toggle-btn-js

// $(".navbar-toggler").click(function(){

//     $(this).toggleClass('navbar-closed');

//     $("html").toggleClass("myClass");

//   });



// // aos-js

// AOS.init({

//   disable: function() {

//     var maxWidth = 991;

//     return window.innerWidth < maxWidth;

//   }

// });



// $(document).ready(function () {
//   var current_fs, next_fs, previous_fs; //fieldsets
//   var opacity;
//   var current = 1;
//   var steps = $("fieldset").length;

//   setProgressBar(current);

//   $(".next").click(function () {
//     current_fs = $(this).parent();
//     next_fs = $(this).parent().next();

//     //Add Class Active
//     $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//     //show the next fieldset
//     next_fs.show();
//     //hide the current fieldset with style
//     current_fs.animate(
//       { opacity: 0 },
//       {
//         step: function (now) {
//           // for making fielset appear animation
//           opacity = 1 - now;

//           current_fs.css({
//             display: "none",
//             position: "relative"
//           });
//           next_fs.css({ opacity: opacity });
//         },
//         duration: 500
//       }
//     );

//     setProgressBar(++current);
//   });

//   $(".previous").click(function () {
//     current_fs = $(this).parent();
//     previous_fs = $(this).parent().prev();

//     //Remove class active
//     $("#progressbar li")
//       .eq($("fieldset").index(current_fs))
//       .removeClass("active");

//     //show the previous fieldset
//     previous_fs.show();

//     //hide the current fieldset with style
//     current_fs.animate(
//       { opacity: 0 },
//       {
//         step: function (now) {
//           // for making fielset appear animation
//           opacity = 1 - now;

//           current_fs.css({
//             display: "none",
//             position: "relative"
//           });
//           previous_fs.css({ opacity: opacity });
//         },
//         duration: 500
//       }
//     );
//     setProgressBar(--current);
//   });

//   function setProgressBar(curStep) {
//     var percent = parseFloat(100 / steps) * curStep;
//     percent = percent.toFixed();
//     $(".progress-bar").css("width", percent + "%");
//   }

//   $(".submit").click(function () {
//     return false;
//   });
// });


// /*------questions-steps-js------*/

//  $(document).ready(function() {
//     $("fieldset .page").hide();
//     $("fieldset #page1").show();
//     $(".next-step-1").hide();
//     $(".next-step-2").hide();
// });

// $(document).on('click', "fieldset #next", function(){
//     var pageCount = $("fieldset .page").length;
//     var getStep = $(this).data('step');
//     var stepsLenght = $('.step-'+getStep+' .page').length;
   
//     var position = $("fieldset .page:visible").data('bs-position');
//     $("fieldset .page:visible").hide();
//     $(".next-step-"+getStep).hide();
//     $(".previous").hide();
//     if(position < pageCount){
 
//         $(".next-step-"+getStep).hide();
//         $(".previous").hide();
//         $("fieldset #page" + (position+1)).show();
//     }
//     else
//     {
     
//         $(".next-step-"+getStep).show();
//         $(".previous").show();
//         $("fieldset #page1").show();
//     }
   
//     console.log(getStep,position,stepsLenght);
//     if(position == stepsLenght){
//         $(".step-"+getStep).hide();
//         $('.next-step-'+getStep).trigger('click');
//     }

//     if(position == 10 || position == 15 || position == 22 || position == 27 || position == 32 || position == 38){
//       $(".next-step-"+getStep).show();
//       $(".action-button-previous").show();
//     }
 

//     $(".next-step-"+getStep).on("click",function(){
//          $(".next-step-2").hide();
//          $(".next-step-3").hide();
//          $(".next-step-4").hide();
//          $(".next-step-5").hide();
//          $(".next-step-6").hide();
//          $(".next-step-7").hide();
//          $(".action-button-previous").hide();
//          $(".previous-step").hide();
//          $(".next-step").hide();
//     })
   
// });

// $(document).on('click', "fieldset #prev", function(){
//     var position = $("fieldset .page:visible").data('bs-position');
//     var pageCount = $("fieldset .page").length;
//     $("fieldset .page:visible").hide();
//     if(position > 1){
//         $("fieldset #page" + (position-1)).show();
//     }
//     else
//     {
//         $("fieldset #page" + pageCount).show();
//     }
// });



// /*-----slick-slider------------*/
// jQuery(document).ready(function(){
//     jQuery('.conditions-list').slick({
//        slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       arrows: false,
//       variableWidth: true,
//       infinite: true,
//       autoplaySpeed: 0,
//       speed: 9000,
//       cssEase:'linear',
//       draggable: false,
//       pauseOnFocus: false,
//       pauseOnHover: false,
//       useTransform: false,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             autoplaySpeed: 0,
//                 speed: 9000,
//             cssEase:'linear',
//             draggable: false,
//             pauseOnFocus: false,
//             pauseOnHover: false,
//             useTransform: true,
//           }
//         },
//       ]
//     });

// });

// /*-----select-tag------------*/
// // const select = document.querySelector(".select");
// // const optionsList = document.querySelector(".options-list");
// // const options = document.querySelectorAll(".option");

// // select.addEventListener("click", () => {
// //   optionsList.classList.toggle("active");
// //   select.classList.toggle("active");
// //   select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
// // });

// // options.forEach((option) => {
// //   option.addEventListener("click", () => {
// //     options.forEach((option) => option.classList.remove("selected"));
// //     select.querySelector("span").innerHTML = option.innerHTML;
// //     option.classList.add("selected");

// //     optionsList.classList.toggle("active");
// //     select.classList.toggle("active");
// //     select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
// //   });
// // });


// /*-----select-tag------------*/
// $(document).ready(function() {
//   $(".select").click(function() {
//     $(".options-list").toggleClass("active");
//     $(this).toggleClass("active");
//     $(this).find(".fa-angle-down").toggleClass("fa-angle-up");
//   });

//   $(".option").click(function() {
//     $(".option").removeClass("selected");
//     $(".select span").html($(this).html());
//     $(this).addClass("selected");

//     $(".options-list").toggleClass("active");
//     $(".select").toggleClass("active");
//     $(".select .fa-angle-down").toggleClass("fa-angle-up");
//   });
// });




$('#testimonial_content').owlCarousel({
  items: 1,
  loop: true,
  margin: 50,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
});




// -------counter-js------//
/*--------counter-----------*/
(function($) {
  $.fn.countTo = function(options) {
      options = options || {};
      return $(this).each(function() {
          // set options for current element
          var settings = $.extend({}, $.fn.countTo.defaults, {
              from: $(this).data('from'),
              to: $(this).data('to'),
              speed: $(this).data('speed'),
              refreshInterval: $(this).data('refresh-interval'),
              decimals: $(this).data('decimals')
          }, options);
          // how many times to update the value, and how much to increment the value on each update
          var loops = Math.ceil(settings.speed / settings.refreshInterval),
              increment = (settings.to - settings.from) / loops;
          // references & variables that will change with each update
          var self = this,
              $self = $(this),
              loopCount = 0,
              value = settings.from,
              data = $self.data('countTo') || {};
          $self.data('countTo', data);
          // if an existing interval can be found, clear it first
          if (data.interval) {
              clearInterval(data.interval);
          }
          data.interval = setInterval(updateTimer, settings.refreshInterval);
          // initialize the element with the starting value
          render(value);

          function updateTimer() {
              value += increment;
              loopCount++;
              render(value);
              if (typeof(settings.onUpdate) == 'function') {
                  settings.onUpdate.call(self, value);
              }
              if (loopCount >= loops) {
                  // remove the interval
                  $self.removeData('countTo');
                  clearInterval(data.interval);
                  value = settings.to;
                  if (typeof(settings.onComplete) == 'function') {
                      settings.onComplete.call(self, value);
                  }
              }
          }

          function render(value) {
              var formattedValue = settings.formatter.call(self, value, settings);
              $self.text(formattedValue);
          }
      });
  };
  $.fn.countTo.defaults = {
      from: 0, // the number the element should start at
      to: 0, // the number the element should end at
      speed: 1000, // how long it should take to count between the target numbers
      refreshInterval: 100, // how often the element should be updated
      decimals: 0, // the number of decimal places to show
      formatter: formatter, // handler for formatting the value before rendering
      onUpdate: null, // callback method for every time the element is updated
      onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
      return value.toFixed(settings.decimals);
  }
}
(jQuery));

jQuery(function($) {
  // start all the timers
  $('.timer').each(count);
  // restart a timer when a button is clicked
  $(window).scroll(function() {
      //console.log($(window).scrollTop());
      if ($(window).scrollTop() > 300 && $(window).scrollTop() < 2000) {
          $('.timer').each(count);
      }
  });

  function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data('countToOptions') || {});
      $this.countTo(options);
  }
});




// header-sticky-js-start
$(window).scroll(function() {
  if ($(this).scrollTop() > 90) {
      $('header').addClass('sticky-header');
  } else {
      $('header').removeClass('sticky-header');
  }
});
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 90) {
      $('.navbar').addClass("shrink");
      $('.navbar-brand  img').attr('src', 'assets/image/heal-logo.svg');
  } else {
      $('.navbar').removeClass("shrink");
      $('.navbar-brand  img').attr('src', 'assets/image/healin-logo.svg');
  }
});

// owl-js
$('.support-team-slider').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  //center:true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 3
      },
      1000: {
          items: 6
      }
  }
});

$('#testimonial_content').owlCarousel({
  items: 1,
  loop: true,
  margin: 50,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
});

$('#service_content').owlCarousel({
  items: 1,
  loop: true,
  margin: 20,
  nav: true,
  center: true,
  dots: false,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 3
      }
  }
});
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// tabs-js
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();
// Click function
$('#tabs-nav li').mouseenter(function() {
  $('#tabs-nav li').removeClass('active');
  // $(this).addClass('active');
  $('.tab-content').hide();
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});
// toggle-btn-js
$(".navbar-toggler").click(function() {
  $(this).toggleClass('navbar-closed');
  $("html").toggleClass("myClass");
});
// aos-js
AOS.init({
  disable: function() {
      var maxWidth = 991;
      return window.innerWidth < maxWidth;
  }
});
/*----------------*/
$(document).ready(function() {
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
 
//   const therapistValidation = therapistvalidate(current);

//   if(therapistValidation == false){
//     return;
//   }
  setProgressBar(current);
  $(".next").click(function() {
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({
          opacity: 0
      }, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
              current_fs.css({
                  display: "none",
                  position: "relative"
              });
              next_fs.css({
                  opacity: opacity
              });
          },
          duration: 500
      });
      setProgressBar(++current);
  });
  $(".previous").click(function() {
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      //show the previous fieldset
      previous_fs.show();
      //hide the current fieldset with style
      current_fs.animate({
          opacity: 0
      }, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
              current_fs.css({
                  display: "none",
                  position: "relative"
              });
              previous_fs.css({
                  opacity: opacity
              });
          },
          duration: 500
      });
      setProgressBar(--current);
  });

  function setProgressBar(curStep) {
      var percent = parseFloat(100 / steps) * curStep;
      percent = percent.toFixed();
      $(".progress-bar").css("width", percent + "%");
  }
  $(".submit").click(function() {
      return false;
  });
});
/*------questions-steps-js------*/
$(document).ready(function() {
  $("fieldset .page").hide();
  $("fieldset #page1").show(function () {
    $("#prev").css("display", "none");
  });
});




// Previous and next logic start

$(document).on('click', "fieldset #next", function() {
    $("#prev").css("display", "inline");
  var pageCount = $("fieldset .page").length;
  var getStep = $(this).data('step');
  var stepsLenght = $(this).parent().parent().find('.page:last').data('bs-position');
  var position = $("fieldset .page:visible").data('bs-position');

  if($(".fieldset-step-1 .page1").attr("class")?.split(" ")[1] === "ac") {
    $("#prev").css("display", "none");
  }

//   console.log(pageCount);
//   console.log(getStep);
//   console.log(stepsLenght);
//   console.log(position);
   
  const checkValidation = validate(position);

  if(checkValidation == false){
    return
  }
//   console.log(stepsLenght);
  $("fieldset .page:visible").hide();
  if (position < pageCount) {
      let get_position = parseInt(position) + 1;
      $("fieldset #page" + get_position).show();
  } else {
      $("fieldset #page1").show();
  }
  if (position == stepsLenght) {
      $(".step-" + getStep).hide();
      $('.next-step-' + getStep).trigger('click');
  }
});


$(document).on('click', "fieldset #prev", function() {
    // $(".fieldset-step-1 #page1").attr("class", "ac");
    // if($(".fieldset-step-1 #page1").attr("class")?.split(" ")[1] === "ac") {
    //     $("#prev").css("display", "none");
    //   }
  var position = $("fieldset .page:visible").data('bs-position');
  var getStep = $(this).data('step');
  var stepsLenght = $(this).parent().parent().find('.page:last').data('bs-position');
  var pageCount = $("fieldset .page").length;

  var stepObj = {
    getStep : getStep,
    currentStep : getStep
  }

    console.log(position);
    console.log(getStep);
    console.log(stepsLenght);
    console.log(pageCount);

  $("fieldset .page:visible").hide();


//   if (position > 1) {
//       $("fieldset #page" + (position - 1)).show();
//   } else {
//       $("fieldset #page" + pageCount).show();
//   }

if (position < pageCount) {
    let get_position = parseInt(position) - 1;
    $("fieldset #page" + get_position).show();
} else {
    $("fieldset #page1").show();
}
if ((position - 1) > stepsLenght) {
    $(".step-" + getStep).hide();
    $('.prev-step-' + getStep).trigger('click');
}

});

// Previous and next logic end 



/*-----slick-slider------------*/
jQuery(document).ready(function() {
  jQuery('.conditions-list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      variableWidth: true,
      infinite: true,
      autoplaySpeed: 0,
      speed: 9000,
      cssEase: 'linear',
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      useTransform: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              arrows: false,
              centerMode: true,
              autoplaySpeed: 0,
              speed: 9000,
              cssEase: 'linear',
              draggable: false,
              pauseOnFocus: false,
              pauseOnHover: false,
              useTransform: true,
          }
      }, ]
  });
});
/*-----select-tag------------*/
// $(document).ready(function() {
//   $(".select").click(function() {
//     $(".options-list").toggleClass("active");
//     $(this).toggleClass("active");
//     $(this).find(".fa-angle-down").toggleClass("fa-angle-up");
//   });
//   $(".option").click(function() {
//     $(".option").removeClass("selected");
//     $(".select span").html($(this).html());
//     $(this).addClass("selected");
//     $(".options-list").toggleClass("active");
//     $(".select").toggleClass("active");
//     $(".select .fa-angle-down").toggleClass("fa-angle-up");
//   });
// });
/*--select-age---*/
$(document).ready(function() {
  $("#select_age .select").click(function() {
      $("#select_age .options-list").toggleClass("active");
      $(this).toggleClass("active");
      $(this).find(".fa-angle-down").toggleClass("fa-angle-up");
  });
  $("#select_age .option").click(function() {
      $("#select_age .option").removeClass("selected");
      $("#select_age .select span").html($(this).html());
      $(this).addClass("selected");
      $("#select_age .options-list").toggleClass("active");
      $("#select_age .select").toggleClass("active");
      $("#select_age .select .fa-angle-down").toggleClass("fa-angle-up");
  });
});
/*---select-country--*/
$(document).ready(function() {
  $("#select_country .select").click(function() {
      $("#select_country .options-list").toggleClass("active");
      $(this).toggleClass("active");
      $(this).find(".fa-angle-down").toggleClass("fa-angle-up");
  });
  $("#select_country .option").click(function() {
      $("#select_country .option").removeClass("selected");
      $("#select_country .select span").html($(this).html());
      $(this).addClass("selected");
      $("#select_country .options-list").toggleClass("active");
      $("#select_country .select").toggleClass("active");
      $("#select_country .select .fa-angle-down").toggleClass("fa-angle-up");
  });
});
/*----select-language----*/
$(document).ready(function() {
  $("#select_language .select").click(function() {
      $("#select_language .options-list").toggleClass("active");
      $(this).toggleClass("active");
      $(this).find(".fa-angle-down").toggleClass("fa-angle-up");
  });
  $("#select_language .option").click(function() {
      $("#select_language .option").removeClass("selected");
      $("#select_language .select span").html($(this).html());
      $(this).addClass("selected");
      $("#select_language .options-list").toggleClass("active");
      $("#select_language .select").toggleClass("active");
      $("#select_language .select .fa-angle-down").toggleClass("fa-angle-up");
  });
});
/*---select_country_qualification--*/
$(document).ready(function() {
  $("#select_country_qualification .select").click(function() {
      $("#select_country_qualification .options-list").toggleClass("active");
      $(this).toggleClass("active");
      $(this).find(".fa-angle-down").toggleClass("fa-angle-up");
  });
  $("#select_country_qualification .option").click(function() {
      $("#select_country_qualification .option").removeClass("selected");
      $("#select_country_qualification .select span").html($(this).html());
      $(this).addClass("selected");
      $("#select_country_qualification .options-list").toggleClass("active");
      $("#select_country_qualification .select").toggleClass("active");
      $("#select_country_qualification .select .fa-angle-down").toggleClass("fa-angle-up");
  });
});
/*----select_language_therapy----*/
$(document).ready(function() {
  $("#select_language_therapy .select").click(function() {
      $("#select_language_therapy .options-list").toggleClass("active");
      $(this).toggleClass("active");
      $(this).find(".fa-angle-down").toggleClass("fa-angle-up");
  });
  $("#select_language_therapy .option").click(function() {
      $("#select_language_therapy .option").removeClass("selected");
      $("#select_language_therapy .select span").html($(this).html());
      $(this).addClass("selected");
      $("#select_language_therapy .options-list").toggleClass("active");
      $("#select_language_therapy .select").toggleClass("active");
      $("#select_language_therapy .select .fa-angle-down").toggleClass("fa-angle-up");
  });
});


// mayur-css-25-01-2024
$('.therapists-salider').owlCarousel({
  loop:true,
  margin:50,
  nav:true,
  dots: true,
  autoplay:true,
  loop:true,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  center:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:2
      }
  }
})



//user validation

function validate(position){
   
    if (position === 1) {
        var nameValue = $("input.your-name").val().trim();
    
        if (nameValue === "") {
          $("#your_name_err").css("display","block")
          return false;
        }else{
            $("#your_name_err").css("display","none")
        }
      }
      else if(position === 2){
        var nameLookingFor = $('input[name="looking_for"]:checked').val();
        if(nameLookingFor === undefined){
           $("#looking_for_err").css("display","block")
           return false;
        }else{
            $("#looking_for_err").css("display","none")
        }  
      }
      else if(position === 3){
        var nameLookingFor = $('input[name="gender"]:checked').val();
        if(nameLookingFor === undefined){
           $("#gender_err").css("display","block")
           return false;
        }else{
            $("#gender_err").css("display","none")
        }  
      }
      else if(position === 4){
        var age = $(".age-value span").text();
        if(age === "Select your age"){
            $("#age_err").css("display","block")
            return false;
         }else{
             $("#age_err").css("display","none")
         }  
      }
      else if(position === 5){
        var relationshipStatus = $('input[name="relationship_status"]:checked').val();
        if(relationshipStatus === undefined){
            $("#relationship_status_err").css("display","block")
            return false;
         }else{
             $("#relationship_status_err").css("display","none")
         }  
      }
      else if(position === 6){
        var relationshipStatus = $('input[name="therapy_before"]:checked').val();
        if(relationshipStatus === undefined){
            $("#therapy_before_err").css("display","block")
            return false;
         }else{
             $("#therapy_before_err").css("display","none")
         }  
      }
      else if(position === 7){
        var getData = $('input[name="therapy_today"]:checked').val();
        if(getData === undefined){
            $("#therapy_today_err").css("display","block")
            return false;
         }else{
             $("#therapy_today_err").css("display","none")
         }  
      } 
      else if(position === 8){
        var getData = $('input[name="therapist_looking_for"]:checked').val();
        if(getData === undefined){
            $("#therapist_looking_for_err").css("display","block")
            return false;
         }else{
             $("#therapist_looking_for_err").css("display","none")
         }  
      } 
      else if(position === 9){
        var getData = $('input[name="expectations_therapist"]:checked').val();
        if(getData === undefined){
            $("#expectations_therapist_err").css("display","block")
            return false;
         }else{
             $("#expectations_therapist_err").css("display","none")
         }  
      }
      else if(position === 10){
        var getData = $('input[name="physical_health"]:checked').val();
        if(getData === undefined){
            $("#physical_health_err").css("display","block")
            return false;
         }else{
             $("#physical_health_err").css("display","none")
         }  
      }
      else if(position === 11){
        var getData = $('input[name="eating_habits"]:checked').val();
        if(getData === undefined){
            $("#eating_habits_err").css("display","block")
            return false;
         }else{
             $("#eating_habits_err").css("display","none")
         }  
      }
      else if(position === 12){
        var getData = $('input[name="feelings_of_anxiety"]:checked').val();
        if(getData === undefined){
            $("#feelings_of_anxiety_err").css("display","block")
            return false;
         }else{
             $("#feelings_of_anxiety_err").css("display","none")
         }  
      }
      else if(position === 13){
        var getData = $('input[name="little_interest"]:checked').val();
        if(getData === undefined){
            $("#little_interest_err").css("display","block")
            return false;
         }else{
             $("#little_interest_err").css("display","none")
         }  
      }
      else if(position === 14){
        var getData = $('input[name="hyper_and_restless"]:checked').val();
        if(getData === undefined){
            $("#hyper_and_restless_err").css("display","block")
            return false;
         }else{
             $("#hyper_and_restless_err").css("display","none")
         }  
      }
      else if(position === 15){
        var getData = $('input[name="depressed_and_hopeless"]:checked').val();
        if(getData === undefined){
            $("#depressed_and_hopeless_err").css("display","block")
            return false;
         }else{
             $("#depressed_and_hopeless_err").css("display","none")
         }  
      }
      else if(position === 16){
        var getData = $('input[name="sleeping_too_much"]:checked').val();
        if(getData === undefined){
            $("#sleeping_too_much_err").css("display","block")
            return false;
         }else{
             $("#sleeping_too_much_err").css("display","none")
         }  
      }
      else if(position === 17){
        var getData = $('input[name="very_little_energy"]:checked').val();
        if(getData === undefined){
            $("#very_little_energy_err").css("display","block")
            return false;
         }else{
             $("#very_little_energy_err").css("display","none")
         }  
      }
      else if(position === 18){
        var getData = $('input[name="eating_too_much"]:checked').val();
        if(getData === undefined){
            $("#eating_too_much_err").css("display","block")
            return false;
         }else{
             $("#eating_too_much_err").css("display","none")
         }  
      }
      else if(position === 19){
        var getData = $('input[name="letting_people_down"]:checked').val();
        if(getData === undefined){
            $("#letting_people_down_err").css("display","block")
            return false;
         }else{
             $("#letting_people_down_err").css("display","none")
         }  
      }
      else if(position === 20){
        var getData = $('input[name="even_watching_television"]:checked').val();
        if(getData === undefined){
            $("#even_watching_television_err").css("display","block")
            return false;
         }else{
             $("#even_watching_television_err").css("display","none")
         }  
      }
      else if(position === 21){
        var getData = $('input[name="better_off_dead"]:checked').val();
        if(getData === undefined){
            $("#better_off_dead_err").css("display","block")
            return false;
         }else{
             $("#better_off_dead_err").css("display","none")
         }  
      }
      else if(position === 22){
        var getData = $('input[name="daily_life_at_work"]:checked').val();
        if(getData === undefined){
            $("#daily_life_at_work_err").css("display","block")
            return false;
         }else{
             $("#daily_life_at_work_err").css("display","none")
         }  
      }
      else if(position === 23){
        var getData = $('input[name="currently_employed"]:checked').val();
        if(getData === undefined){
            $("#currently_employed_err").css("display","block")
            return false;
         }else{
             $("#currently_employed_err").css("display","none")
         }  
      }
      else if(position === 24){
        var getData = $('input[name="you_drink_alcohol"]:checked').val();
        if(getData === undefined){
            $("#you_drink_alcohol_err").css("display","block")
            return false;
         }else{
             $("#you_drink_alcohol_err").css("display","none")
         }  
      }
      else if(position === 25){
        var getData = $('input[name="harming_yourself"]:checked').val();
        if(getData === undefined){
            $("#harming_yourself_err").css("display","block")
            return false;
         }else{
             $("#harming_yourself_err").css("display","none")
         }  
      }
      else if(position === 26){
        var getData = $('input[name="phobias"]:checked').val();
        if(getData === undefined){
            $("#phobias_err").css("display","block")
            return false;
         }else{
             $("#phobias_err").css("display","none")
         }  
      }
      else if(position === 27){
        var getData = $('input[name="medications"]:checked').val();
        if(getData === undefined){
            $("#medications_err").css("display","block")
            return false;
         }else{
             $("#medications_err").css("display","none")
         }  
      }
      else if(position === 28){
        var getData = $('input[name="chronic_pain"]:checked').val();
        if(getData === undefined){
            $("#chronic_pain_err").css("display","block")
            return false;
         }else{
             $("#chronic_pain_err").css("display","none")
         }  
      }
      else if(position === 29){
        var getData = $('input[name="financial_status"]:checked').val();
        if(getData === undefined){
            $("#financial_status_err").css("display","block")
            return false;
         }else{
             $("#financial_status_err").css("display","none")
         }  
      }
      else if(position === 30){
        var getData = $('input[name="sleeping_habits"]:checked').val();
        if(getData === undefined){
            $("#sleeping_habits_err").css("display","block")
            return false;
         }else{
             $("#sleeping_habits_err").css("display","none")
         }  
      }
      else if(position === 31){
        var getData = $('input[name="current_support_system"]:checked').val();
        if(getData === undefined){
            $("#current_support_system_err").css("display","block")
            return false;
         }else{
             $("#current_support_system_err").css("display","none")
         }  
      }
      else if(position === 32){
        var getData = $('input[name="useful_for_you"]:checked').val();
        if(getData === undefined){
            $("#useful_for_you_err").css("display","block")
            return false;
         }else{
             $("#useful_for_you_err").css("display","none")
         }  
      }
      else if(position === 33){
        var getData = $('input[name="your_therapist"]:checked').val();
        if(getData === undefined){
            $("#your_therapist_err").css("display","block")
            return false;
         }else{
             $("#your_therapist_err").css("display","none")
         }  
      }
      else if(position === 34){
        var getData = $('input[name="therapist_coach"]:checked').val();
        if(getData === undefined){
            $("#therapist_coach_err").css("display","block")
            return false;
         }else{
             $("#therapist_coach_err").css("display","none")
         }  
      }
      else if(position === 35){
        var getData = $('input[name="referred_healinhere"]:checked').val();
        if(getData === undefined){
            $("#referred_healinhere_err").css("display","block")
            return false;
         }else{
             $("#referred_healinhere_err").css("display","none")
         }  
      }
      else if(position === 36){
        var getData = $(".country span").text();
        if(getData === "Select your Country"){
            $("#counrty_err").css("display","block")
            return false;
         }else{
             $("#counrty_err").css("display","none")
         }  
          
      }
      else if(position === 37){
        var getData = $(".language span").text();
        if(getData === "Select your Language"){
            $("#language_err").css("display","block")
            return false;
         }else{
             $("#language_err").css("display","none")
         }  
          
      }
      else if(position === 38){
        var getData = $('input[name="mark_apply"]:checked').val();
        if(getData === undefined){
            $("#mark_apply_err").css("display","block")
            return false;
         }else{
             $("#mark_apply_err").css("display","none")
         }  
      }
}

//Therapists validation
// function therapistvalidate(current){
//    if (current === 1) {
//        var getData = $('input[name="professional_insurance"]:checked').val();
    
//        if(getData === undefined){
//         $("#professional_insurance_err").css("display","block")
//         return false;
//        }else{
//          $("#professional_insurance_err").css("display","none")
//        }  
//      }
    
// }