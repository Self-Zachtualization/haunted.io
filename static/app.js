$(`#users`).click(() => {
  $(`#bigmode`).show();
  $("#spread").empty();
  $.get("/api/users/active", (result) => {
    for (i = 0; i < result.length; i++) {
      let { username, name, ghost_type, is_violent, address } = result[i];
      const $col = $(`<div class="col mb-4"></div>`);
      const $ghostCard = $(`<div id='ghost-card' class='card h-100'></div>`);
      $(`<h4 class='card-header'>${name}, a ${ghost_type}</h4>`).appendTo($ghostCard);
      const $cardBody = $(`<div class='card-body text-center'></div>`);
      $(`<h4 class='card-subtitle pt-3'>Reported by ${username}</h4>`).appendTo($cardBody);
      $(`<h5 class='card-text'>At ${address}</h5>`).appendTo($cardBody);
      $cardBody.appendTo($ghostCard);
      if (is_violent === true) {
        $ghostCard.addClass("bg-danger");
        $(`<h5 class='card-footer'>Has been known to be violent towards the living.</h5>`).appendTo(
          $ghostCard
        );
      } else {
        $ghostCard.addClass("bg-warning");
        $(`<h5 class='card-footer'>Hasn't proven itself to be dangerous yet.</h5>`).appendTo($ghostCard);
      }
      $ghostCard.appendTo($col);
      $col.appendTo("#spread");
    }
  });
});

$("form").submit((event) => {
  event.preventDefault();

  const ghostInfo = {};

  $("#new-ghost")
    .find("input")
    .each((i, e) => {
      ghostInfo[e.name] = e.value;
    });
  ghostInfo.is_violent = $("input[type=radio][name=is_violent]:checked").val();
  $.ajax({
    url: "/api/ghosts",
    type: "POST",
    data: JSON.stringify(ghostInfo),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: (result) => {
      const { name, ghost_type } = JSON.stringify(result);
      alert(`Successfully added ${name} the ${ghost_type}.\nGood luck hunter`);
    },
  });
});
