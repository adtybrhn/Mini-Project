$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$(document).ready(function () {
    $('#myModal').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $(".img-responsive").attr("src", image);
    });
});

function soldout() {
    var x = document.getElementsByClassName("sold");
    x[0].innerHTML = "Sold Out";
  }

function available() {
    var x = document.getElementsByClassName("avail");
    x[0].innerHTML = "Available";
  } 

function soon() {
    var x = document.getElementsByClassName("soon");
    x[0].innerHTML = "Available";
  }  

document.getElementById(id).addEventListener("click", functionname)

