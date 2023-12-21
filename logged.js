self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (loggedInUser && loggedInUser.accType==="cliente") {
    $('a[href="log-in.html"]').html('<i class="fa fa-user"></i>').attr('href', 'petReg.html');
    $('a[href="sign-in.html"]').text('Log out').attr('href', 'index.html').attr('id', 'logout');
    
    console.log('Logged in!');
    console.log(localStorage.getItem('loggedInEmail'));
}
else if(loggedInUser && loggedInUser.accType==="fornecedor"){
    $('a[href="log-in.html"]').html('<i class="fa fa-user"></i>').attr('href', 'atividadeFornecedor.html');
    $('a[href="sign-in.html"]').text('Log out').attr('href', 'index.html').attr('id', 'logout');
    $("#regp").hide();
    
    console.log('Logged in!');
    console.log(localStorage.getItem('loggedInEmail'));
}
else {
    console.log('Not logged in!');
}

$('#logout').on('click', function(event) {
    event.preventDefault();
    localStorage.removeItem('loggedInEmail');
    window.location.href = 'index.html'; 
});