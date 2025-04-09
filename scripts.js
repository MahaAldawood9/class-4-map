

mapboxgl.accessToken = 'pk.eyJ1IjoibWFoYWFsZGF3b29kIiwiYSI6ImNtOThyeDFzYTA2NjEya3B3ZmVkbnBlNzUifQ.a2NLZb3e_7Ezo1smY7SpMQ';

const mapOptions = {
    container: 'map-container',
    style: "mapbox://styles/mapbox/dark-v11",
    center: [-73.99432, 40.71103],
    zoom: 10,
};


const map = new mapboxgl.Map(mapOptions);


const decadeColors = {
    '1950': '#744800',
    '1960': '#741000',
    '1970': '#740074',
    '1980': '#1b0074'
};

function getDecade(year) {
    ;
    if (year < 1970) return '1960s';
    if (year < 1980) return '1970s';
    return '1980s';
}


buildingsData.forEach((building) => {
    const popup = new mapboxgl.Popup({ offset: 36 })
        .setHTML(`
            <h3>${building.name}</h3>
            <p><strong>Architect:</strong> ${building.architect}</p>
            <p><strong>Year Built:</strong> ${building.year}</p>
            <p><strong>Location:</strong> ${building.location}</p>
        `);


    const buildingColor = getDecade(parseInt(building.year));

    new mapboxgl.Marker({
        scale: 0.8,
        color: buildingColor
    })
        .setLngLat([building.longitude, building.latitude])
        .setPopup(popup)
        .addTo(map);
})