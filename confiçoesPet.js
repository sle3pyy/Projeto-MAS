var vm= function(){
    var self = this;
    self.name = ko.observable();
    self.age = ko.observable();
    self.race = ko.observable();
    self.weight = ko.observable();
    self.animalType = ko.observable();
    self.checkinDate = ko.observable();
    self.checkoutDate = ko.observable();
    self.eaten = ko.observable();
    self.hotelName = ko.observable();
    self.petPhoto = ko.observable();
    self.status = ko.observable();
    self.message = ko.observableArray([]);
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    var account = accounts.find(account => account.email === self.loggedInUser.email);
    var animals = account.animals;
    self.animals = ko.observableArray([]);
    self.animals(animals);
    console.log(self.animals());
    var msgClientData = JSON.parse(localStorage.getItem('msgHotel'));

    self.activate = function (name) {
        self.name(name);
        var animal = self.animals().find(animal => animal.name == name);
        console.log(animal);
        self.age(animal.Age);
        self.race(animal.Race);
        self.weight(animal.Weight);
        self.animalType(animal.animalType);
        self.checkinDate(animal.checkinDate);
        self.checkoutDate(animal.checkoutDate);
        self.eaten(animal.eaten);
        self.hotelName(animal.hotelName);
        self.petPhoto(animal.petPhoto);
        self.status(animal.status);
        if (msgClientData) {
            var matchingMessages = msgClientData.filter(msg => msg.name === self.name() && msg.hotelName === self.hotelName());
            if (matchingMessages.length > 0) {
                self.message(matchingMessages);
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
        var pg = getUrlParameter('name');
        console.log(pg);
        if (pg == undefined)
            self.activate(1);
        else {
            self.activate(pg);
        }
        console.log("VM initialized!");
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
        
            var msgClient = JSON.parse(localStorage.getItem('msgClient')) || [];
            msgClient.push(newMsg);
            localStorage.setItem('msgClient', JSON.stringify(msgClient));
        
            $('#subject').val('');
            $('#message').val('');
        
            alert('Message sent!');
        });
};

$(function(){
    ko.applyBindings(new vm());
});
