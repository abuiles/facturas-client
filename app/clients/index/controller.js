import Ember from 'ember';

var ClientsIndex = Ember.ArrayController.extend({
  queryParams: ['sortBy'],
  sortBy: 'balance',
  sortProperties: function() {
    return [this.get('sortBy')];
  }.property('sortBy'),
  sortAscending: false,
  searchResults: null,
  selected: null,
  searchText: '',
  doSearch: function() {
    var searchText = this.get('searchText');
    var results = this.get('arrangedContent');

    if(searchText.length > 0) {
      var filter = new RegExp(searchText, 'i');

      results = results.filter(function(client) {
        return !!client.get('fullName').match(filter);
      });
    }

    return this.set('filteredClients', results);
  },
  searchObserver: Ember.observer('searchText', 'this.[]', function() {
    Ember.run.debounce(this, this.doSearch, 500);
  }),
  actions: {
    sortBy: function(key) {
      this.set('sortBy', key);
      this.toggleProperty('sortAscending');

      return false;
    }
  }
});

export default ClientsIndex;
