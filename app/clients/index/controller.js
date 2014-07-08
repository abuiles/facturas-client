var ClientsIndex = Ember.ArrayController.extend({
  queryParams: ['sortBy'],
  sortBy: 'lastName',
  sortProperties: function() {
    return [this.get('sortBy')];
  }.property('sortBy'),
  sortAscending: false,
  searchResults: null,
  selected: null,
  searchText: '',
  filteredClients: function() {
    var searchText = this.get('searchText');

    if(searchText.length === 0) {
      return this;
    }

    var searchResults = this.filter(function(client) {
      return !!client.get('fullName').match(new RegExp(searchText, 'i'));
    });

    return searchResults;
  }.property('searchText', 'this.[]')

});

export default ClientsIndex;
