var vm= function(){
    var self = this;
    self.animals = ko.observableArray([]);
    self.account = ko.observableArray([]);
    var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
    self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    var account = existingData.find(account => account.email === loggedInUser.email);
    self.name= ko.observable('');
    self.name(account.nome);
    self.apelido= ko.observable('');
    self.apelido(account.apelido);
    self.telefone= ko.observable('');
    self.telefone(account.telefone);
    self.email= ko.observable('');
    self.email(account.email);
    self.nif= ko.observable('');
    self.nif(account.nif);
    self.rua= ko.observable('');
    self.rua(account.rua);
    self.cidade= ko.observable('');
    self.cidade(account.cidade);
    self.Distrito= ko.observable('');
    self.Distrito(account.Distrito);
    self.cp1= ko.observable('');
    self.cp1(account.cp1);
    self.cp2= ko.observable('');
    self.cp2(account.cp2);
    
    self.account(account);
    self.animals(account.animals);
    console.log(self.animals(),self.account(), this.loggedInUser)

    $('form').on('submit', function(event) {
        event.preventDefault();
        var formData = {}; 
        $(this).find('input, select').each(function() {
            formData[$(this).attr('id')] = $(this).val();
            formData.hotelName = null
            formData.checkinDate = null
            formData.checkoutDate = null
            formData.status = null
            formData.eaten = null
            formData.owner = loggedInUser.email
            console.log(formData)
        });
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
        self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        var account = existingData.find(account => account.email === loggedInUser.email);
        self.account(account);
        self.animals(account.animals);
    
        if (!account) {
            alert('No logged-in account found.');
            return;
        }
    
        if (account.animals && account.animals.some(animal => animal.name === formData.name)) {
            alert('An animal with this name already exists.');
            return;
        }
    
        if (!account.animals) {
            account.animals = [];
        }
        
        account.animals.push(formData);
    
        localStorage.setItem('accounts', JSON.stringify(existingData));
    
        console.log(account)
        console.log(JSON.parse(localStorage.getItem('accounts')));
    });


}

    $('#clearAnimals').on('click', function() {
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
        self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        var account = existingData.find(account => account.email === loggedInUser.email);

        if (!account) {
            alert('No logged-in account found.');
            return;
        }

        account.animals = [];
        localStorage.setItem('accounts', JSON.stringify(existingData));
        localStorage.removeItem('pets_Hospedated');
        console.log(account);
        console.log(JSON.parse(localStorage.getItem('accounts')));
    });
   
    $('#logAccounts').on('click', function() {
        // Get the existing data from local storage
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];

        console.log(existingData);
    });
    $('#clearAccountsButton').on('click', function() {
        localStorage.removeItem('accounts');
        console.log('Accounts data has been cleared from localStorage.');
    });
    $(document).ready(function() {
        var viewModel = new vm();
        ko.applyBindings(viewModel);

        self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
        var account = existingData.find(account => account.email === loggedInUser.email);
        console.log(account)
    });    