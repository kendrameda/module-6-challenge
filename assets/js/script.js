

let APIKey = '367a5f4cd9c1e6933757256785456545';

var lang = 'en';
var units = 'imperial';
var city = $("#cname").val().trim();



function displayCity() {

  var city = $("#cname").val().trim();
    var API_Url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${units}&lang=${lang}`;

    fetch(API_Url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data);
        console.log('test');

        $("#current-temp").empty();

        var featureCard = $("<div>");

        var city = data.city.name;


        var realTemp = data.list[0].main.temp;
        console.log(realTemp);

        var windSpeed = data.list[0].wind.speed;

        var windDirect = data.list[0].wind.deg;

        var humid = data.list[0].main.humidity;

        featureCard.append("<br/>" + "Current city: " + city  + "<br/>");

        featureCard.append("<br/>" + "Current Temp: " + realTemp + '℉' + "<br/>");
        
        featureCard.append("<br/>" + "Wind Speed: " + windSpeed + 'mph ' + windDirect + '°' + "<br/>");
        featureCard.append("<br/>" + "Humidity: " + humid + '%' + "<br/>");

        $("#current-temp").append(featureCard);

        

      });

};


function tomorrow() {

  var city = $("#cname").val().trim();
    var API_Url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${units}&lang=${lang}`;

    fetch(API_Url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data);
        console.log('test');

        $(".tomorrow").empty();

        var featureCard = $("<div>");

        var city = data.city.name;


        var realTemp = data.list[7].main.temp;
        console.log(realTemp);

        var windSpeed = data.list[7].wind.speed;

        var windDirect = data.list[7].wind.deg;

        var humid = data.list[7].main.humidity;

        featureCard.append("<br/>" + "Selected city: " + city  + "<br/>");

        featureCard.append("<br/>" + "Predicted Temp: " + realTemp + '℉' + "<br/>");
        
        featureCard.append("<br/>" + "Wind Speed: " + windSpeed + 'mph ' + windDirect + '°' + "<br/>");
        featureCard.append("<br/>" + "Humidity: " + humid + '%' + "<br/>");

        $(".tomorrow").append(featureCard);

        

      });

};

function dayAfter() {

  var city = $("#cname").val().trim();
    var API_Url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${units}&lang=${lang}`;

    fetch(API_Url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data);
        console.log('test');

        $(".dayafter").empty();

        var featureCard = $("<div>");

        var city = data.city.name;


        var realTemp = data.list[18].main.temp;
        console.log(realTemp);

        var windSpeed = data.list[18].wind.speed;

        var windDirect = data.list[18].wind.deg;

        var humid = data.list[18].main.humidity;

        featureCard.append("<br/>" + "Selected city: " + city  + "<br/>");

        featureCard.append("<br/>" + "Predicted Temp: " + realTemp + '℉' + "<br/>");
        
        featureCard.append("<br/>" + "Wind Speed: " + windSpeed + 'mph ' + windDirect + '°' + "<br/>");
        featureCard.append("<br/>" + "Humidity: " + humid + '%' + "<br/>");

        $(".dayafter").append(featureCard);

        

      });

};

function dayAfter3() {

  var city = $("#cname").val().trim();
    var API_Url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${units}&lang=${lang}`;

    fetch(API_Url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data);
        console.log('test');

        $(".card-text3").empty();

        var featureCard = $("<div>");

        var city = data.city.name;


        var realTemp = data.list[27].main.temp;
        console.log(realTemp);

        var windSpeed = data.list[27].wind.speed;

        var windDirect = data.list[27].wind.deg;

        var humid = data.list[27].main.humidity;

        featureCard.append("<br/>" + "Selected city: " + city  + "<br/>");

        featureCard.append("<br/>" + "Predicted Temp: " + realTemp + '℉' + "<br/>");
        
        featureCard.append("<br/>" + "Wind Speed: " + windSpeed + 'mph ' + windDirect + '°' + "<br/>");
        featureCard.append("<br/>" + "Humidity: " + humid + '%' + "<br/>");

        $(".card-text3").append(featureCard);

        

      });

};

