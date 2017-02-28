import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('playlist');
  },

  actions: {
    savePlaylist3(params) {
      var newPlaylist = this.store.createRecord('playlist', params);
      newPlaylist.save();
      this.transitionTo('index');
    },

    destroyPlaylist(playlist) {
      playlist.destroyRecord();
      this.transitionTo('index');
    }
  }

});
