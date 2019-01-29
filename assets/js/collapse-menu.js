$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $(".nav-menu").toggleClass("displayBlock");
    $(".bag").toggleClass("displayNone");
    $(".logo").toggleClass("displayNone");
    $(".free-shipping").toggleClass("displayNone");
  });
});
