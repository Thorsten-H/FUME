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
        <img usemap="#bike" src={bike} width="735" height="439" alt="Fahrrad"></img>
        <map name ="bike">
          <area id = "Vorderreifen" shape="rectangle" coords="57,325,251,376"  alt="Vorderreifen"></area>
          <area id = "Frontlicht" shape="rectangle" coords="21,144,178,195"  alt="Vorderlicht"></area>
          <area id = "Pedal" shape="rectangle" coords="305,349,431,402"  alt="Pedal"></area>
          <area id = "Lenkrad" shape="rectangle" coords="19,28,162,77"  alt="Lenkrad"></area>
          <area id = "Sattel" shape="rectangle" coords="527,21,653,75"  alt="Sattel"></area>
          <area id = "Schaltung" shape="rectangle" coords="361,201,526,253"  alt="Schaltung"></area>
          <area id = "Rücklicht" shape="rectangle" coords="546,148,706,201"  alt="Rücklicht"></area>
          <area id = "Hinterreifen" shape="rectangle" coords="493,324,689,377"  alt="Hinterreifen"></area>
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
