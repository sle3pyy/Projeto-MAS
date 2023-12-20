if (localStorage.getItem('loggedInEmail')) {
    $('a[href="log-in.html"]').html('<i class="fa fa-user"></i>').attr('href', 'petReg.html');
    $('a[href="sign-in.html"]').text('Log out').attr('href', 'index.html').attr('id', 'logout');
    
    console.log('Logged in!');
}
else {
    console.log('Not logged in!');
}

$('#logout').on('click', function(event) {
    event.preventDefault();
    localStorage.removeItem('loggedInEmail');
    window.location.href = 'index.html'; 
});