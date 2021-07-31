import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const MapLeaflet = ({ handleGetLatLon }) => {

    const HandleGetLotlon = () => {
        const map = useMapEvents({
            click(e) {
                const latlon = e.latlng
                handleGetLatLon(latlon.lat, latlon.lng)
            },
        })
        return null
    }

    return (
        <>
            <MapContainer
                style={{ height: '100vh' }}
                center={[13, 100]}
                zoom={6}
                scrollWheelZoom={true}>
                <HandleGetLotlon />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>
        </>
    )
}

export default MapLeaflet
