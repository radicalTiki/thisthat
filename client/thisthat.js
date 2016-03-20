Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "../uploads"})],
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

Images.allow({
    insert: function() { return true },
    update: function() { return true },
    remove: function() { return false }
});

if (Meteor.isClient) {
  console.log('new client');
  var userId = Random.id();
  console.log('clientId: ' + userId);
  Session.setDefault('userId', userId);

  Meteor.subscribe('Images');

  var Dropzone = require("dropzone");
}