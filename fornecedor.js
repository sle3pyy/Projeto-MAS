function Comment(user, date, content) {
    this.user = ko.observable(user);
    this.date = ko.observable(date);
    this.content = ko.observable(content);
}

function AppViewModel() {
    // Seu código existente...

    this.comments = ko.observableArray([
        new Comment("João", "2023-01-01", "Ótimo serviço!"),
        new Comment("Maria", "2023-02-15", "Adorei a estadia."),
        // Adicione mais comentários conforme necessário
    ]);

    // Adicione aqui o código para adicionar novos comentários
}

ko.applyBindings(new AppViewModel());

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