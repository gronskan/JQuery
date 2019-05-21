$(function() {
  $("p").click(function() {
    $("#walrus-showing").slideToggle() ;
    $("#walrus-hidden").slideToggle();
  });
  $("#walrus-showing").click(function() {
    $("#giraffe").show() ;
    $("#walrus-showing").hide();
    $("walrus-hidden").hide();
  });
});
