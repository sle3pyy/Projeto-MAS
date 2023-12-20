var vm= function(){
    var self = this;
    self.animals = ko.observableArray([]);
    self.petPhotos = ko.observableArray([]);
    self.loggedInEmail = localStorage.getItem('loggedInEmail');
    console.log(self.loggedInEmail);
};
$(document).ready(function() {
    var viewModel = new vm();
    ko.applyBindings(viewModel);
});