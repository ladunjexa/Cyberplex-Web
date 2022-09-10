$(".menu").click(() => {
  $(".target").each(function () {
    $(this).toggleClass("change");
  });
});

$(".wrapper").each(function () {
  $(this).click(() => {
    $(".target").each(function () {
      $(this).removeClass("change");
    });
  });
});

$(".video").each(function () {
  $(this).on("mouseover", () => {
    this.play();
  });
  $(this).on("mouseout", () => {
    this.pause();
  });
});
