$(document).ready(function() {~
    console.log(JSON.parse(localStorage.getItem('formData')));
    $('form').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var formData = {}; // Initialize an empty object to hold the form data

        // Iterate over each input field in the form
        $(this).find('input').each(function() {
            // Add the input field's id as the key and its value as the value to the formData object
            formData[$(this).attr('id')] = $(this).val();
        });
        console.log(formData);

        // Get the existing data from local storage
        var existingData = JSON.parse(localStorage.getItem('accounts')) || {};

        // Check if the email and password match the stored data
        if (existingData['email'] !== formData['email'] || existingData['password'] !== formData['pass']) {
            alert('Invalid email or password.');
            return;
        }
        else if(existingData['email'] === formData['email'] && existingData['password'] === formData['pass']){
            alert('Welcome back!');
        }

        // If the email and password match, you can proceed with the form submission
        // For example, you can redirect to another page
        window.location.href = 'index.html'; // Replace with your actual homepage URL
    });
});