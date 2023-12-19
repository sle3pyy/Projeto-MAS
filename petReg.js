$(document).ready(function() {
    $('form').on('submit', function(event) {
        console.log()
        event.preventDefault();
        var formData = {}; 
        var url="";
        $(this).find('input, select').each(function() {
            formData[$(this).attr('id')] = $(this).val();
            console.log(formData)
        });
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
        var loggedInEmail = localStorage.getItem('loggedInEmail');
        var account = existingData.find(account => account.email === loggedInEmail);

        if (!account) {
            alert('No logged-in account found.');
            return;
        }

        // Check if there is already an animal with the same name
        if (account.animals && account.animals.some(animal => animal.name === formData.name)) {
            alert('An animal with this name already exists.');
            return;
        }

        if (!account.animals) {
            account.animals = [];
        }
        
        account.animals.push(formData);

        localStorage.setItem('accounts', JSON.stringify(existingData));

        console.log(account)
        console.log(JSON.parse(localStorage.getItem('accounts')));
    });
});

    $('#clearAnimals').on('click', function() {
        // Get the existing data from local storage
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];

        // Get the logged-in email
        var loggedInEmail = localStorage.getItem('loggedInEmail');

        // Find the logged-in account
        var account = existingData.find(account => account.email === loggedInEmail);

        if (!account) {
            alert('No logged-in account found.');
            return;
        }

        // Clear the animals array of the account
        account.animals = [];

        // Store the updated accounts back in local storage
        localStorage.setItem('accounts', JSON.stringify(existingData));

        console.log(account);
        console.log(JSON.parse(localStorage.getItem('accounts')));
    });
   
    $('#logAccounts').on('click', function() {
        // Get the existing data from local storage
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];

        console.log(existingData);
    });
    $('#clearAccountsButton').on('click', function() {
        localStorage.removeItem('accounts');
        console.log('Accounts data has been cleared from localStorage.');
    });