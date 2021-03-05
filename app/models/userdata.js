import DS from 'ember-data';

export default DS.Model.extend({
  totalDone: DS.attr('number'),
  totalUnDone: DS.attr('number'),
  totalTasks: DS.attr('number'),
});
