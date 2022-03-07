import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "./Maps.css"

const Maps = ({newEvent={newEvent}}) => {
  return (
    
    <MapContainer center={[`${newEvent.location.latitude}`, `${newEvent.location.longitude}`]} zoom={12}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[`${newEvent.location.latitude}`, `${newEvent.location.longitude}`]} >
      <Popup>
        The location is here <br />
      </Popup>
    </Marker>
  </MapContainer>
    
  )
}

export default Maps