$(document).ready(function() {
    $('form').on('submit', function(event) {
        console.log()
        event.preventDefault();
        var formData = {}; 

        $(this).find('input').each(function() {
            if (this.type === 'file') {
                // Get the first file from the files property
                var file = this.files[0];
        
                if (file) {
                    // Create a new FileReader object
                    var reader = new FileReader();
                    // Read the file as a data URL
                    reader.readAsDataURL(file);
                
                    // When the file is loaded
                    reader.onload = function(e) {
                        // Store the image data in formData using the stored reference to the file input element
                        formData["photo"] = e.target.result;
                
                    };
                }
            } else {
                formData[$(this).attr('id')] = $(this).val();
            }
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
   
    

$('#clearImages').on('click', function() {
    localStorage.removeItem('uploadedImage')
    ;});
    $('#logAccounts').on('click', function() {
        // Get the existing data from local storage
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];

        console.log(existingData);
    });