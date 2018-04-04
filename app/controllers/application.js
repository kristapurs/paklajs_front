import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    readCarpet() {
      // hard coding the id for demonstration purposes only
      this.store.findRecord('carpet', 1).then((carpet) => {
        alert(carpet.get('name') + ' ' + carpet.get('id'))
      })
    },
 createCarpet(){
 let carp = this.get('newCarpet');
 let newRecord = this.store.createRecord('paklajs-note',{
   name:carp
 });
 newRecord.save();
}

  }


});
