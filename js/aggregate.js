var ran;
var allStyles = new Array();
var currentImage;

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

      //set current config
      styleName = allStyles[ran].attributes.Name;
      currentImage =  allStyles[ran].attributes.Image;
      display();
    },
    error: function(error) {
      alert("Seems like Parse is having a problem");
    }
  });
}

function display() {

  if(styleName == "") {
    styleName = "Look #" + ran;
  }

  $("#mainStyle").append("<h4>" + allStyles[ran].attributes.Name + "</h4>");
  $("#mainStyle").append("<img id='styleImg' src='" + 
                            currentImage
                            + "'/>");
}

function saveURL() {

  productURLTop = $("#des_top").val();
  productURLBottom = $("#des_bottom").val();
  productURLDress = $("#des_dress").val();
  productURLScarf = $("#des_scarf").val();
  productURLShoes = $("#des_shoes").val();

  imageURLTop = $("#img_top").val();
  imageURLBottom = $("#img_bottom").val();
  imageURLDress = $("#img_dress").val();
  imageURLScarf = $("#img_scarf").val();
  imageURLShoes = $("#img_shoes").val();

  var celebStyle = Parse.Object.extend("Style");
  var query = new Parse.Query(celebStyle);

  //use image url as key
  query.equalTo("Image", currentImage);
  query.find({
    success: function(results) {

      var currentStyle = results[0];
      console.log(currentStyle);
      var clothingArticle = Parse.Object.extend("Article");

      //Top
      if(productURLTop != "") {
        var top = new clothingArticle();
        top.set("Link", productURLTop);
        top.set("imageURL", imageURLSTop);
        top.set("Type", "Top");
        top.set("Vote", 0);
        top.save({
          success: function() {
            currentStyle.relation("Top").add(top);
            currentStyle.save();
          }
        });
      }

      //Bottom
      if(productURLBottom != "") {
        var bottom = new clothingArticle();
        bottom.set("Link", productURLBottom);
        bottom.set("imageURL", imageURLBottom);
        bottom.set("Type", "Bottom");
        bottom.set("Vote", 0);
        bottom.save({
          success: function() {
            currentStyle.relation("Bottom").add(bottom);
            currentStyle.save();
          }
        });
      }

      //Dress
      if(productURLDress != "") {
        var dress = new clothingArticle();
        dress.set("Link", productURLDress);
        dress.set("imageURL", imageURLDress);
        dress.set("Type", "Dress");
        dress.set("Vote", 0);
        dress.save({
          success: function() {
            currentStyle.relation("Dress").add(dress);
            currentStyle.save();
          }
        });
      }

      //Scarf
      if(productURLScarf != "") {
        var scarf = new clothingArticle();
        scarf.set("Link", productURLScarf);
        scarf.set("imageURL", imageURLScarf);
        scarf.set("Type", "Scarf");
        scarf.set("Vote", 0);
        scarf.save({
          success: function() {
            currentStyle.relation("Scarf").add(scarf);
            currentStyle.save();
          }
        });
      }

      //Shoes
      if(productURLShoes != "") {
        var shoe = new clothingArticle();
        shoe.set("Link", productURLShoes);
        shoe.set("imageURL", imageURLShoes);
        shoe.set("Type", "Shoes");
        shoe.set("Vote", 0);
        shoe.save({
          success: function() {
            currentStyle.relation("Shoes").add(shoe);
            currentStyle.save();
          }
        });
      }

    }
  });

  $('input').val('');
  $('#urlBtn').hide();

}

function saveTags(){

  topCol = $("#topCol").val();
  bottomCol = $("#bottomCol").val();
  dressCol = $("#dressCol").val();
  scarfCol = $("#scarfCol").val();
  shoesCol = $("#shoesCol").val();

  topMat = $("#topMat").val();
  bottomMat = $("#bottomMat").val();
  dressMat = $("#dressMat").val();
  scarfMat = $("#scarfMat").val();
  shoesMat = $("#shoesMat").val();

  var celebStyle = Parse.Object.extend("Style");
  var query = new Parse.Query(celebStyle);

  //use image url as key
  query.equalTo("Image", currentImage);
  query.find({
    success: function(results) {

      var currentStyle = results[0];
      console.log(currentStyle);
      var clothingArticle = Parse.Object.extend("Article");

      //Top
      if(topCol != "") {
        currentStyle.addUnique("TopColor", topCol);
        currentStyle.save();
      }
      if(topMat != "") {
        currentStyle.addUnique("TopMaterial", topMat);
        currentStyle.save();
      }

      //Bottom
      if(bottomCol != "") {
        currentStyle.addUnique("BottomColor", bottomCol);
        currentStyle.save();
      }
      if(bottomMat != "") {
        currentStyle.addUnique("BottomMaterial", bottomMat);
        currentStyle.save();
      }

      //Dress
      if(dressCol != "") {
        currentStyle.addUnique("DressColor", dressCol);
        currentStyle.save();
      }
      if(dressMat != "") {
        currentStyle.addUnique("DressMaterial", dressMat);
        currentStyle.save();
      }

      //Scarf
      if(scarfCol != "") {
        currentStyle.addUnique("ScarfColor", scarfCol);
        currentStyle.save();
      }
      if(scarfMat != "") {
        currentStyle.addUnique("ScarfMaterial", scarfMat);
        currentStyle.save();
      }

      //Shoes
      if(shoesCol != "") {
        currentStyle.addUnique("ShoesColor", shoesCol);
        currentStyle.save();
      }
      if(shoesMat != "") {
        currentStyle.addUnique("ShoesMaterial", shoesMat);
        currentStyle.save();
      }

    }
  });

  $('input').val('');
  $('#tagBtn').hide();
}