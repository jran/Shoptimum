
var allStyles = new Array();
var type;
var articles = new Array();

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

  for(i = 0; i < allStyles.length; i++) {

    styleName = allStyles[i].attributes.Name;
    if(styleName == "") {
      styleName = "Look #" + ran;
    }

    $("#styleEntries").append("<div class = 'styleEntry' id = 'entry" + i + "'></div>");
    $("#entry" + i).append("<h4>" + styleName + "</h4>");
    $("#entry" + i).append("<img id = 'styleImg' src='" + 
                              allStyles[i].attributes.Image
                              + "'/>");
    $("#entry" + i).append("<div class = 'articlesEntry' id = articles" + i + "></div>");
     populateImage(i);
  }
}

var types = ["Scarf", "Top", "Bottom", "Dress", "Shoes"];
function populateImage(entryNum) {
  for (var j = 0; j < types.length; j++) {

      var relation = allStyles[entryNum].relation(types[j]);
      var query = relation.query();
      query.descending("Vote");

      query.first({
        success : function(result) {
          if(result != null) {
            var productLink = result.attributes.Link;
            var imageLink = result.attributes.imageURL;
            $("#articles" + entryNum).append("<a href =" + productLink
                                          + " target='_blank'><img id = 'articleImg' src='" + 
                                          imageLink + "'/></a>");
          }
        },
        error : function(error) {
            alert("Parse is having some issues!");
        }
      });
    }
}
