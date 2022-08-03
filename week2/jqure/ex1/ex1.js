$("button").on("click", function(){
    $("#human").append("<li class='blog'>"+ $("input").val()+"</li>")
     $("input").val("")
  })