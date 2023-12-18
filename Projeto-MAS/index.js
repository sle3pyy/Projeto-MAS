$(document).ready(function() {
    // Check if the user is logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        $('a[href="log-in.html"]').html('<i class="fas fa-user"></i>').attr('href', 'account.html');
        $('a[href="sign-in.html"]').hide();
        console.log('Logged in!');
    }
    else{
        console.log('Not logged in!');

    }
});