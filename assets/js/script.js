

let APIKey = 'beda6b198599b8d54c518efb4033e99f';

var ctiy_name;

function displayCity() {

    var API_Url = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`;

    fetch(API_Url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)


      });

};

$("#atlanta").on("click", function (event){
    event.preventDefault();
    console.log('testing 123');
    
    lat =
    lon = 

    displayCity();

});