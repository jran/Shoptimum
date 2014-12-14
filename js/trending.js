google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
    //Scarf
    //Color
    var data_scarf_color = google.visualization.arrayToDataTable([
      ['Color', 'Popularity'],
      ['White', 11],
      ['Red', 2],
      ['Blue', 2],
      ['Green', 2],
      ['Orange', 7]
    ]);

    var options_scarf_color = {
        title: 'Trending Color for Scarfs',
        height: 650,
        width: 650
    };
    var chart_scarf_color = new google.visualization.PieChart(document.getElementById('piechart_scarf_color'));
    chart_scarf_color.draw(data_scarf_color, options_scarf_color);
    //Material
    var data_scarf_material = google.visualization.arrayToDataTable([
        ['Material', 'Popularity'],
        ['Wool', 11],
        ['Cotton', 2],
        ['Silk', 2],
        ['Polyester', 2],
        ['Linen', 7]
    ]);

    var options_scarf_material = {
        title: 'Trending Material for Scarfs',
        height: 650,
        width: 650
    };
    var chart_scarf_material = new google.visualization.PieChart(document.getElementById('piechart_scarf_material'));
    chart_scarf_material.draw(data_scarf_material, options_scarf_material);
    //Top
    //Color
    var data_top_color = google.visualization.arrayToDataTable([
      ['Color', 'Popularity'],
      ['White', 11],
      ['Red', 2],
      ['Blue', 2],
      ['Green', 2],
      ['Orange', 7]
    ]);

    var options_top_color = {
        title: 'Trending Color for Scarfs',
        height: 650,
        width: 650
    };
    var chart_top_color = new google.visualization.PieChart(document.getElementById('piechart_top_color'));
    chart_top_color.draw(data_top_color, options_top_color);
    //Material
    var data_top_material = google.visualization.arrayToDataTable([
        ['Material', 'Popularity'],
        ['Wool', 11],
        ['Cotton', 2],
        ['Silk', 2],
        ['Polyester', 2],
        ['Linen', 7]
    ]);

    var options_top_material = {
        title: 'Trending Material for Scarfs',
        height: 650,
        width: 650
    };
    var chart_top_material = new google.visualization.PieChart(document.getElementById('piechart_top_material'));
    chart_top_material.draw(data_top_material, options_top_material);


    //Bottom
    //Color
    var data_bottom_color = google.visualization.arrayToDataTable([
      ['Color', 'Popularity'],
      ['White', 11],
      ['Red', 2],
      ['Blue', 2],
      ['Green', 2],
      ['Orange', 7]
    ]);

    var options_bottom_color = {
        title: 'Trending Color for Bottoms',
        height: 650,
        width: 650
    };
    var chart_bottom_color = new google.visualization.PieChart(document.getElementById('piechart_bottom_color'));
    chart_bottom_color.draw(data_bottom_color, options_bottom_color);
    //Material
    var data_bottom_material = google.visualization.arrayToDataTable([
        ['Material', 'Popularity'],
        ['Wool', 11],
        ['Cotton', 2],
        ['Silk', 2],
        ['Polyester', 2],
        ['Linen', 7]
    ]);

    var options_bottom_material = {
        title: 'Trending Material for Bottoms',
        height: 650,
        width: 650
    };
    var chart_bottom_material = new google.visualization.PieChart(document.getElementById('piechart_bottom_material'));
    chart_bottom_material.draw(data_bottom_material, options_bottom_material);

    //Dress
    //Color
    var data_dress_color = google.visualization.arrayToDataTable([
      ['Color', 'Popularity'],
      ['White', 11],
      ['Red', 2],
      ['Blue', 2],
      ['Green', 2],
      ['Orange', 7]
    ]);

    var options_dress_color = {
        title: 'Trending Color for Dresses',
        height: 650,
        width: 650
    };
    var chart_dress_color = new google.visualization.PieChart(document.getElementById('piechart_dress_color'));
    chart_dress_color.draw(data_dress_color, options_dress_color);
    //Material
    var data_dress_material = google.visualization.arrayToDataTable([
        ['Material', 'Popularity'],
        ['Wool', 11],
        ['Cotton', 2],
        ['Silk', 2],
        ['Polyester', 2],
        ['Linen', 7]
    ]);

    var options_dress_material = {
        title: 'Trending Material for Dresses',
        height: 650,
        width: 650
    };
    var chart_dress_material = new google.visualization.PieChart(document.getElementById('piechart_dress_material'));
    chart_dress_material.draw(data_dress_material, options_dress_material);
    //Shoes
    //Color
    var data_shoes_color = google.visualization.arrayToDataTable([
      ['Color', 'Popularity'],
      ['White', 11],
      ['Red', 2],
      ['Blue', 2],
      ['Green', 2],
      ['Orange', 7]
    ]);

    var options_shoes_color = {
        title: 'Trending Color for Shoes',
        height: 650,
        width: 650
    };
    var chart_shoes_color = new google.visualization.PieChart(document.getElementById('piechart_shoes_color'));
    chart_shoes_color.draw(data_shoes_color, options_shoes_color);
    //Material
    var data_shoes_material = google.visualization.arrayToDataTable([
        ['Material', 'Popularity'],
        ['Wool', 11],
        ['Cotton', 2],
        ['Silk', 2],
        ['Polyester', 2],
        ['Linen', 7]
    ]);

    var options_shoes_material = {
        title: 'Trending Material for shoes',
        height: 650,
        width: 650
    };
    var chart_shoes_material = new google.visualization.PieChart(document.getElementById('piechart_shoes_material'));
    chart_shoes_material.draw(data_shoes_material, options_shoes_material);
}