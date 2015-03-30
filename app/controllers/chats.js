import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    say: function () {
      var controller = this;
      var newName = this.get('newName');
      var newSays = this.get('newSays');
      if (!newName || !newSays) {
        return;
      }

      // this.store.createRecord('chat', {
      //   name: this.get('newName'),
      //   says: this.get('newSays'),
      //   when: new Date().getTime()
      // }).save().then(function () {
      //   controller.set('newSays');
      // });

      this.store.createRecord('nest', {
        state: {
          name: this.get('newName'),
          says: this.get('newSays'),
          when: new Date().getTime()
        }
      }).save().then(function () {
        controller.set('newSays');
      });
    }
  }
});
