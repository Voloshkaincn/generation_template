function initMap() {
    // Styles a map in night mode.
    var latlng = new google.maps.LatLng(55.72537, 37.57512);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 15,
        // disableDefaultUI: true,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#94adb0"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f4f4"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "16"
                    },
                    {
                        "saturation": "76"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "weight": "0.01"
                    },
                    {
                        "color": "#f6f4ef"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#aa9e82"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "lightness": "40"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    });


		
	var contentString = '<div class="map-window">' +
        '<div class="map-window-close"></div>' +
        '<a href="/" class="map-window-cont">' +
        '<div class="map-window__img">' +

        '<img src="/template/img/logo.svg" alt="Ул.Ефремова 10, корпус 1">' +

        '</div>' +
        '<div class="map-window__info">' +
        '<div class="map-window-info">' +
        '<div class="map-window-info__title">' +
        '<span>Generation Family Dentist</span>' +
        '</div>' +
        '<div class="map-window-info__dscr">' +
        '<span>Время работы: 10:00 — 21:00</span>' +
        '</div>' +
        '<div class="map-window-info__adr">' +
        '<span>Ул.Ефремова 10, корпус 1</span>' +
        '</div>' +
        '<div class="map-window-info__link">' +
        '<span></span>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>';	

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        pixelOffset: new google.maps.Size(0,0)
    });
    
    
    var directionsService = new google.maps.DirectionsService;
    var  directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true, polylineOptions: { strokeColor: "#EC1744" }});

   // var request = {
    //    origin: new google.maps.LatLng(55.727390, 37.580650), //точка старта
    //    destination: new google.maps.LatLng(55.72537, 37.57512), //точка финиша
    //    travelMode: google.maps.DirectionsTravelMode.WALKING //режим прокладки маршрута
   // };

    //directionsService.route(request, function(response, status) {
    //    if (status == google.maps.DirectionsStatus.OK) {
   //         directionsDisplay.setDirections(response);
   //     }
    //});

    //directionsDisplay.setMap(map);
    
    
    


    var image = {

        url: '/template/img/g-marker.svg',

        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(22, 22) // anchor
    };
    var marker = new google.maps.Marker({
        position: {lat: 55.72537, lng: 37.57512 },
        map: map,
        icon: image,
    });
    
    
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    $(document).on('click', '.map-window-close', function (e) {
        infowindow.close(map, marker);
    });
    
    
    
    
    var image2 = {

        url: '/template/img/metro-marker.svg',

        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(22, 22) // anchor
    };
    var marker2 = new google.maps.Marker({
        position: {lat: 55.727424, lng: 37.580633 },
        map: map,
        icon: image2,
    });
    
    var marker3 = new google.maps.Marker({
        position: {lat: 55.722431, lng: 37.561976 },
        map: map,
        icon: image2,
    });
    
    
    
    var image3 = {

        url: '/template/img/bus-marker.svg',

        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(22, 22) // anchor
    };
    
    var marker4 = new google.maps.Marker({
        position: {lat: 55.724167, lng: 37.577646 },
        map: map,
        icon: image3,
    });
    
    
    marker2.addListener('click', function() {
        $('.stations_item[data-route="1"]').trigger('click');
    });
    
    marker3.addListener('click', function() {
        $('.stations_item[data-route="2"]').trigger('click');
    });
    
    marker4.addListener('click', function() {
        $('.stations_item[data-route="3"]').trigger('click');
    });
    
    
    
    $('.stations_item').click(function(){
        
        
        $('.stations_item').removeClass('active');
        $(this).addClass('active');
        
        var p_lt;
        var p_lg;
        
        var th_route = $(this).attr('data-route');
        
        if( th_route == 1 ){
            
             p_lt = 55.727424;
             p_lg = 37.580633;
            
            
        }
        if( th_route == 2 ){
            
             p_lt = 55.722431;
             p_lg = 37.561976;
            
            
        }
        if( th_route == 3 ){
            
             p_lt = 55.724167;
             p_lg = 37.577646;
            
            
        }
         var request = {
            origin: new google.maps.LatLng(p_lt, p_lg), //точка старта
            destination: new google.maps.LatLng(55.72537, 37.57512), //точка финиша
            travelMode: google.maps.DirectionsTravelMode.WALKING, //режим прокладки маршрута
           
             
         };
    
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    
        directionsDisplay.setMap(map);
    
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}