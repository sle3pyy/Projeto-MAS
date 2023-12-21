$('form').on('submit', function(event) {
    event.preventDefault();
    var formData = {}; 
    $(this).find('input, select').each(function() {
        formData[$(this).attr('id')] = $(this).val();
        formData["accType"]="fornecedor"
        formData["rating"]=null
        formData["miniPhoto"]=null
        formData["bigPhoto"]=null
        console.log(formData)
    });
    var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
    self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    var account = existingData.find(account => account.email === loggedInUser.email);

    if (account) {
        alert('No logged-in account found.');
        return;
    }

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
$("document").ready(function() {
    var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
    self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    var account = existingData.find(account => account.email === loggedInUser.email);
    console.log("hey")

    if (account) {
        alert('an account is already logged in.');
        window.location.href = 'index.html';
    }
});    
