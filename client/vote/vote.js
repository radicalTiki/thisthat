Template.vote.helpers({
	imagecounttwo: function(images) {
		console.log(images);
		return images.length > 1;
	}
});

//add votes to collection, with client ip address mapped
Template.vote.events({
	'click #thisButton': function(event) {
		console.log('this button clicked');
	},
	'click #thatButton': function(event) {
		console.log('that button clicked');
	},
	'click #okButton': function(event) {
		console.log('ok button clicked');
	},
	'click #likeButton': function(event) {
		console.log('like button clicked');
	},
});