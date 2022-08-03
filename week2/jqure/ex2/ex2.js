$("button").on("click", function(){
    $("#human").append("<li class='input'>"+ $("input").val()+"</li>")
     $("input").val("")
  })
  $("#human").on("click", ".input", function(){
    $(this).remove() 
  })