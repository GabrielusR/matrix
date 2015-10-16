$(document).ready (function() {
  $("div.looking").mouseover(function() {
    $(".looking").css("word-spacing","initial");
    $(".looking").css("visibility","visible");
    $("div.whatis").css("display", "initial");
  });
  $("div.whatis").mouseover(function() {
    $(this).fadeOut(2000);
    $(".whatis").css("word-spacing","initial");
    $(".whatis").css("visibility","visible");
    $("div.welcome").css("display", "initial");
  });
  $("div.welcome").mouseover(function() {
    $(this).fadeOut(2000);
    $(".welcome").css("word-spacing","initial");
    $(".welcome").css("visibility","visible");
    $("div.welcome").css("display", "initial");
  });
});