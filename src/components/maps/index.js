import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "./style.js"
import { ContainerMap } from './style.js'

const Maps = ({newEvent={newEvent}}) => {
  return (
    <ContainerMap>
    <MapContainer 
    className='map'
    center={[`${newEvent.location.latitude}`, `${newEvent.location.longitude}`]} zoom={12}>
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
    </ContainerMap>
    
    
  )
}

export default Maps