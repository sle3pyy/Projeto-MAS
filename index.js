var vm= function(){
    var self = this;
    self.animals = ko.observableArray([]);
    self.petPhotos = ko.observableArray([]);
    self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    console.log(self.loggedInUser.email);

    if (self.loggedInUser.email) {
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
        var account = existingData.find(account => account.email === self.loggedInUser.email);
        console.log(account);
        if (account && account.animals) {
            self.animals(account.animals);
        }
        console.log(self.animals())
    }
    else {
        console.log('Not logged in!');
    }
    
    $('#logout').on('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.html'; 
    });
};

$(document).ready(function() {
    var viewModel = new vm();
    ko.applyBindings(viewModel);
});