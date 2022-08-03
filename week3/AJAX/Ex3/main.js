$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:9782806269171",
  success: function ({ items }) {
    for (const item of items) {
      console.log(item.volumeInfo.title);
      console.log(item.volumeInfo.authors[0]);
      console.log(item.volumeInfo.industryIdentifiers[1].identifier);
    }
  },
  error: function (xhr, text, error) {
    console.log(text);
  },
});
