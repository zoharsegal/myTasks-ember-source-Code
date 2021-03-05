import DS from 'ember-data';

export default DS.Model.extend({
  isDone: DS.attr('boolean'),
  isShared: DS.attr('boolean'),
  isOwner: DS.attr('boolean'),
  taskName: DS.attr('string'),
  doneCount: DS.attr('number'),
  notDoneCount: DS.attr('number'),
  shares: DS.attr()
});
