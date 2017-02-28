import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
    actions: {
      imageShow: function() {
        this.set('isImageShowing', true);
      },
      imageHide: function() {
        this.set('isImageShowing', false);
      },
      delete(playlist) {
        if (confirm('Are you sure you want to delete this playlist item?')) {
          this.sendAction('destroyPlaylist', playlist);
        }
      }
    }
});
