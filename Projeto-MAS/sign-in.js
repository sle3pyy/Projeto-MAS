$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var formData = {}; // Initialize an empty object to hold the form data

        // Iterate over each input field in the form
        $(this).find('input').each(function() {
            // Add the input field's id as the key and its value as the value to the formData object
            formData[$(this).attr('id')] = $(this).val();
        });

        // Get the existing data from local storage
        var existingData = JSON.parse(localStorage.getItem('accounts')) || {};

        // Check if the email already exists
        if (existingData['email'] === formData['email']) {
            alert('This email is already used.');
            return;
        }

        // Convert the formData object to a JSON string
        var json = JSON.stringify(formData);

        // Store the JSON string in local storage
        localStorage.setItem('accounts', json);

        

        console.log(JSON.parse(localStorage.getItem('accounts')));
    });
});
