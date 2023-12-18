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
        var existingData;
        try {
            existingData = JSON.parse(localStorage.getItem('accounts'));
        } catch (error) {
            console.error('Error parsing accounts from localStorage:', error);
        }
        if (!Array.isArray(existingData)) {
            existingData = [];
        }

        // Check if the email already exists
        if (existingData.some(account => account.email === formData.email)) {
            alert('This email is already used.');
            return;
        }

        // Add the new account to the existing data
        existingData.push(formData);

        // Convert the existingData array to a JSON string
        var json = JSON.stringify(existingData);

        // Store the JSON string in local storage
        localStorage.setItem('accounts', json);

        console.log(JSON.parse(localStorage.getItem('accounts')));
        window.location.href = 'index.html';
    });
});
