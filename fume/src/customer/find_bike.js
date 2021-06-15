import React, { Component }  from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./find_bike.css"

function find_bike() {
  
  const bike_position = [49.4836, 8.477]

  
  return (

    <div><h1>Find My Bike</h1><div id='mapid'>
      <MapContainer center={bike_position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <Marker position={bike_position}>
            <Popup>
             Hier befindet sich Ihr Fahrrad!
            </Popup>
          </Marker>
      </MapContainer>
    </div></div>);
}

export default find_bike;
