import React, { Component }  from 'react';
import bike from './../asset/bike_fume.png'
import { Dropdown } from 'semantic-ui-react'


function my_bike() {

  const errorOptions = [
    {
      key: 'Vorderreifen',
      text: 'Vorderreifen',
      value: 'Vorderreifen'
    },
    {
      key: 'Vorderlicht',
      text: 'Vorderlicht',
      value: 'Vorderlicht'
    },
    {
      key: 'Pedale',
      text: 'Pedale',
      value: 'Pedale'
    },
    {
      key: 'Lenkrad',
      text: 'Lenkrad',
      value: 'Lenkrad'
    },
    {
      key: 'Sattel',
      text: 'Sattel',
      value: 'Sattel'
    },
    {
      key: 'Schaltung',
      text: 'Schaltung',
      value: 'Schaltung'
    },
    {
      key: 'Hinterlicht',
      text: 'Hinterlicht',
      value: 'Hinterlicht'
    },
    {
      key: 'Hinterreifen',
      text: 'Hinterreifen',
      value: 'Hinterreifen'
    },

  ]

  const DropdownExampleSelection = () => (
    <Dropdown
      placeholder='Fehlerquelle auswählen'
      fluid
      selection
      options={errorOptions}
    />
  )

  return (

    
    <div>

      <h1>Fahrradübersicht</h1>
      <div>
        <img usemap="#bike" src={bike} width="600" height="357" alt="Fahrrad"></img>
        <map name ="bike">
          <area id = "Vorderreifen" shape="rectangle" coords="4,166,156,3,260,3,310,60,310,79,110,300,40,290,4,240"  alt="Vorderreifen"></area>
          <area id = "Vorderlicht" shape="rectangle" coords=""  alt="Vorderlicht"></area>
          <area id = "Pedale" shape="rectangle" coords=""  alt="Pedale"></area>
          <area id = "Lenkrad" shape="rectangle" coords=""  alt="Lenkrad"></area>
          <area id = "Sattel" shape="rectangle" coords=""  alt="Sattel"></area>
          <area id = "Schaltung" shape="rectangle" coords=""  alt="Schaltung"></area>
          <area id = "Hinterlicht" shape="rectangle" coords=""  alt="Hinterlicht"></area>
          <area id = "Hinterreifen" shape="rectangle" coords=""  alt="Hinterreifen"></area>
        </map>

      </div>        

      <div style={{ backgroundColor: "white", borderRadius: '10px', width: "80%"}}>

        <h2>
          Fehlermeldung anlegen
        </h2>

        <DropdownExampleSelection/>
      </div>
    </div>

  
  );
}

export default my_bike;
