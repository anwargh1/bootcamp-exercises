$("body").append("<div class= box> </div>")
$("body").append("<div class=box ></div>")
 
let twoBok= $(".box")
     
$(".box").hover(function () {
  twoBok.css("background-color", "red")
  $(this).css("background-color", "#8e44ad")
})