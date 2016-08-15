import DS from 'ember-data';

export default DS.Model.extend({
  advertiser: DS.attr(),
  announcement: DS.attr()
});
