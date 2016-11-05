function initMap() {

	var broadway = {
		info: '<strong>IntelliRise Tech Solutions in India</strong><br>\
					Microsoft Innovation Center<br> Greater Noida, UttarPradesh, India<br>',
		lat: 28.472568,
		long: 77.488780
	};

	var belmont = {
		info: '<strong>IntelliRise Tech Solutions in Denmark</strong><br>\
					Copenhagen<br>Skindergade 15 ,1159 Cph. K,Denmark<br>',
		lat: 55.680347,
		long: 12.575714
	};

	var sheridan = {
		info: '<strong>IntelliRise Tech Solutions in USA </strong><br>\r\
					8515 Red Oak<br>CT Apartment L,Indianapolis, USA<br>',
		lat: 39.644117,
		long: -86.132934
	};

	var locations = [
      [broadway.info, broadway.lat, broadway.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: new google.maps.LatLng(28.472568, 77.488780),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
