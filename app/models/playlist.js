import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr(),
  song: DS.attr(),
  album: DS.attr(),
  image: DS.attr()
});
