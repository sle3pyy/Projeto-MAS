function ViewModel() {
    var self = this;
    self.petsHospedated = ko.observableArray([]);
    self.pet = ko.observableArray([]);
    self.name = ko.observable('');
    self.checkinDate = ko.observable('');
    self.checkoutDate = ko.observable('');
    self.animalType = ko.observable('');
    self.hotelName = ko.observable('');
    self.race = ko.observable('');
    self.age = ko.observable('');
    self.weight = ko.observable('');
    self.petPhoto = ko.observable('');
    self.message = ko.observableArray([]);
    var msgClientData = JSON.parse(localStorage.getItem('msgClient'));
    
    self.loadPets = function(petName) {
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
    var alimentacaoAnimalSelect = document.getElementById('alimentacaoAnimal');
    var comportamentoAnimalSelect = document.getElementById('comportamentoAnimal');

    alimentacaoAnimalSelect.onchange = handleSelectChange;
    comportamentoAnimalSelect.onchange = handleSelectChange;

    function handleSelectChange() {
        var alimentacaoAnimal = alimentacaoAnimalSelect.value;
        var comportamentoAnimal = comportamentoAnimalSelect.value;
        console.log('Alimentação do Animal:', alimentacaoAnimal);
        console.log('Comportamento do Animal:', comportamentoAnimal);

        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        var account = accounts.find(account => account.email === self.pet().owner);
        var animals = account.animals;
        console.log(animals);
        matchedPet=self.pet()
        matchedPet.eaten = alimentacaoAnimal;
        matchedPet.status = comportamentoAnimal;

        var index = animals.findIndex(matchedPet => matchedPet.name === matchedPet.name);
        console.log(index)

        if (index !== -1) {
            animals[index] = matchedPet;
        }

        localStorage.setItem('accounts', JSON.stringify(accounts));
        console.log(JSON.parse(localStorage.getItem('accounts')));
    }
    self.activate = function (pet) {
        self.name(pet.name)
        self.checkinDate(pet.checkinDate);
        self.checkoutDate(pet.checkoutDate);
        self.animalType(pet.animalType);
        self.race(pet.Race)
        self.age(pet.Age)
        self.weight(pet.Weight);
        self.petPhoto(pet.petPhoto);
        self.hotelName(pet.hotelName);
        if (msgClientData) {
            var matchingMessages = msgClientData.filter(msg => msg.name === self.name() && msg.hotelName === self.hotelName());
            if (matchingMessages.length > 0) {
                self.message(matchingMessages);
                console.log(matchingMessages);
            }
        }

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
    self.loadPets(petName);
    $('form').on('submit', function(event) {
        event.preventDefault();
    
        var subject = $('#subject').val();
        var message = $('#message').val();
    
        var newMsg = {
            subject: subject,
            message: message,
            name: self.name(),
            hotelName: self.hotelName()
        };
    
        var msgClient = JSON.parse(localStorage.getItem('msgHotel')) || [];
        msgClient.push(newMsg);
        localStorage.setItem('msgHotel', JSON.stringify(msgClient));
    
        $('#subject').val('');
        $('#message').val('');
    
        alert('Message sent!');
    });
}

$(document).ready(function() {
ko.applyBindings(new ViewModel());
});

