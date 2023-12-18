$(document).ready(function() {
    // Check if the user is logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        $('a[href="log-in.html"]').html('<i class="fas fa-user"></i>').attr('href', 'account.html');
        $('a[href="sign-in.html"]').text('Log out').attr('href', 'index.html').attr('id', 'logout');
        
        console.log('Logged in!');
    }
    else{
        console.log('Not logged in!');

    }
    $('#logout').on('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        localStorage.setItem('isLoggedIn', 'false');
        window.location.href = 'index.html'; // Replace with your actual homepage URL
    });
});