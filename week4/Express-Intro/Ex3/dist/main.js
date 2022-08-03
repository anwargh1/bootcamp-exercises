const fetchPrice = function () {
  const input = $("#input-name").val();
  $.get(`priceCheck/${input}`, function (data) {
    $("#container").empty();
    $("#container").append(`<div>Price :${data}</div>`);
  });
};
