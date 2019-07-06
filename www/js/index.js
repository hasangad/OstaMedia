var app = {
	initialize: function() {
		this.bindEvents();
	},
	
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {

		StatusBar.overlaysWebView(true);
		StatusBar.styleDefault();
		StatusBar.backgroundColorByName("white");

		function checkConnection() {
			var networkState = navigator.connection.type;
			var states = {};
			states[Connection.UNKNOWN] = 'Unknown connection';
			states[Connection.ETHERNET] = 'Ethernet connection';
			states[Connection.WIFI] = 'WiFi connection';
			states[Connection.CELL_2G] = 'Cell 2G connection';
			states[Connection.CELL_3G] = 'Cell 3G connection';
			states[Connection.CELL_4G] = 'Cell 4G connection';
			states[Connection.CELL] = 'Cell generic connection';
			states[Connection.NONE] = 'No network connection';
			if (states[networkState] == states[Connection.NONE]) {

				//$(".check_interent").fadeIn(1000);

				alert('لا يوجد إتصال بالانترنت ');

			} else {
				$(".preloader")
				.fadeOut();
			  });
				  var myCallback = function(event) { alert(event.url);
				 }
				  
				 $(".preloader")
					.fadeOut();
				if (localStorage.login_is) {
					$(".splash")
						.hide();
				} else {
					$(".skip_to_home")
						.fadeIn(1000);
				}
			}
			
		}
		checkConnection();
	}

}
