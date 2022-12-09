

let APIKey = '367a5f4cd9c1e6933757256785456545';

var lang = 'en';
var units = 'imperial';

function displayCity() {

    var API_Url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${units}&lang=${lang}`;

    fetch(API_Url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data);
        console.log('test');

        $(".current-temp").empty();

        var featureCard = $("<div>");

        var city = data.city.name;


        var realTemp = data.list[0].main.temp;
        console.log(realTemp);

        var windSpeed = data.list[0].wind.speed;

        var windDirect = data.list[0].wind.deg;

        var humid = data.list[0].main.humidity;

        featureCard.append("<br/>" + "Current city: " + city  + "<br/>");

        featureCard.append("<br/>" + "Current Temp: " + realTemp + '℉' + "<br/>");
        
        featureCard.append("<br/>" + "Wind Speed: " + windSpeed + ' ' + windDirect + '°' + "<br/>");
        featureCard.append("<br/>" + "Humidity: " + humid + '%' + "<br/>");

        $(".current-temp").append(featureCard);

      });

};

$("#atlanta").on("click", function (event){
    event.preventDefault();
    console.log('testing 123');
    
   city = 'atlanta';

    displayCity();

});

$("#denver").on("click", function (event){
    event.preventDefault();
    console.log('testing 123');
    
   city = 'Denver';

    displayCity();

});

$("#seatle").on("click", function (event){
    event.preventDefault();
    console.log('testing 123');
    
   city = 'Seattle';

    displayCity();

});

$("#sanFran").on("click", function (event){
    event.preventDefault();
    console.log('testing 123');
    
   city = 'San Fransisco';

    displayCity();

});

$("#orlando").on("click", function (event){
    event.preventDefault();
    console.log('testing 123');
    
   city = 'Orlando';

    displayCity();

});

$("#NY").on("click", function (event){
    event.preventDefault();
    console.log('testing 123');
    
   city = 'New York';

    displayCity();

});

$("#chicago").on("click", function (event){
    event.preventDefault();
    console.log('testing 123');
    
   city = 'Chicago';

    displayCity();

});

$("#austic").on("click", function (event){
    event.preventDefault();
    console.log('testing 123');
    
   city = 'Austin';

    displayCity();

});

