import Ember from 'ember';

var ConfirmableAction = Ember.Component.extend({
  setInitialState: function(){
    this.set('waitingConfirmation', false);
  }.on('init'),
  actions:{
    doAction: function(){
      this.toggleProperty('waitingConfirmation');
    },
    confirm: function(){
      this.toggleProperty('waitingConfirmation');
      this.sendAction('confirmAction');
    },
    cancel: function(){
      this.toggleProperty('waitingConfirmation');
    }
  }
});

export default ConfirmableAction;
