$('form').on('submit', function(event) {
    event.preventDefault();
    var formData = {}; 
    $(this).find('input, select').each(function() {
        formData[$(this).attr('id')] = $(this).val();
        formData["description"]=$("#description").val()
        formData["accType"]="fornecedor"
        formData["rating"]=0
        formData["miniPhoto"]="https://www.irvineparkrailroad.com/wp-content/uploads/2016/06/150x150-image-placeholder.jpg"
        formData["bigPhoto"]="https://via.placeholder.com/1200x480"
        console.log(formData)
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
$("document").ready(function() {
    var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
    try {
        self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        var account = existingData.find(account => account.email === loggedInUser.email);
    } catch (error) {
        console.error('Error parsing accounts from localStorage:', error);
    }

    if (account) {
        alert('an account is already logged in.');
        window.location.href = 'index.html';
    }
});    
