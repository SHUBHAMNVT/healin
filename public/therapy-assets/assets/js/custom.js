





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



































