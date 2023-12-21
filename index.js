var vm= function(){
    var self = this;
    self.animals = ko.observableArray([]);
    self.petPhotos = ko.observableArray([]);
    self.hotel = ko.observableArray([]);
    self.id=ko.observable('');
    self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    console.log(self.loggedInUser.email);
    var account = JSON.parse(localStorage.getItem('accounts')).find(account => account.email === self.loggedInUser.email);
    self.id(account.id);
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    let hotelis = accounts.filter(account => account.accType === 'fornecedor');

    self.hotel(hotels.hotels)
    hotelis.forEach(hotel => self.hotel.push(hotel));
    console.log(self.hotel());
    self.search=function(){
        window.location.href = 'hotels.html';
    }
    if (self.loggedInUser.email) {
        var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
        var account = existingData.find(account => account.email === self.loggedInUser.email);
        console.log(account);
        if (account && account.animals) {
            self.animals(account.animals);
        }
        console.log(self.animals())
    }
    else {
        console.log('Not logged in!');
    }
    
    $('#logout').on('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.html'; 
    });
};

$(document).ready(function() {
    var viewModel = new vm();
    ko.applyBindings(viewModel);
});

let hotels={
    "hotels": [
      {
        "id": 1,
        "name": "PetResort",
        "miniDescription": "Treino Animal Personalizado - Alojamento em Ambiente Familiar - Grooming - Mondioring, etc!",
        "description": "Um conjunto de valências agregadas e combinadas umas com as outras, permitem que o seu animal passe uma experiência única no nosso espaço!! Venha conhecer. Aberto 24h sob marcação!",
        "price": "15",
        "rating": 4.8,
        "miniPhoto": "https://scontent.flis4-1.fna.fbcdn.net/v/t31.18172-8/14289878_1029801097132489_5607409422435009207_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=zHZSHYAGMx4AX_6Dbk4&_nc_ht=scontent.flis4-1.fna&oh=00_AfBOp4rObC3N5-BUWYcqmZO7i1DYLl99VdQC4NG8qS4r9w&oe=65ABD03E",
        "bigPhoto": "https://www.peninsula.com/-/media/images/the-peninsula-hotels/destination/phk_exterior_1280.jpg"
      },
      {
        "id": 2,
        "name": "Hotel e Escola Canina Armando4Dogs",
        "miniDescription": "Hotel Canino✔ Presta serviços Viseu, Aveiro, Albergaria-A-Velha.",
        "description": "Academia canina Hotel,Viseu, Aveiro. - Centro de Treino e Diversão! Creche para cães Viseu,Aveiro. 2 áreas de Alojamentos: ✔Para os cães maiores área recreativa com 3.600 m2 e 20 boxes; ✔Para os mais pequenos área recreativa com 500m2 e 13 boxes. ✔Serviço de transporte.",
        "price": "20",
        "rating": 4.9,
        "miniPhoto": "https://lh5.googleusercontent.com/p/AF1QipM1UgAuqHB9TBTHYFOZD0VFQVamh97IXUy3LVo4=w231-h165-n-k-no-nu",
        "bigPhoto": "https://lh5.googleusercontent.com/p/AF1QipM1UgAuqHB9TBTHYFOZD0VFQVamh97IXUy3LVo4=w231-h165-n-k-no-nu"
      },
      {
        "id": 3,
        "name": "Charm Pet",
        "miniDescription": "Pet Shop, Grooming e Hotel Felino",
        "description": "Somos uma boutique completa dedicada ao bem-estar e felicidade dos seus animais de estimação, oferecendo uma gama abrangente de serviços, incluindo Pet Shop, Grooming e Hotel Felino. ",
        "price": "100",
        "rating": 4.7,
        "miniPhoto": "https://lh3.googleusercontent.com/p/AF1QipO3E46towGdTAHwsFHPBwQhLQKPqV4URzv-pq00=s3332-w3332-h1836-rw",
        "bigPhoto": "https://lh3.googleusercontent.com/p/AF1QipO3E46towGdTAHwsFHPBwQhLQKPqV4URzv-pq00=s3332-w3332-h1836-rw"
      }
    ]
  }