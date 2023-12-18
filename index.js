var vm= function(){
    var self = this;
    self.animals = ko.observableArray([]);

    // Check if the user is logged in
    if (localStorage.getItem('loggedInEmail')) {
        $('a[href="log-in.html"]').html('<i class="fas fa-user"></i>').attr('href', 'account.html');
        $('a[href="sign-in.html"]').text('Log out').attr('href', 'index.html').attr('id', 'logout');
        self.loggedInEmail = localStorage.getItem('loggedInEmail');

        // Get the existing data from local storage
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];

        // Find the logged-in account
        var account = existingData.find(account => account.email === self.loggedInEmail);

        if (account && account.animals) {
            // Set the animals observable to the animals array of the account
            self.animals(account.animals);
        }

        console.log('Logged in!');
        console.log(self.animals())
    }
    else {
        console.log('Not logged in!');
    }

    $('#logout').on('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        localStorage.removeItem('loggedInEmail');
        window.location.href = 'index.html'; // Replace with your actual homepage URL
    });}


$(document).ready(function() {
    var viewModel = new vm();
    ko.applyBindings(viewModel);
});