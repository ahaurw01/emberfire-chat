import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  says: DS.attr('string'),
  when: DS.attr('date'),
  state: DS.attr('object')
});
