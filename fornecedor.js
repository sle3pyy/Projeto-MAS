

$(document).ready(function () {
  // Função para manipular a submissão do formulário
  $("#editHotelForm").submit(function (event) {
    // Evite que o formulário seja enviado da maneira padrão
    event.preventDefault();

    // Obtenha os valores do formulário
    var newName = $("#editHotelName").val();
    var newAddress = $("#editHotelAddress").val();
    var newDescription = $("#editHotelDescription").val();
    var newPhotos = $("#editNewPhotos").prop("files");

    // Atualize a exibição com os novos valores
    $("#hotelName").text("Bem-vindo ao " + newName);
    $("#hotelAddress").text(newAddress);
    $("#hotelDescription").text(newDescription);

    // Adicione lógica para lidar com as novas fotos (por exemplo, enviar para o servidor)

    // Feche o modal
    $("#editHotelModal").modal("hide");
  });
});