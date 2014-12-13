var ran;
var allStyles = new Array();
var type;

$(function() {
 
  Parse.$ = jQuery;
  Parse.initialize("mQBIpuA3C7kVDNvG2fBxwUhahFi7S5dEIVFN0bKT",
                   "q7ltha9y0qHSo9TDWOdUpO72U0zWAvZuSPpw3imA");
  fetchStyles();
 
 });

function fetchStyles() {
  var celebStyle = Parse.Object.extend("Style");
  var query = new Parse.Query(celebStyle);

  query.find({
    success: function(results) {
      allStyles = results;
      ran = Math.floor((Math.random() * allStyles.length));
      display();
    },
    error: function(error) {
      alert("Seems like Parse is having a problem");
    }
  });
}

function display() {
  $("#mainStyle").append("<h4>" + allStyles[ran].attributes.Name + "</h4>");
  $("#mainStyle").append("<img id='styleImg' src='" + 
                            allStyles[ran].attributes.Image
                            + "'/>");
}