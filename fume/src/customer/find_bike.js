import React, { Component }  from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "./find_bike.css"
import L from 'leaflet';
//import marker from './Bike.png';
import bike_logo from './../asset/Bike.png'


function find_bike() {
  
  const bike_position = [49.4836, 8.477]


  const bikeIcon = new L.Icon({
      iconUrl: bike_logo,
      iconSize: [60,60],
  });

  return (

    <div><div id='mapid'>
      <MapContainer center={bike_position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <Marker position={bike_position} icon={bikeIcon}>
            <Popup>
             Hier befindet sich Ihr Fahrrad!
            </Popup>
          </Marker>
      </MapContainer>
    </div></div>);
}

export default find_bike;
