$(`.users`).click(() => {
  $("#spread").empty();
  $.get("/api/users/active", (result) => {
    for (i = 0; i < result.length; i++) {
      let { username, name, ghost_type, is_violent, address } = result[i];
      const $ghostCard = $(`<div id='ghost-card' class='card text-center'>`);
      $(`<h2 class='card-title'>Hunter: ${username}</h2>`).appendTo($ghostCard);
      $(`<h2 class='card-header'>Reported: ${name}, a ${ghost_type}.</h3>`).appendTo($ghostCard);
      const $cardBody = $(`<div class='card-body'></div>`);
      $(`<h3 class='card-text'>Reported at ${address}.</h3>`).appendTo($cardBody);
      if (is_violent === true) {
        $ghostCard.addClass("bg-danger");
        $(`<h3 class='card-text'>Has been known to be violent towards the living.</h3>`).appendTo($cardBody);
      } else {
        $ghostCard.addClass("bg-warning");
        $(`<h3 class='card-text'>Hasn't proven itself to be dangerous yet.</h3>`).appendTo($cardBody);
      }
      $cardBody.appendTo($ghostCard);
      $ghostCard.appendTo("#spread");
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
