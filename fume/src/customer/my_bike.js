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
          <area id = "Vorderreifen" shape="rectangle" coords="57,324,251,371"  alt="Vorderreifen"></area>
          <area id = "Frontlicht" shape="rectangle" coords="20,152,189,202"  alt="Vorderlicht"></area>
          <area id = "Pedale" shape="rectangle" coords="305,347,430,397"  alt="Pedale"></area>
          <area id = "Lenkrad" shape="rectangle" coords="10,21,146,69"  alt="Lenkrad"></area>
          <area id = "Sattel" shape="rectangle" coords="528,20,655,71"  alt="Sattel"></area>
          <area id = "Schaltung" shape="rectangle" coords="361,199,528,249"  alt="Schaltung"></area>
          <area id = "Rücklicht" shape="rectangle" coords="545,146,706,197"  alt="Rücklicht"></area>
          <area id = "Hinterreifen" shape="rectangle" coords="493,322,689,372"  alt="Hinterreifen"></area>
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
