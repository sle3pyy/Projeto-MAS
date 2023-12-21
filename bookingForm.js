function BookingFormViewModel() {
    var self=this
    self.id = ko.observable('');
    self.hotel = ko.observableArray([]);
    self.animals = ko.observableArray([]);
    self.account = ko.observableArray([]);
    self.name = ko.observable('');
    self.miniDescription = ko.observable('');
    self.description = ko.observable('');
    self.price = ko.observable(''); 
    self.totalPrice = ko.observable(''); 
    self.rating = ko.observable('');
    self.miniPhoto = ko.observable('');
    self.bigPhoto = ko.observable('');  
    self.selectedAnimal = ko.observable();
    var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
    self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    var account = existingData.find(existingData => existingData.email === loggedInUser.email);
    self.account(account);
    self.animals(account.animals);
    let hotels = existingData.filter(existingData => existingData.accType === 'fornecedor');

  // Push hotels into the observable array
  hotels.forEach(hotel => self.hotel.push(hotel));
    $('#checkout-date').change(function() {
        var dateDifference = calculateDateDifference();
        self.totalPrice(self.price()*dateDifference);
        $('#tp').text(self.totalPrice() + '€');
        console.log(self.totalPrice());

    });

    self.activate = function (id) {
        self.id(id);
        var hotel = self.hotel().find(hotel => hotel.id == id);
        self.name(hotel.name);
        self.miniDescription(hotel.miniDescription);
        self.description(hotel.description);
        self.price(hotel.price);
        self.totalPrice(hotel.price);
        self.rating(hotel.rating);
        self.miniPhoto(hotel.miniPhoto);
        self.bigPhoto(hotel.bigPhoto);
       console.log(hotel)
    };

    $('form').on('submit', function(event) {
        event.preventDefault();
        var selectedAnimalValue = $('#animal-select').val();
        console.log(selectedAnimalValue);
        if (selectedAnimalValue) {
            var selectedAnimalInfo = self.animals().find(function(animal) {
                return animal.name === selectedAnimalValue;
            });
    
            selectedAnimalInfo.hotelName = self.name();
            selectedAnimalInfo.checkinDate = $('#checkin-date').val();
            selectedAnimalInfo.checkoutDate = $('#checkout-date').val();
    
            // Retrieve the existing pets from the local storage
            var petsHospedated = JSON.parse(localStorage.getItem("pets_Hospedated")) || [];
            console.log(petsHospedated);
    
            // Check if the animal is already in petsHospedated
            if (petsHospedated && petsHospedated.some(function(pet) {
                return pet.name === selectedAnimalInfo.name;
            })) {
                alert('This pet is already in a hotel!');
            } else {
                // Add the new pet to the array
                petsHospedated.push(selectedAnimalInfo);
    
                // Store the updated array back in the local storage
                localStorage.setItem("pets_Hospedated", JSON.stringify(petsHospedated));
                console.log(selectedAnimalInfo);
                console.log(JSON.parse(localStorage.getItem("pets_Hospedated")));
                var existingData = JSON.parse(localStorage.getItem('accounts')) || [];
                self.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
                var accountIndex = existingData.findIndex(account => account.email === self.loggedInUser.email);
                var animalIndex = existingData[accountIndex].animals.findIndex(animal => animal.name === selectedAnimalValue);

                if (accountIndex !== -1 && animalIndex !== -1) {
                    existingData[accountIndex].animals[animalIndex].hotelName = self.name();
                    existingData[accountIndex].animals[animalIndex].checkinDate = $('#checkin-date').val();
                    existingData[accountIndex].animals[animalIndex].checkoutDate = $('#checkout-date').val();
                }

                // Save the updated accounts data back to local storage
                localStorage.setItem('accounts', JSON.stringify(existingData));

                console.log(existingData[accountIndex]);
                alert('Booking confirmed!');
                window.location.href = 'index.html';
            }
        }
        
});


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
};

$(document).ready(function() {
ko.applyBindings(new BookingFormViewModel());
$('#Mbway').hide();
$('#Cartão').hide();
$('#payment-method').change(function() {
    var selectedOption = $(this).val();
    console.log(selectedOption);
    if (selectedOption === '') {
        $('#Mbway').hide();
        $('#Cartão').hide();
    } else if (selectedOption === 'Mbway') {
        $('#Cartão').hide();
        $('#Mbway').show();
    } else if (selectedOption === 'Cartão') {
        $('#Mbway').hide();
        $('#Cartão').show();
    }
});
});

function calculateDateDifference() {
    var checkinDate = new Date(document.getElementById('checkin-date').value);
    var checkoutDate = new Date(document.getElementById('checkout-date').value);

    var differenceInTime = checkoutDate.getTime() - checkinDate.getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return Math.abs(differenceInDays);
}
$('#clearStorage').on('click', function() {
    localStorage.removeItem("pets_Hospedated");
    alert('Storage cleared!');
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