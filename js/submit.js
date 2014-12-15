
$(function() {
 
  Parse.$ = jQuery;
  Parse.initialize("mQBIpuA3C7kVDNvG2fBxwUhahFi7S5dEIVFN0bKT",
                   "q7ltha9y0qHSo9TDWOdUpO72U0zWAvZuSPpw3imA");
});

function saveStyle() {
	console.log("hmm");
	var lookStyle = Parse.Object.extend("Style");
	var newStyle = new lookStyle();

	var styleName = $("#imageName").val();
	var styleURL = $("#imageURL").val();

	if(styleName != "" && styleURL != "") {
		newStyle.set("Name", styleName);
		newStyle.set("Image", styleURL);
		newStyle.save();
		window.location.reload();
	}

	 $('input').val('');
}