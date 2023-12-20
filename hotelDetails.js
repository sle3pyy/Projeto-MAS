function ViewModel() {
    var self=this
    self.id = ko.observable('');
    self.hotel = ko.observableArray([]);
    self.hotel(hotels.hotels);
    self.name = ko.observable('');
    self.miniDescription = ko.observable('');
    self.description = ko.observable('');
    self.price = ko.observable(''); 
    self.rating = ko.observable('');
    self.miniPhoto = ko.observable('');
    self.bigPhoto = ko.observable('');  

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
       console.log(hotel)
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
        "name": "Hotel A",
        "miniDescription": "A charming pet-friendly hotel",
        "description": "Hotel A is a cozy and pet-friendly accommodation located in the heart of Aveiro...",
        "price": "60",
        "rating": 4.5,
        "miniPhoto": "link_to_mini_photo_a.jpg",
        "bigPhoto": "link_to_big_photo_a.jpg"
      },
      {
        "id": 2,
        "name": "Hotel B",
        "miniDescription": "A pet-friendly oasis in Aveiro",
        "description": "Discover Hotel B, a tranquil retreat where both you and your pets can relax and enjoy...",
        "price": "80",
        "rating": 4.2,
        "miniPhoto": "link_to_mini_photo_b.jpg",
        "bigPhoto": "link_to_big_photo_b.jpg"
      },
      {
        "id": 3,
        "name": "Hotel C",
        "miniDescription": "Pet paradise in Aveiro",
        "description": "At Hotel C, we welcome pets with open arms. Experience comfort and convenience in the heart of Aveiro...",
        "price": "100",
        "rating": 4.8,
        "miniPhoto": "link_to_mini_photo_c.jpg",
        "bigPhoto": "link_to_big_photo_c.jpg"
      }
    ]
  }