function Comment(user, date, content) {
    this.user = ko.observable(user);
    this.date = ko.observable(date);
    this.content = ko.observable(content);
}

function ViewModel() {
    var self = this;
    self.id = ko.observable('');
    self.hotel = ko.observableArray([]);
    self.name = ko.observable('');
    self.rua = ko.observable('');
    self.cidade = ko.observable('');
    self.Distrito = ko.observable('');
    self.miniDescription = ko.observable('');
    self.description = ko.observable('');
    self.price = ko.observable(''); 
    self.rating = ko.observable('');
    self.miniPhoto = ko.observable('');
    self.bigPhoto = ko.observable('');  
    self.messages = ko.observable("0");
    self.petsHospedated = ko.observableArray([]);
    var msgClientData = JSON.parse(localStorage.getItem('msgClient'));
    if (msgClientData) {
        var length = (Object.values(msgClientData).length);
        self.messages(length);
    }

    this.comments = ko.observableArray([
        new Comment("João", "2023-01-01", "Ótimo serviço!"),
        new Comment("Maria", "2023-02-15", "Adorei a estadia."),
    ]);
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    var account = accounts.find(account => account.email === loggedInUser.email);
    self.hotel(account);
    console.log(account);
    self.activate = function (id) {
        hotel=self.hotel();
        self.id(id);
        self.name(hotel.name);
        self.miniDescription(hotel.miniDescription);
        self.description(hotel.description);
        self.price(hotel.price);
        self.rating(hotel.rating);
        self.miniPhoto(hotel.miniPhoto);
        self.bigPhoto(hotel.bigPhoto);
        self.rua(hotel.rua)
        self.cidade(hotel.cidade);
        self.Distrito(hotel.Distrito);
       
       self.loadPets();
    };
    // Function to load the pets from local storage
    self.loadPets = function() {
        var pets = JSON.parse(localStorage.getItem('pets_Hospedated')) || [];
        self.petsHospedated(pets);
        var matchedPets = pets.filter(pet => pet.hotelName === self.name());
        self.petsHospedated(matchedPets);
        console.log(matchedPets)
    };
    self.activate(self.hotel.id)
    console.log("Vm innitiated")
}

$(document).ready(function() {
ko.applyBindings(new ViewModel());
});