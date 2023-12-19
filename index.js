var vm= function(){
    var self = this;
    self.animals = ko.observableArray([]);
    self.petPhotos = ko.observableArray([]);
    self.loggedInEmail = localStorage.getItem('loggedInEmail');
    console.log(self.loggedInEmail);
    

    // Check if the user is logged in
    if (localStorage.getItem('loggedInEmail')) {
        $('a[href="log-in.html"]').html('<i class="fas fa-user"></i>').attr('href', 'petReg.html');
        $('a[href="sign-in.html"]').text('Log out').attr('href', 'index.html').attr('id', 'logout');
        

        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
        var account = existingData.find(account => account.email === self.loggedInEmail);
        if (account && account.animals) {
            self.animals(account.animals);

        }
        console.log('Logged in!');
        console.log(self.animals())
    }
    else {
        console.log('Not logged in!');
    }

    $('#logout').on('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('loggedInEmail');
        window.location.href = 'index.html'; 
    });}


$(document).ready(function() {
    var viewModel = new vm();
    ko.applyBindings(viewModel);
});