/* Created by Shelley Witte, 2016 */

$('#mydiv').html('Hello World!');

function initialize() {
    cities();
    addColumns();
    addEvents();

};

var cityPop;

function cities() {
    cityPop = [
    {
        city: 'Minneapolis',
        population: 400070
    },
    {
        city: 'St. Paul',
        population: 294873,
    },
    {
        city: 'Washington, DC',
        population: 658893
    },
    {
        city: 'Stillwater',
        population: 18674
    }
    ];

    $("#mydiv").append("<table>");

    $("table").append("<tr>");

    //adds "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
};


//Debugging section

// defines a function that takes the cityPop global variable as a parameter 
function addColumns(){
    
    // iterates over each row in the table 
    $('tr').each(function(i){

        if (i == 0){

            // adds (appends) a third column to the table with the header labeled "City Size"
            $(this).append('<th>City Size</th>');
        } else {

            //creates variable citySize 
            var citySize;
            
            //if statement that looks at cityPop object population property and
            //designates the city as small/medium/large according to the criteria
            if (cityPop[i-1].population < 100000){
                citySize = 'Small';

            } else if (cityPop[i-1].population < 500000){
                citySize = 'Medium';

            } else {
                citySize = 'Large';
            };

            //adds the city size designation as new table data to the same row 
            //it assessed in the if statement
            $(this).append('<td>' + citySize + '</td>');
        };


    });
};


function addEvents(){

    $('table').mouseover(function(){
        
        var color = "rgb";

        for (var i=0; i<3; i++){

            var random = Math.round(Math.random() * 255);

            color += "random";

            if (i<2) {
                color += ",";
            
            } else {
                color += ")";
        };
    }

        $(this).css('color', color);
        
    });

};

// adds click listener that will give an alert if the table is clicked on
$('table').on('click', function(){
    alert('Hey, you clicked me!');

});



$(document).ready(initialize);

