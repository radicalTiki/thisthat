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
	},
	uservoted: function() {
		return Session.get('uservoted');
	},
	firstvote: function(images) {
		var fsFile = new FS.File(images[0]);
		return (Votes.findOne({_id: fsFile._id})).votefor;
	},
	secondvote: function(images) {
		if (images.length > 1) {
			var fsFile = new FS.File(images[1]);
			return (Votes.findOne({_id: fsFile._id})).votefor;
		} else {
			var fsFile = new FS.File(images[0]);
			return (Votes.findOne({_id: fsFile._id})).voteagainst;
		}
		return null;
	}
});

//add votes to collection, with client ip address mapped
Template.vote.events({
	'click #thisButton': function(event) {
		if (Votes.findOne({_id: $('#thisButton').val()}) == null) {
			Votes.insert({_id: $('#thisButton').val(), votefor: 1});
			console.log('inserted into votes: ' + $('#thisButton').val());
			Session.setDefault('uservoted', true);
		} else {
			Votes.update($('#thisButton').val(), {
				$inc: {votefor: 1}
			});
			console.log('updated votes: ' + $('#thisButton').val());
			Session.setDefault('uservoted', true);
		}
		
		//console.log('images in event' + $('#thisButton').val());
		//console.log('this button clicked');
	},
	'click #thatButton': function(event) {
		if (Votes.findOne({_id: $('#thatButton').val()}) == null) {
			Votes.insert({_id: $('#thatButton').val(), votefor: 1});
			console.log('inserted into votes: ' + $('#thatButton').val());
			Session.setDefault('uservoted', true);
		} else {
			Votes.update($('#thatButton').val(), {
				$inc: {votefor: 1}
			});
			console.log('updated votes: ' + $('#thatButton').val());
			Session.setDefault('uservoted', true);
		}

		//console.log('images in event' + $('#thatButton').val());
		//console.log('that button clicked');
	},
	'click #okButton': function(event) {
		if (Votes.findOne({_id: $('#okButton').val()}) == null) {
			Votes.insert({_id: $('#okButton').val(), votefor: 1});
			console.log('inserted into votes: ' + $('#okButton').val());
			Session.setDefault('uservoted', true);
		} else {
			Votes.update($('#okButton').val(), {
				$inc: {votefor: 1}
			});
			console.log('updated votes: ' + $('#okButton').val());
			Session.setDefault('uservoted', true);
		}

		//console.log('images in event' + $('#okButton').val());
		//console.log('ok button clicked');
	},
	'click #likeButton': function(event) {
		if (Votes.findOne({_id: $('#likeButton').val()}) == null) {
			Votes.insert({_id: $('#likeButton').val(), voteagainst: 1});
			console.log('inserted into votes: ' + $('#likeButton').val());
			Session.setDefault('uservoted', true);
		} else {
			Votes.update($('#likeButton').val(), {
				$inc: {voteagainst: 1}
			});
			console.log('updated votes: ' + $('#likeButton').val());
			Session.setDefault('uservoted', true);
		}

		//console.log('images in event' + $('#likeButton').val());
		//console.log('like button clicked');
	},
});