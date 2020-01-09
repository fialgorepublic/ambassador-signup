$('head').append('<link rel="stylesheet" href="https://popup.saintlbeau.com/file.css">')
$('head').append('<script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>')
var html = '<div id="list-builder">' + '</div>' +
'<div id="popup-box">'+ '<img src="https://popup.saintlbeau.com/close-icon.png" id="popup-close" />' +
'<div id="popup-box-content">' + '<div class="main-divv">' + '<div class="row">' +
'<div class="col-md-6 ">' + '<div class="upper-mg-mob">' + '<a><img src="https://popup.saintlbeau.com/popup box-07.png"></a>' +
'</div>' + '</div>' + '</div>' + '<div class="row">' + '<div class="col-md-6 ">' +
'<div class="mg-mob">' + '<img src="https://popup.saintlbeau.com/popup box-05.png">' + 
'</div>' + '</div>' + '</div>' + '</div>'
'</div>' + '</div>'

$('body').append(html)
$(document).ready(function() {
  // if (window.location.href == "https://www.saintlbeau.com/") {
    var delay = 10000; // milliseconds
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

      $(".popup-close").click(() => {
        $("#list-builder, #popup-box").hide();
        localStorage.setItem("list-builder", (new Date()).getTime());
      });
    }

  // }  
});
