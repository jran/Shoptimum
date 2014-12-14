
var ran;
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

  styleName = allStyles[ran].attributes.Name;
  if(styleName == "") {
    styleName = "Look #" + ran;
  }

  $("#mainStyle").append("<h4>" + styleName + "</h4>");
  $("#mainStyle").append("<img id='styleImg' src='" + 
                            allStyles[ran].attributes.Image
                            + "'/>");
  
}

var articles;
var max = -1;

function fetchArticles() {

  type = $("#articleChoice option:selected").text();
  relation = allStyles[ran].relation(type);
  
  var query = relation.query();
  query.find({
    success : function(results) {
      articles = results;

      //if no links provided 
       if(articles.length === 0) {

          $("#choices").empty();
          $("#choices").append("<h4> None </h4>");

        } else {

          $("#choices").empty();

          for(i = 0; i < articles.length; i++) {    
            $("#choices").append("<img id='articleImg' onclick='voted(" + i 
                                    + ")'src='" + articles[i].attributes.imageURL
                                    + "'/>");
            max = Math.max(max, articles[i].attributes.Vote);
          }
        }
    }
  });

 
}

function voted(index) {
  articles[index].increment("Vote");
  articles[index].save();
  if(articles[index].attributes.Vote >= max) {
    fetchArticles();
    $("#choices").append("<h2> Majority's Vote! </h2>");
  } else {
    fetchArticles();
    $("#choices").append("<h2> Minority's Vote?! </h2>");
  }
}

