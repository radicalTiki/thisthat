Template.linkShare.helpers ({
	route: function() {
		return Session.get('userId');
	}
});

Template.linkShare.events ({
	'click .shareButton': function(event) {	
		console.log('share button clicked');
		//var Copied = $('.linkShare').text();
		copyToClipboard(document.getElementById('linkShare').innerHTML);
	}
});

function copyToClipboard(text) {
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}