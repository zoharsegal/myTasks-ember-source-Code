import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host : 'api/public',
  headers : Object.freeze({
    'uuid': localStorage.getItem('uuid')
  }),
  pathForType(type) {
    this.set('headers', {
      'uuid': localStorage.getItem('uuid')
    });
    return type + "s";
  }
});
