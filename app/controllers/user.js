import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    readUser() {
      // hard coding the id for demonstration purposes only
      this.store.findRecord('user', 1).then((user) => {
        alert(user.get('name'))
      })
    },
 createUser(){

 var username = this.get('newusername');
 var loginName = this.get('newloginName');
 var password = this.get('newpassword');
 var email = this.get('newemail');
 var country = this.get('newcountry');
 var adress = this.get('newadress');

 var newRecord = this.store.createRecord('user',{

   name:username,
   user:loginName,
   password:password,
   email:email,
   country:country,
   adress:adress

 });
 newRecord.save();
},
deleteUser() {
     let destroyId = this.get('destroyId');
     let user = this.get('model').findBy('id', destroyId);
     user.destroyRecord()
   },
updateUser() {
 var users = this.get('user')
  var name = this.get('name')
   var password = this.get('password')
    var country = this.get('country')
     var adress = this.get('adress')
     var email = this.get('email')
  var destroyId = this.get('destroyId')


 var userrr = this.get('model').findBy('id', destroyId);
 console.log(destroyId)
 userrr.set('user', users);
 userrr.set('name', name);
 userrr.set('password', password);
 userrr.set('country', country);
 userrr.set('adress', adress);
 userrr.set('email', email);


 userrr.save();
 console.log(userrr)

}
  }


});
