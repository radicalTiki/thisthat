Template.bodytemp.helpers({
	imagesUploaded: function() {
		return MyImages.find({owner: Session.get('userId')}).fetch();
	},
	shared: function() {
		return Session.get('shared');
	}
});