$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        var formData = {};

        $(this).find('input').each(function() {
            formData[$(this).attr('id')] = $(this).val();
        });
        console.log(formData);
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
        var account = existingData.find(account => account.email === formData.email && account.password === formData.pass);

        if (!account) {
            alert('Invalid email or password.');
            return;
        } else {
            alert('Welcome back!');
            localStorage.setItem('loggedInEmail', formData.email);
        }

        window.location.href = 'index.html';
    });
});