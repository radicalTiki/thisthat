Template.body.helpers({
	imagesUploaded: function() {
		return MyImages.find({owner: Session.get('userId')}).fetch();
	}
});