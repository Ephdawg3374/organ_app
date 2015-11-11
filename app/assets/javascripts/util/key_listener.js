$(document).on("keydown", function (e) {
  KeyActions.keyPressed(String.fromCharCode(e.which));
});

$(document).on("keyup", function (e) {
  KeyActions.keyDepressed(String.fromCharCode(e.which));
});
