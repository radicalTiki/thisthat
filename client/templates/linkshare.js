Template.linkShare.helpers ({
	route: function() {
		return Session.get('userId');
	}
});

Template.linkShare.events ({
	'click .shareButton': function(event) {
		console.log('share button clicked');
		//var Copied = $('.linkShare').text();
		var Copied = document.querySelector('.linkShare').innerHTML.createTextRange();
		Copied.execCommand("Copy");
	}
});