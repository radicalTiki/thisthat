Template.upload.events({
  'change .thisUpload': function(event, template) {
  	console.log('uploading this image');

    var fsFile = new FS.File($('.thisUpload').get(0).files[0]);
    fsFile.owner = Session.get('userId');
    Images.insert(fsFile, function (err) {
  		if (err) throw err;
    });
  },

  'change .thatUpload': function(event, template) {
  	console.log('uploading that image');

    var fsFile = new FS.File($('.thatUpload').get(0).files[0]);
    fsFile.owner = Session.get('userId');
    Images.insert(fsFile, function (err) {
  		if (err) throw err;
    });
  }
});