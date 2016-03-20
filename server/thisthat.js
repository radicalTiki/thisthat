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
