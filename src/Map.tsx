import React from 'react';
import {MapContainer, TileLayer, Rectangle} from 'react-leaflet';
import parkingPlaces from './parking_places.json'

const MapComponent: React.FC = () => {
    const initialPosition: [number, number] = [56.306470, 44.075805];

    return (
        <MapContainer center={initialPosition} minZoom={18} zoom={18} style={{height: '100vh', width: '100%'}}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
                maxNativeZoom={19}
                maxZoom={21}
            />

            {parkingPlaces.map((rectangle) => <Rectangle
                key={rectangle.id}
                bounds={[[rectangle.y, rectangle.x], [rectangle.y2, rectangle.x2]]}
                color='red'/>
            )}
        </MapContainer>
    );
};

export default MapComponent;
