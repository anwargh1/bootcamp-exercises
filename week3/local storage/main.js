localStorage.setItem("wisdoms", JSON.stringify([]));

$("button").on("click", function () {
  const text = { text: $("input").val() };

  let bashar = JSON.parse(localStorage.wisdoms);
  bashar.push(text);
  localStorage.wisdoms = JSON.stringify(bashar);
  render();
});

const render = function () {
  $("#anwar").empty();
  let local = JSON.parse(localStorage.wisdoms);
  local.map((elemnt) => {
    $("#anwar").append(`<div >${elemnt.text}</div>`);
  });
};

$("#anwar").on("click", "div", function () {
  let bashar = JSON.parse(localStorage.wisdoms);
  let wisdom = $(this).text();
  bashar = bashar.filter((element) => element.text != wisdom);
  localStorage.wisdoms = JSON.stringify(bashar);
  render();
});
