function ViewModel() {
    var self = this;
    self.petsHospedated = ko.observableArray([]);
    self.pet = ko.observableArray([]);
    self.name = ko.observable('');
    self.checkinDate = ko.observable('');
    self.checkoutDate = ko.observable('');
    self.animalType = ko.observable('');
    self.race = ko.observable('');
    self.age = ko.observable('');
    self.weight = ko.observable('');

    self.loadPets = function(petName, hotel) {
        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        var account = accounts.find(account => account.email === self.loggedInUser.email);
        var pets = JSON.parse(localStorage.getItem('pets_Hospedated')) || [];
        var matchedPets = pets.filter(pet => pet.hotelName === account.name);
        var matchedPet = matchedPets.find(pet => pet.name === petName);
        self.pet(matchedPet);
        console.log(matchedPet);
        self.activate(matchedPet)
    };
    self.activate = function (pet) {
        self.name(pet.name)
        self.checkinDate(pet.checkinDate);
        self.checkoutDate(pet.checkoutDate);
        self.animalType(pet.animalType);
        self.race(pet.Race)
        self.age(pet.Age)
        self.weight(pet.Weight);
    };
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
        console.log("sPageURL=", sPageURL);
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
    var petName=getUrlParameter('name');
    var hotel=getUrlParameter('hotel');
    self.loadPets(petName,hotel);
}

$(document).ready(function() {
ko.applyBindings(new ViewModel());
});