function dayAfter4() {

  var city = $("#cname").val().trim();
    var API_Url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${units}&lang=${lang}`;

    fetch(API_Url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data);
        console.log('test');

        $(".card-text4").empty();

        var featureCard = $("<div>");

        var city = data.city.name;


        var realTemp = data.list[35].main.temp;
        console.log(realTemp);

        var windSpeed = data.list[35].wind.speed;

        var windDirect = data.list[35].wind.deg;

        var humid = data.list[35].main.humidity;

        featureCard.append("<br/>" + "Selected city: " + city  + "<br/>");

        featureCard.append("<br/>" + "Predicted Temp: " + realTemp + '℉' + "<br/>");
        
        featureCard.append("<br/>" + "Wind Speed: " + windSpeed + 'mph ' + windDirect + '°' + "<br/>");
        featureCard.append("<br/>" + "Humidity: " + humid + '%' + "<br/>");

        $(".card-text4").append(featureCard);

        

      });

};

function dayAfter5() {

  var city = $("#cname").val().trim();
    var API_Url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${units}&lang=${lang}`;

    fetch(API_Url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data);
        console.log('test');

        $(".card-text5").empty();

        var featureCard = $("<div>");

        var city = data.city.name;


        var realTemp = data.list[39].main.temp;
        console.log(realTemp);

        var windSpeed = data.list[39].wind.speed;

        var windDirect = data.list[39].wind.deg;

        var humid = data.list[39].main.humidity;

        featureCard.append("<br/>" + "Selected city: " + city  + "<br/>");

        featureCard.append("<br/>" + "Predicted Temp: " + realTemp + '℉' + "<br/>");
        
        featureCard.append("<br/>" + "Wind Speed: " + windSpeed + 'mph ' + windDirect + '°' + "<br/>");
        featureCard.append("<br/>" + "Humidity: " + humid + '%' + "<br/>");

        $(".card-text5").append(featureCard);

        

      });

};

$("#cname").on('click', function (event){
    event.preventDefault();
    console.log('button was clicked?!?');

    displayCity();
    tomorrow();
    dayAfter();
dayAfter3();
dayAfter4();
dayAfter5();




  });

//   var input = document.getElementById('saveServer');
// localStorage.setItem('server', input.val());

var input = document.getElementById('saveServer').ariaValueMax;
localStorage.setItem('server', input);

document.getElementById('saveServer').value = localStorage.getItem('server');

//   var storedValue = localStorage.getItem("server");

  // storedValue();

  
  // $(document).ready(function() {
  //   M.updateTextFields();
  // });
  
  // function fiveDay( ) {
  //     var API_Url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=${units}&lang=${lang}`;
  
  //     fetch(API_Url)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //       .then(function (data) {
  //         console.log(data);
  //         console.log('test');
  //       })
  
  //       var realTemp = data.list[1].main.temp;
  //         console.log(realTemp);
  
  //         var windSpeed = data.list[1].wind.speed;
  
  //         var windDirect = data.list[1].wind.deg;
  
  //         var humid = data.list[1].main.humidity;
  
  //         $(".fiveDay").empty();
  
  //         var featureCard = $("<div>");
  
  //         var city = data.city.name;
  
  
  //         var realTemp = data.list[0].main.temp;
  //         console.log(realTemp);
  
  //         var windSpeed = data.list[0].wind.speed;
  
  //         var windDirect = data.list[0].wind.deg;
  
  //         var humid = data.list[0].main.humidity;
  
  //         featureCard.append("<br/>" + "Current city: " + city  + "<br/>");
  
  //         featureCard.append("<br/>" + "Current Temp: " + realTemp + '℉' + "<br/>");
          
  //         featureCard.append("<br/>" + "Wind Speed: " + windSpeed + ' ' + windDirect + '°' + "<br/>");
  //         featureCard.append("<br/>" + "Humidity: " + humid + '%' + "<br/>");
  
  //         $(".fiveDay").append(featureCard);
  // }
  
  // $("#submit").on('click', function(event){
  //   event.preventDefault();
  //     console.log('testing 123');
      
  //    city  = "#cityName";
  
  //     displayCity();
  //     fiveDay();
  // }
  // )