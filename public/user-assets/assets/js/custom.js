





// sidebar

var menu_btn = document.querySelector("#menu-btn");

var sidebar = document.querySelector("#sidebar");

var container = document.querySelector(".my-container");

var main_content = document.querySelector(".left-part");

var sidemenutbn = document.querySelector(".side-navbar .top-navbar");

var page_logo = document.querySelector(".page-logo");

var chat = document.querySelector(".chat-box");

menu_btn.addEventListener("click", () => {

  sidebar.classList.toggle("active-nav");

  container.classList.toggle("active-cont");

  main_content.classList.toggle("sidebarClose");

  menu_btn.classList.toggle("side-btn");

  page_logo.classList.toggle("page-logo-1");

  sidemenutbn.classList.toggle("sidemenutbn");

  chat.classList.toggle("chat-box-close");



});



//closesidebar

var menu_btn1 = document.querySelector("#close-btn");

var sidebar = document.querySelector("#sidebar");

var container = document.querySelector(".my-container");

var main_content = document.querySelector(".left-part");

var page_logo = document.querySelector(".page-logo");

var sidemenutbn = document.querySelector(".side-navbar .top-navbar");

var chat = document.querySelector(".chat-box");

menu_btn1.addEventListener("click", () => {

sidebar.classList.toggle("active-nav");

container.classList.toggle("active-cont");

main_content.classList.toggle("sidebarClose");

sidemenutbn.classList.toggle("sidemenutbn");

menu_btn.classList.toggle("side-btn");

page_logo.classList.toggle("page-logo-1");

chat.classList.toggle("chat-box-close");

$('.wrapper').removeClass('wrapper-2');



});




$(window).scroll(function() {

    var scroll = $(window).scrollTop();

    if (scroll >= 10) {



        $(".page-head").addClass("headerbg");

    } else {

        $(".page-head").removeClass("headerbg");

    }

});







/*------Therapist-List-slider------------*/
 $('.Therapist-List-slider').owlCarousel({

        loop:true,

        margin:20,

        nav:false,

         //center:true,

        dots:false,

        autoplay:true,

        autoplayTimeout:3000,

        autoplayHoverPause:true,


        responsive:{

        0:{

            items:1

        },

        600:{

            items:3.5

        },

        1000:{

            items:4.5

        }

    }

    });



/*--------profile-edit------------------*/

 $(document).ready(function() {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
        }
        $("#file").change(function(){
           readURL(this);
        });
    
//     var readURL = function(input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                 $('.profile-pic').attr('src', e.target.result);
//             }
    
//             reader.readAsDataURL(input.files[0]);
//         }
//     }
    

//     $(".file-upload").on('change', function(){
//         readURL(this);
//     });
    
//     // $(".upload-button").on('click', function() {
//     //    $(".file-upload").click();
//     // });
});





















