// MapComponent.js
import React, { useCallback, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    height: "400px", // Set the height of the map
    width: "100%"    // Set the width of the map
};

const center = {
    lat: -6.173673152923584,    // Los Angeles latitude
    lng: 106.80412292480469   // Los Angeles longitude
};

const locations = [
    {
        lat: -6.173673152923584,    // Los Angeles latitude
        lng: 106.80412292480469   // Los Angeles longitude
    },
    {
        lat: -6.17368,    // Los Angeles latitude
        lng: 106.8042   // Los Angeles longitude
    },
    {
        lat: -6.173673152923584,    // Los Angeles latitude
        lng: 106.80412292480469   // Los Angeles longitude
    },
];

const MapComponent = () => {

    const [map, setMap] = useState(null); // State to hold useful map instance

    const onLoad = useCallback((mapInstance) => {
        setMap(mapInstance);
        
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

    // if (loadError) return <div>Error loading maps</div>;
    // if (!isLoaded) return <div>Loading...</div>;

    return (
        <div style={{
            position: "relative",
            backgroundColor: "white",
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
                zoom={14} // Starting zoom
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