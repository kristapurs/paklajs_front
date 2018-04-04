import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createCarpet(){
  let carp = this.get('newCarpet');
  let newRecord = this.store.createRecord('paklajs-note',{
    name:carp
  });
  newRecord.save();
}
}
});
