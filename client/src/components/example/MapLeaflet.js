import React from 'react'
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents
} from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
const MapLeaflet = ({ setCoorDinate }) => {


    const AddMarkerToClick = () => {
        const map = useMapEvents({
            click(e) {
                const newMarker = e.latlng
                setCoorDinate(newMarker.lat, newMarker.lng)
                // console.log(newMarker)
            },
        })
        return null
    }

    return (
        <>
            <MapContainer
                center={[13, 100]}
                zoom={6}
                scrollWheelZoom={true}
                style={{ height: '100vh' }}
            >
                <AddMarkerToClick />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>
        </>
    )
}

export default MapLeaflet
