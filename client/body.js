Template.body.helpers({
	imagesUploaded: function() {
		return ($('.thisUpload').val() > 0 && $('.thatUpload').val() > 0);
	}
});