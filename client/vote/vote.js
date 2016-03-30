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
	uservoted: function(images) {
		if (images.length > 1) {
			var fsFile = new FS.File(images[0]);
			var fsFile2 = new FS.File(images[1]);
			return (Votes.find({_id: fsFile._id, ips: Session.get('ip')}).count() > 0) ||
			(Votes.find({_id: fsFile2._id, ips: Session.get('ip')}).count() > 0);
		} else {
			var fsFile = new FS.File(images[0]);
			return (Votes.find({_id: fsFile._id, ips: Session.get('ip')}).count() > 0);
		}
		return false;
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
			Votes.insert({_id: $('#thisButton').val(), votefor: 1, ips: [Session.get('ip')]});
			Votes.insert({_id: $('#thatButton').val(), votefor: 0, ips: [Session.get('ip')]});
			console.log('inserted into votes: ' + $('#thisButton').val());
			console.log('inserted ip: ' + Session.get('ip'));
		} else {
			Votes.update($('#thisButton').val(), {
				$inc: {votefor: 1},
				$push: {ips: Session.get('ip')}
			});
			console.log('updated votes: ' + $('#thisButton').val());
			console.log('updated ip: ' + Session.get('ip'));
		}
	},
	'click #thatButton': function(event) {
		if (Votes.findOne({_id: $('#thatButton').val()}) == null) {
			Votes.insert({_id: $('#thatButton').val(), votefor: 1, ips: [Session.get('ip')]});
			Votes.insert({_id: $('#thisButton').val(), votefor: 0, ips: [Session.get('ip')]});
			console.log('inserted into votes: ' + $('#thatButton').val());
			console.log('inserted ip: ' + Session.get('ip'));
		} else {
			Votes.update($('#thatButton').val(), {
				$inc: {votefor: 1},
				$push: {ips: Session.get('ip')}
			});
			console.log('updated votes: ' + $('#thatButton').val());
			console.log('updated ip: ' + Session.get('ip'));
		}
	},
	'click #okButton': function(event) {
		if (Votes.findOne({_id: $('#okButton').val()}) == null) {
			Votes.insert({_id: $('#okButton').val(), votefor: 1, voteagainst: 0, ips: [Session.get('ip')]});
			console.log('inserted into votes: ' + $('#okButton').val());
			console.log('inserted ip: ' + Session.get('ip'));
		} else {
			Votes.update($('#okButton').val(), {
				$inc: {votefor: 1},
				$push: {ips: Session.get('ip')}
			});
			console.log('updated votes: ' + $('#okButton').val());
			console.log('updated ip: ' + Session.get('ip'));
		}
	},
	'click #likeButton': function(event) {
		if (Votes.findOne({_id: $('#likeButton').val()}) == null) {
			Votes.insert({_id: $('#likeButton').val(), voteagainst: 1, votefor: 0, ips: [Session.get('ip')]});
			console.log('inserted into votes: ' + $('#likeButton').val());
			console.log('inserted ip: ' + Session.get('ip'));
		} else {
			Votes.update($('#likeButton').val(), {
				$inc: {voteagainst: 1},
				$push: {ips: Session.get('ip')}
			});
			console.log('updated votes: ' + $('#likeButton').val());
			console.log('updated ip: ' + Session.get('ip'));
		}
	},
});