if ("geolocation" in navigator) {
	/* geolocation is available */
	navigator.geolocation.getCurrentPosition(
		function (posicion) {
			const { latitude, longitude } = posicion.coords;
			const map = L.map("map").setView([latitude, longitude], 15);
			L.tileLayer(
				"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
				{
					attribution:
						"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
				}
			).addTo(map);

			function onMapClick(e) {
				let marker = L.marker(e.latlng).addTo(map);
				marker.bindPopup("Hola Mundo!").openPopup();
			}
			map.on("click", onMapClick);
		},
		function (error) {
			console.log(`ERROR(${error.code}): ${error.message}`);
		}
	);
} else {
	/* geolocation IS NOT available */
}

var Esri_WorldStreetMap = L.tileLayer(
	"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
	{
		attribution:
			"Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",
	}
);
L.tileLayer(
	"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
	{
		attribution:
			"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
	}
);
var Esri_WorldTopoMap = L.tileLayer(
	"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
	{
		attribution:
			"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",
	}
);
var Jawg_Matrix = L.tileLayer(
	"https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}",
	{
		attribution:
			'<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		minZoom: 0,
		maxZoom: 22,
		subdomains: "abcd",
		accessToken: "<your accessToken>",
	}
);
var Thunderforest_Neighbourhood = L.tileLayer(
	"https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}",
	{
		attribution:
			'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		apikey: "<your apikey>",
		maxZoom: 22,
	}
);
var Thunderforest_Landscape = L.tileLayer(
	"https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}",
	{
		attribution:
			'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		apikey: "<your apikey>",
		maxZoom: 22,
	}
);
var Thunderforest_TransportDark = L.tileLayer(
	"https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}",
	{
		attribution:
			'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		apikey: "<your apikey>",
		maxZoom: 22,
	}
);
