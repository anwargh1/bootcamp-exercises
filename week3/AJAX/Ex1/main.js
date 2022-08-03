const fetch = function (isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: function (data) {
      console.log(data.items[0].volumeInfo.title);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};
fetch(9780575087057);
