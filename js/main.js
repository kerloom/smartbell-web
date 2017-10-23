 

$(function() {  
    var glower = $('#glower');
    window.setInterval(function() {  
        glower.toggleClass('active');
    }, 1000);
});

function initMap() {
        var uluru = {lat: 20.5893200, lng: -100.3932430};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }