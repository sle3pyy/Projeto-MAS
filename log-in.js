$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        var formData = {};

        $(this).find('input').each(function() {
            formData[$(this).attr('id')] = $(this).val();
        });
        console.log(formData);
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
        var account = existingData.find(existingData => existingData.email === formData.email && existingData.password === formData.pass);

        if (account === undefined) {
            alert('Invalid email or password.');
            return;
        } else {
            alert('Welcome back!');
            var loggedInUser = {
                email: formData.email,
                accType: account.accType
            };
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            console.log(JSON.parse(localStorage.getItem('loggedInUser')));
        }

        window.location.href = 'index.html';
    });
});