import Ember from 'ember';

export default Ember.Component.extend({
  addNewPlaylist : false,
  actions:{
    playlistFormShow(){
      this.set('addNewPlaylist',true);
    },
    savePlaylist1() {
      var params = {
        artist: this.get ('artist'),
        song: this.get('song'),
        album: this.get('album'),
        image: this.get('image'),
      };
      this.set('addNewPlaylist',false);
      this.sendAction('savePlaylist2', params);
    }
  }
});
