$(window).scroll(function () {
  var ratio =
    $(document).scrollTop() /
    (($(document).height() - $(window).height()) / 100);
  $("#progress").width(ratio + "%");
});

$(function () {
  $(".list-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 3,
  });
});
