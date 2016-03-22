MyImages = new FS.Collection('myImages', {
    stores: [new FS.Store.GridFS("myImages")],
    filter: {
      maxSize: 3145728,
      allow: {
        contentTypes: ['image/*'],
        extensions: ['png','jpg','jpeg','gif']
      }
    },
    onInvalid: function (message) {
      alert(message);
    }
});

MyImages.allow({
    insert: function() { return true },
    update: function() { return true },
    remove: function() { return false }
});

if (Meteor.isClient) {
  console.log('new client');
  var userId = Random.id();
  console.log('clientId: ' + userId);
  Session.setDefault('userId', userId);

  Meteor.subscribe('MyImages');
}