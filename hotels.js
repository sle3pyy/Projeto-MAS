function ViewModel() {
    this.Id = ko.observable('1');
}

ko.applyBindings(new ViewModel());