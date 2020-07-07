jQuery(function() {
    initGoogleMap();
    initSlider();
});

function initSlider() {
    $('.gallery').bxSlider({
        pager: false,
        controls: false,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 390,
        slideMargin: 30
    });
}
function initGoogleMap() {
    !function(t) {
        if (t || null == t) {
            var e = {
                lat: $("#googleMap").data("lat"),
                lng: $("#googleMap").data("long")
            };
            !function(t) {
                var e = {
                    zoom: 14,
                    center: t,
                    scrollwheel: !1,
                    styles: [{
                        elementType: "geometry",
                        stylers: [{
                            color: "#1c1e23"
                        }]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#93969b"
                        }]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                            color: "#1b1d23"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "administrative.land_parcel",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "administrative.land_parcel",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "landscape.natural",
                        elementType: "geometry",
                        stylers: [{
                            color: "#1c1e23"
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#1c1e23"
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#16181d"
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{
                            color: "#23252a"
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#23252a"
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{
                            color: "#303237"
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#303237"
                        }]
                    }, {
                        featureType: "road.highway.controlled_access",
                        elementType: "geometry",
                        stylers: [{
                            color: "#3c3f44"
                        }]
                    }, {
                        featureType: "road.highway.controlled_access",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "transit.line",
                        elementType: "geometry",
                        stylers: [{
                            color: "#16181d"
                        }]
                    }, {
                        featureType: "transit.line",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "transit.line",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "transit.station",
                        elementType: "geometry",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#04060b"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#616161"
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.icon",
                        stylers: [{
                            color: "#1c1e23"
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [{
                            visibility: "off"
                        }]
                    }],
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                    , o = $("#googleMap").data("marker")
                    , n = document.getElementById("googleMap")
                    , i = new google.maps.Map(n,e);
                new google.maps.Marker({
                    position: t,
                    map: i,
                    icon: o
                })
            }(e)
        }
    }($("#googleMap").length)
}
