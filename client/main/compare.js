Template.compare.events({
	'click .shareLink': function(event) {
		//create the new share link with userid
		//console.log('share link clicked');
		Session.setDefault('shared', true);
	}
});
