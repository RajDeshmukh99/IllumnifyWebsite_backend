// ----------------------------------NAV BAR--------------------------------
$("#toggle").click(function() {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});

$(".menu li a").on("click", function() {
  $("#toggle").click();
});

// --------------------------------------WOW JS-----------------------------------------------------

window.addEventListener("scroll", function(e) {
  if ($(window).scrollTop() <= 50) {
    $(".wow").removeClass("animated");
    $(".wow").removeAttr("style");
    new WOW().init();
  }
});

// -----------------------------PARALLAX AND NAV SCROLL------------------------------------

$(document).ready(function() {
  $(".parallax").parallax();
  $("a.scrollLink").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500
    );
  });
  $(".fluid-container").css("overflow-y", "hidden");

  $("#loader")
    .delay(1500)
    .fadeOut();
});
