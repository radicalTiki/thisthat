Template.upload.rendered = function(){

  if (Meteor.isClient){

    Dropzone.autoDiscover = false;

    // Adds file uploading and adds the imageID of the file uploaded
    // to the arrayOfImageIds object.
    var dropzone = new Dropzone("form#dropzone", {
        accept: function(file, done){
          var fsFile = new FS.File(file);
          fsFile.owner = Session.get('userId');

            MyImages.insert(fsFile, function(err, fileObj){
                if(err){
                  throw err;
                } else {
                  console.log('Upload file with userId: ' + fsFile.owner);
                };
            });
        },
        //prevent more than two uploaded images
        init: function() {
          this.on("addedfile", function() {
            if (this.files[2]!=null){
              this.removeFile(this.files[0]);
            }
          });
        }
    });
  };
};