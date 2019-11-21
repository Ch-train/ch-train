var video = document.querySelector("#video"),
    button = document.querySelector(".presentation-play-btn");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".presentation-play-btn").click(function() {
  $(".presentation-txt-wrp").addClass('presentation-play-btn--hide');
})