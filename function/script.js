$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$(document).ready(function () {
    $('#myModal').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $(".img-responsive").attr("src", image);
    });
});

function soon() {
    var x = document.getElementsByClassName("soon");
    x[0].innerHTML = "Available";
  }  

document.getElementById(id).addEventListener("click", functionname)

function stock() {
    var x = document.getElementById("obelisk");
    x.innerHTML = "Sold Out";

    var y = document.getElementById("ra");
    y.innerHTML = "Available";

    var z = document.getElementById("osiris");
    z.innerHTML = "Soon";
  }