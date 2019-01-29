$(document).ready(function() {


  $("#clickme").on("click", function() {
    if(!window.matchMedia('(max-width: 992px)').matches){
      $("#lightbox").addClass("open");
    }
  });

  $("#close").on("click", function() {
    if(!window.matchMedia('(max-width: 992px)').matches){
      $("#lightbox").removeClass("open");
    }
  });

  $("#lightbox").on("click", function(e) {
    if ((e.target.id == "lightbox") && !(window.matchMedia('(max-width: 992px)').matches)) {
      $("#lightbox").removeClass("open");
    }
  });
});
