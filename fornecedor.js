$(document).ready(function () {
  $("#editHotelForm").submit(function (event) {
    event.preventDefault();

    var newName = $("#editHotelName").val();
    var newAddress = $("#editHotelAddress").val();
    var newDescription = $("#editHotelDescription").val();
    var newPhotos = $("#editNewPhotos").prop("files");

    $("#hotelName").text("Bem-vindo ao " + newName);
    $("#hotelAddress").text(newAddress);
    $("#hotelDescription").text(newDescription);

    $("#editHotelModal").modal("hide");
  });
});