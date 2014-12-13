
var ran;
var allStyles = new Array();
var type;
var articles = new Array();

$(function() {
 
  Parse.$ = jQuery;
  Parse.initialize("mQBIpuA3C7kVDNvG2fBxwUhahFi7S5dEIVFN0bKT",
                   "q7ltha9y0qHSo9TDWOdUpO72U0zWAvZuSPpw3imA");

 /* sampleSave("http://i.dailymail.co.uk/i/pix/2013/08/23/article-2400886-1B6CBF18000005DC-966_634x941.jpg",
    "Keira Knightley Street Dress")*/
  
  fetchStyles();
 
 });

function sampleSave(imageURL, styleName) {

  var CelebStyle = Parse.Object.extend("Style");
  //var celebStyle = new CelebStyle();
  var query = new Parse.Query(CelebStyle);
  query.get("q6rvhhmjXA", {
    success: function(results) {
      var clothingArticle = Parse.Object.extend("Article");
      var shoe = new clothingArticle();
      shoe.set("Link", "http://www.amazon.com/Easy-Spirit-Womens-Gessica-Flat/dp/B00BF9NALG/ref=pd_sbs_shoe_40?ie=UTF8&refRID=1SWTW16S4VAB1BZ34HKY");
      shoe.set("Type", "Shoes");
      shoe.set("Vote", 0);
      shoe.save({
        success: function() {
          console.log(results);
          results.relation("Shoes").add(shoe);
          results.save();
        }
      });
    }
  });


      /*var dress = new clothingArticle();
      dress.set("Link", "http://www.nastygal.com/clothes_dresses_lbd/draped-across-dress--black");
      dress.set("Type", "Dress");
      dress.set("Vote", 0);
      dress.save({
        success: function() {
          celebStyle.relation("Dress").add(dress);
          celebStyle.save();
        }
      });

      var dresss = new clothingArticle();
      dresss.set("Link", "http://www.forever21.com/Product/Product.aspx?BR=f21&Category=dress_little-black-dresses&ProductID=2000085619&VariantID=");
      dresss.set("Type", "Dress");
      dresss.set("Vote", 0);
      dresss.save({
        success: function() {
          celebStyle.relation("Dress").add(dresss);
          celebStyle.save();
        }
      });*/

      
      

      /*
      var shoee = new clothingArticle();
      shoee.set("Link", "http://www.amazon.com/Easy-Spirit-Womens-Gessica-Flat/dp/B00BF9NALG/ref=pd_sbs_shoe_40?ie=UTF8&refRID=1SWTW16S4VAB1BZ34HKY");
      shoee.set("Type", "Shoes");
      shoee.set("Vote", 0);
      shoee.save({
        success: function() {
          celebStyle.relation("Shoes").add(shoee);
          celebStyle.save();
        }
      });*/

}


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

