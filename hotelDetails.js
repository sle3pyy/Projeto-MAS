function ViewModel() {
  var self = this;
  self.id = ko.observable('');
  self.hotel = ko.observableArray([]);
  self.name = ko.observable('');
  self.miniDescription = ko.observable('');
  self.description = ko.observable('');
  self.price = ko.observable(''); 
  self.rating = ko.observable('');
  self.miniPhoto = ko.observable('');
  self.bigPhoto = ko.observable('');  

  let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  let hotelis = accounts.filter(account => account.accType === 'fornecedor');

  self.hotel(hotels.hotels)
  hotelis.forEach(hotel => self.hotel.push(hotel));
  console.log(self.hotel());
  self.search=function(){
    window.location.href = 'hotels.html';
  }
    self.activate = function (id) {
        self.id(id);
        var hotel = self.hotel().find(hotel => hotel.id == id);
        self.name(hotel.name);
        self.miniDescription(hotel.miniDescription);
        self.description(hotel.description);
        self.price(hotel.price);
        self.rating(hotel.rating);
        self.miniPhoto(hotel.miniPhoto);
        self.bigPhoto(hotel.bigPhoto);
    };
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
        console.log("sPageURL=", sPageURL);
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
    var pg = getUrlParameter('id');
    console.log(pg);
    if (pg == undefined)
        self.activate(1);
    else {
        self.activate(pg);
    }
    console.log("VM initialized!");
}

$(document).ready(function() {
ko.applyBindings(new ViewModel());
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
      "bigPhoto": "https://scontent.flis4-1.fna.fbcdn.net/v/t31.18172-8/14289878_1029801097132489_5607409422435009207_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=zHZSHYAGMx4AX_6Dbk4&_nc_ht=scontent.flis4-1.fna&oh=00_AfBOp4rObC3N5-BUWYcqmZO7i1DYLl99VdQC4NG8qS4r9w&oe=65ABD03E"
    },
    {
      "id": 2,
      "name": "Hotel e Escola Canina Armando4Dogs",
      "miniDescription": "Hotel Canino✔ Presta serviços Porto, Aveiro.",
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