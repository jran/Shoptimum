var scarf_array = new Array();
var top_array = new Array();
var bottom_array = new Array();
var dress_array = new Array();
var shoes_array = new Array();


google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
    Parse.$ = jQuery;
    Parse.initialize("mQBIpuA3C7kVDNvG2fBxwUhahFi7S5dEIVFN0bKT",
                     "q7ltha9y0qHSo9TDWOdUpO72U0zWAvZuSPpw3imA");
    var celebStyle = Parse.Object.extend("Style");
    var query = new Parse.Query(celebStyle);
    query.find({
        success: function (results) {
            var scarf = {};
            var top = {};
            var bottom = {};
            var dress = {};
            var shoes = {};
            for (var i = 0; i < results.length; i++) {
                scarf_color = results[i].attributes.ScarfColor;
                top_color = results[i].attributes.TopColor;
                bottom_color = results[i].attributes.BottomColor;
                dress_color = results[i].attributes.DressColor;
                shoes_color = results[i].attributes.ShoesColor;
                if (scarf_color != undefined) {
                    if (scarf_color[0] in scarf) {
                        scarf[scarf_color[0]] = scarf[scarf_color[0]] + 1;
                    } else {
                        scarf[scarf_color[0]] = 1;
                    }   
                }
                if (top_color != undefined) {
                    if (top_color[0] in top) {
                        top[top_color[0]] = top[top_color[0]] + 1;
                    } else {
                        top[top_color[0]] = 1;
                    }
                }
                if (bottom_color != undefined) {
                    if (bottom_color[0] in bottom) {
                        bottom[bottom_color[0]] = bottom[bottom_color[0]] + 1;
                    } else {
                        bottom[bottom_color[0]] = 1;
                    }
                }
                if (dress_color != undefined) {
                    if (dress_color[0] in dress) {
                        dress[dress_color[0]] = dress[dress_color[0]] + 1;
                    } else {
                        dress[dress_color[0]] = 1;
                    }
                }
                if (shoes_color != undefined) {
                    if (shoes_color[0] in shoes) {
                        shoes[shoes_color[0]] = shoes[shoes_color[0]] + 1;
                    } else {
                        shoes[shoes_color[0]] = 1;
                    }
                }
            }

            scarf_array[0] = ['Color', 'Popularity'];
            top_array[0] = ['Color', 'Popularity'];
            bottom_array[0] = ['Color', 'Popularity'];
            dress_array[0] = ['Color', 'Popularity'];
            shoes_array[0] = ['Color', 'Popularity'];
            temp = Object.keys(scarf);
            for (var i = 0; i < temp.length; i++) {
                scarf_array[i+1] = [temp[i], scarf[temp[i]]];
            }
            temp = Object.keys(top);
            for (var i = 0; i < temp.length; i++) {
                top_array[i+1] = [temp[i], top[temp[i]]];
            }
            temp = Object.keys(bottom);
            for (var i = 0; i < temp.length; i++) {
                bottom_array[i+1] = [temp[i], bottom[temp[i]]];
            }
            temp = Object.keys(dress);
            for (var i = 0; i < temp.length; i++) {
                dress_array[i+1] = [temp[i], dress[temp[i]]];
            }
            temp = Object.keys(shoes);
            for (var i = 0; i < temp.length; i++) {
                shoes_array[i+1] = [temp[i], shoes[temp[i]]];
            }
            //Scarf
            //Color
            var data_scarf_color = google.visualization.arrayToDataTable(scarf_array);

            var options_scarf_color = {
                title: 'Trending Color for Scarfs',
                height: 500,
                width: 635,
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
            };
            var chart_scarf_color = new google.visualization.PieChart(document.getElementById('piechart_scarf_color'));
            chart_scarf_color.draw(data_scarf_color, options_scarf_color);


            //Top
            //Color
            var data_top_color = google.visualization.arrayToDataTable(top_array);

            var options_top_color = {
                title: 'Trending Color for Tops',
                height: 500,
                width: 635,
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
            };
            var chart_top_color = new google.visualization.PieChart(document.getElementById('piechart_top_color'));
            chart_top_color.draw(data_top_color, options_top_color);
            //Bottom
            //Color
            var data_bottom_color = google.visualization.arrayToDataTable(bottom_array);

            var options_bottom_color = {
                title: 'Trending Color for Bottoms',
                height: 500,
                width: 635,
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
            };
            var chart_bottom_color = new google.visualization.PieChart(document.getElementById('piechart_bottom_color'));
            chart_bottom_color.draw(data_bottom_color, options_bottom_color);
            //Dress
            //Color
            var data_dress_color = google.visualization.arrayToDataTable(dress_array);

            var options_dress_color = {
                title: 'Trending Color for Dresses',
                height: 500,
                width: 635,
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
            };
            var chart_dress_color = new google.visualization.PieChart(document.getElementById('piechart_dress_color'));
            chart_dress_color.draw(data_dress_color, options_dress_color);
            //Shoes
            //Color
            var data_shoes_color = google.visualization.arrayToDataTable(shoes_array);

            var options_shoes_color = {
                title: 'Trending Color for Shoes',
                height: 500,
                width: 635,
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
            };
            var chart_shoes_color = new google.visualization.PieChart(document.getElementById('piechart_shoes_color'));
            chart_shoes_color.draw(data_shoes_color, options_shoes_color);
        },
        error: function (error) {
            alert("Seems like Parse is having a problem");
        }
    });

}