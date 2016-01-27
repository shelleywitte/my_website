/* Created by Shelley Witte, 2016 */

$('#mydiv').html('Hello World!');

function initialize() {
    cities();
};

function cities() {
    var cityPop = [
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

    for (var i = 0; i < cityPop.length; i++) {
    console.log(cityPop[i]);
}
};

$(document).ready(initialize);