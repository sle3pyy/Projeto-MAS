function Comment(user, date, content) {
    this.user = ko.observable(user);
    this.date = ko.observable(date);
    this.content = ko.observable(content);
}

function ViewModel() {
    var self = this;
    this.comments = ko.observableArray([
        new Comment("João", "2023-01-01", "Ótimo serviço!"),
        new Comment("Maria", "2023-02-15", "Adorei a estadia."),
        // Adicione mais comentários conforme necessário
    ]);
    // Observable array to store the pets
    self.petsHospedated = ko.observableArray([]);

    // Function to load the pets from local storage
    self.loadPets = function() {
        var pets = JSON.parse(localStorage.getItem('pets_Hospedated')) || [];
        self.petsHospedated(pets);
        console.log(pets[0].name)
    };

    // Load the pets when the ViewModel is created
    self.loadPets();
    console.log("Vm innitiated")
}

$(document).ready(function() {
ko.applyBindings(new ViewModel());
});