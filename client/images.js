Template.images.helpers({
  images: function () {
    return Images.find({owner: Session.get('userId')}).fetch();
  }
});