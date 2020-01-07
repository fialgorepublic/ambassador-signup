$('head').append('<link rel="stylesheet" href="https://popup.saintlbeau.com/file.css">')
$('head').append('<script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>')
var html = '<div id="list-builder">' + '</div>' +
'<div id="popup-box">'+ '<img src="/close-icon.png" id="popup-close" />' +
'<div id="popup-box-content">' + '<h1><span>Signup</span> Now To Get Free Shipping!</h1>' +
'<p>“ENJOY FREE SHIPPING”</p>'+
'<div class="custom-btn">'+ '<a href="https://ambassador.saintlbeau.com/?signup=true" class="btn btn-success" role="button", >Signup</a>' +
'<button type="button" class="cancel">Cancel</button>'+ '</div>' + '</div>' + '</div>'

$('body').append(html)
$(document).ready(function() {
  var delay = 300; // milliseconds
  var cookie_expire = 0; // days
  var cookie = localStorage.getItem("list-builder");
  if(cookie == undefined || cookie == null) {
    cookie = 0;
  }

  if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
    $("#list-builder").delay(delay).fadeIn("fast", () => {
      $("#popup-box").fadeIn("fast", () => {});
    });

    $("button[name=subscribe]").click(() => {
      $.ajax({
        type: "POST",
        url: $("#popup-form").attr("action"),
        data: $("#popup-form").serialize(),
        success: (data) => {
          $("#popup-box-content").html("<p style='text-align: center'>...............!</p>");
        }
      });
    });

    $("#popup-close").click(() => {
      $("#list-builder, #popup-box").hide();
      localStorage.setItem("list-builder", (new Date()).getTime());
    });
  }

});
