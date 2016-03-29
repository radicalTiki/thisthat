Template.upload.rendered = function(){

  if (Meteor.isClient){

    Dropzone.autoDiscover = false;
    
    var dropzone = new Dropzone("form#dropzone", {
        addRemoveLinks: true,
        dictRemoveFile: 'remove image',
        thumbnailWidth: "250",
        thumbnailHeight: "250",
        previewTemplate: document.querySelector('#preview').innerHTML,
        removedfile: function(file) {
          console.log(file);
          MyImages.remove(file._id, function(err, fielObj) {
            if(err){
                  throw err;
                } else {
                  console.log('Removed file with id: ' + file._id);
                };
            });
          var _ref;
          return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
        },
        accept: function(file, done){
          var fsFile = new FS.File(file);
          fsFile.owner = Session.get('userId');

            MyImages.insert(fsFile, function(err, fileObj){
                if(err){
                  throw err;
                } else {
                  console.log('Upload file with userId: ' + fsFile.owner);
                  file._id = fileObj._id;
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