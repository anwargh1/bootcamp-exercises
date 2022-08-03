$("#search-but").on("click", function () {
  input = $("#search").val();
  $.get(`/priceCheck/${input}`, function (data) {
    $("#result").append(`<div>price :${data.price}</div>`);
  });
  $("input").val("");
});

// $("#buy-but").on("click", function () {
//   input = $("#buy").val();
//   $.get(`/buy/${input}`, function (data) {
//     console.log(data);
//     $("#result1").append(
//       `<div>Congratulations, you’ve just bought :${data.name} for ${data.price}. There are ${data.inventory} left now in the store.</div>`
//     );
//   });
//   $("input").val("");
// });

$("#buy-but").on("click", function () {
  input = $("#buy").val();
  $.get(`/buy/${input}`, function (data) {
    console.log(data);
    $("#result1").append(
      `<div>price: ${data.price}</div>`
    );
  });
  $("input").val("");
});
