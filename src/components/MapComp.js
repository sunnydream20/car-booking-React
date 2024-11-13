// MapComponent.js
import React, { useCallback, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
    height: "400px", // Set the height of the map
    width: "100%"    // Set the width of the map
};

const center = {
    lat: 34.0522,    // Los Angeles latitude
    lng: -118.2437   // Los Angeles longitude
};

const locations = [
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { lat: 34.0407, lng: -118.2468 }, // Another position
    { lat: 34.0630, lng: -118.2754 }, // Another position
    { lat: 34.0701, lng: -118.2187 }, // Another position
    { lat: 34.0515, lng: -118.2500 }, // Another position
    { lat: 34.0377, lng: -118.2489 }, // Another position
];

const MapComponent = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: '236e50612c93fab6f69dda36244da55d' // Use your API key here
    });

    const [map, setMap] = useState(null); // State to hold useful map instance

    const onLoad = useCallback((map) => {
        setMap(map);
    }, []);

    const zoomIn = () => {
        if (map) {
            map.setZoom(map.getZoom() + 1);
        }
    };

    const zoomOut = () => {
        if (map) {
            map.setZoom(map.getZoom() - 1);
        }
    };

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div style={{
            position: "relative"
        }}>
            <div style={{
                position: "absolute",
                zIndex: 1,
                bottom: "0px",
                right: "0px"
            }}>
                <button onClick={zoomIn}>+</button>
                <button onClick={zoomOut}>-</button>
            </div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12} // Starting zoom
                center={center}
                onLoad={onLoad}
                draggable={true} // Enable dragging
            >
                {locations.map((location, index) => (
                    <Marker key={index} position={location} />
                ))}
            </GoogleMap>
        </div>
    );
};

export default MapComponent;