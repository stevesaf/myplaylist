import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('playlist-tile', 'Integration | Component | playlist tile', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{playlist-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#playlist-tile}}
      template block text
    {{/playlist-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
