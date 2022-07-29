$(`.users`).click(() => {
  $(".bigmode")
    .find(".card")
    .each(() => {
      $(this).empty();
    });
  $.get("/api/users/active", (result) => {
    for (i = 0; i < result.length; i++) {
      let { username, name, ghost_type, is_violent, address } = result[i];
      const $ghostCard = $(`<div class=ghost-card card`);
      $ghostCard.appendTo(".spread");
      $(`<h2 class='card-header'>Hunter: ${username}</h2>`).appendTo($ghostCard);
      $(`<h2 class='card-header'>Reported: ${name}</h3>`).appendTo($ghostCard);
      is_violent
        ? $ghostCard
            .addClass("bg-danger")
            .append($(`<p class='card-content'>Has been known to be violent towards the living.</p>`))
        : $ghostCard
            .addClass("bg-warning")
            .append(`<p class='card-content'>Hasn't proven itself to be dangerous yet.</p>`);
      $(`<p class='card-content'>`);
      $(`<p class='card-content'>Reported at ${address}.`).appendTo($ghostCard);
    }
  });
});

$(`.ghosts`).click(() => {
  $(".ghostbox").empty();
  $.get("/api/ghosts/active", (result) => {
    for (i = 0; i < result.length; i++) {
      let { name, ghost_type, is_violent, address } = result[i];
      $(`<h2>Ghost: ${name}</h2>`).appendTo(".ghostbox");
      $(`<h3>Ghost type: ${ghost_type}</h3>`).appendTo(".ghostbox");
      is_violent
        ? $(`<h3>Has been known to be violent towards the living.</h3>`).appendTo(".ghostbox")
        : $(`<h3>Hasn't proven itself to be dangerous yet.</h3>`).appendTo(".ghostbox");
      $(`<h3>Currently infests ${address}.</h3>`).appendTo(".ghostbox");
    }
  });
});

$("form").submit((event) => {
  event.preventDefault();

  const ghostInfo = {};
  $(".reporter")
    .find("input")
    .each((i, e) => {
      ghostInfo[e.name] = e.value;
    });
  ghostInfo.is_violent = $("input[type=radio][name=is_violent]:checked").val();
  // console.log(ghostInfo);
  $.ajax({
    url: "/api/ghosts",
    type: "POST",
    data: JSON.stringify(ghostInfo),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: (result) => {
      alert(`we got this from you: ${JSON.stringify(result)}`);
    },
  });
});
