const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]
  const render = function(){
    for(let post of posts)
      {
        let postBack= $('<div class="postBack"><p class="name">' +post.name + '</p> <p class="text">' + post.text +'</div>')
            $("body").append(postBack)
      }
  }
  render() 


  $("button").on('click' , function(){
    posts.push({
       name : $("#text" ).val (),
       text : $("#text1").val() ,
   
        },
        
        $("#posts").empty(),
        render() )
  })
  
 