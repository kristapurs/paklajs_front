import DS from 'ember-data';

export default DS.Model.extend({
 
   user: DS.attr('string'),
  name: DS.attr('string'),
  password: DS.attr('string'),
 email:DS.attr('string'),
 adress: DS.attr('string'),
 country: DS.attr('string'),
});
