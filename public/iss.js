const map = L.map('maps').setView([0, 0],2);
		const attribution = '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
		const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		const tiles = L.tileLayer(tileUrl,{attribution});
		tiles.addTo(map);
		const url ='https://api.wheretheiss.at/v1/satellites/25544';
		const myIcon = L.icon({
			    iconUrl: 'satelite.png',
			    iconSize: [100, 100],
			    iconAnchor: [25, 16],
			    popupAnchor: [-3, -76],
			});
		const marker = L.marker([0,0],{icon:myIcon}).addTo(map);
		
		async function getData(){
			let first = true;
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			//javascript destructuring 	
			const {latitude,longitude}=data;
			console.log(latitude);
			console.log(longitude);
			marker.setLatLng([latitude,longitude]);
			if (first)
			{
			map.setView([latitude,longitude]);
			first=false;
			}
			//L.marker([latitude,longitude]).addTo(map);
			document.getElementById('lat').textContent=latitude.toFixed(2);
			document.getElementById('lon').textContent=longitude.toFixed(2);

		}

		getData();
		setInterval(getData,1000);