
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
  for(i = 0; i < 4; i++) {   
    $("#pic" + i).attr('src', "");
    $("#pic" + i).css("background-color", "#ffffff");
  }
  
  var query = relation.query();
  query.find({
    success : function(results) {
      articles = results;

      //if no links provided 

        if(articles.length <= 4) {
            for(i = 0; i < articles.length; i++) {    
              $("#pic" + i).css("background-color", "#f0f0f0");
              $("#pic" + i).attr('src', articles[i].attributes.imageURL);
              $("#pic" + i).attr('onclick', 'voted(' + i + ')');
              max += articles[i].attributes.Vote;
            }
          } else {
            for(i = 0; i < 4; i++) {
              ranNumb = Math.floor((Math.random() * articles.length));
              $("#pic" + i).css("background-color", "#f0f0f0");
              $("#pic" + i).attr('src', articles[ranNumb].attributes.imageURL);
              $("#pic" + i).attr('onclick', 'voted(' + ranNumb + ')');
              articles.splice(ranNumb, 1);
            }

          }
    }
  });

 
}

function voted(index) {
  articles[index].increment("Vote");
  articles[index].save();
  window.location.reload();
}

function another() {

  if(ran < allStyles.length - 1) {
    ran++;
  } else {
    ran = 0;
  }

  $("#mainStyle").empty();

  for(i = 0; i < 4; i++) {   
    $("#pic" + i).attr('src', "");
    $("#pic" + i).css("background-color", "#ffffff");
  }

  display();
  fetchArticles();
}

