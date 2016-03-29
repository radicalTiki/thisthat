var createThumb = function(fileObj, readStream, writeStream) {
  // Transform the image into a 10x10px thumbnail
  gm(readStream, fileObj.name()).resize('250', '250').stream().pipe(writeStream);
};

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
    remove: function() { return true }
});

Votes = new Mongo.Collection("votes");

Votes.allow({
    insert: function() { return true},
    update: function() { return true},
    remove: function() { return false}
});

if (Meteor.isClient) {
  console.log('new client');
  var userId = Random.id();
  console.log('clientId: ' + userId);
  Session.setDefault('userId', userId);

  Meteor.subscribe('MyImages');
  Meteor.subscribe('votes');

  Meteor.call('getIP', function(error, result){
      if(error){
         //Error handling code
      }
      else {
          Session.set("ip", result);
      }
  });

  var ip = Session.get("ip");
  console.log('clientip: ' + ip);
}