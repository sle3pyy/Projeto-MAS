function ViewModel() {
    var self=this
    self.Id = ko.observable('');
    self.hotel = ko.observableArray([]);
    self.hotel(hotels.hotels);
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