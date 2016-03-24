Template.vote.helpers({
	imagecounttwo: function(images) {
		//console.log(images);
		return images.length > 1;
	},
	firstimage: function(images) {
		var fsFile = new FS.File(images[0]);
		//console.log(fsFile);
		return fsFile._id;
	},
	secondimage: function(images) {
		var fsFile = new FS.File(images[1]);
		//console.log(fsFile);
		return fsFile._id;
	}
});

//add votes to collection, with client ip address mapped
Template.vote.events({
	'click #thisButton': function(event) {
		if (Votes.findOne({_id: $('#thisButton').val()} == null)) {
			Votes.insert({_id: $('#thisButton').val(), votefor: 1});
		} else {
			Votes.update($('#thisButton').val(), {
				$set: { $inc: {votefor: 1}}
			});
		}
		
		//console.log('images in event' + $('#thisButton').val());
		//console.log('this button clicked');
	},
	'click #thatButton': function(event) {
		//console.log('images in event' + $('#thatButton').val());
		//console.log('that button clicked');
	},
	'click #okButton': function(event) {
		//console.log('images in event' + $('#okButton').val());
		//console.log('ok button clicked');
	},
	'click #likeButton': function(event) {
		//console.log('images in event' + $('#likeButton').val());
		//console.log('like button clicked');
	},
});