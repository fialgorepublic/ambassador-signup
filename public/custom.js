$('head').append('<link rel="stylesheet" href="https://975ffa93.ngrok.io/file.css">')
$('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>' )
var html = '<button type="button" class="btn btn-info btn-lg" data-toggle="modal" id="myid" data-target="#myModal" style="display: none;">Click here </button>' + '<div class="modal fade" id="myModal" role="dialog">'+'<div class="modal-dialog">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
      '</div>'+
      '<div class="modal-body text-center">'+
        '<h4 class=""><b>Signup Now</b> to get free Shipping</h4>'+
      '</div>'+
      '<div class="modal-footer">'+
        '<a href="https://ambassador.saintlbeau.com/?signup=true" class="btn btn-success" role="button", >Signup</a>'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>'
$('body').append(html)
$(document).ready(function(){
  button = document.getElementById('myid')
  setTimeout(function() {
  $(button).click();
},10000);
})
