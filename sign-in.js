$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        var formData = {}; 

        $(this).find('input').each(function() {
            formData[$(this).attr('id')] = $(this).val();
        });
        var existingData;
        try {
            existingData = JSON.parse(localStorage.getItem('accounts'));
        } catch (error) {
            console.error('Error parsing accounts from localStorage:', error);
        }
        if (!Array.isArray(existingData)) {
            existingData = [];
        }

        if (existingData.some(account => account.email === formData.email)) {
            alert('This email is already used.');
            return;
        }

        existingData.push(formData);
        var json = JSON.stringify(existingData);
        localStorage.setItem('accounts', json);
        console.log(JSON.parse(localStorage.getItem('accounts')));
        window.location.href = 'index.html';
    });
});
