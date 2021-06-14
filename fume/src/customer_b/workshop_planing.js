import {BarChart, Bar, YAxis, XAxis, Tooltip, Legend} from "recharts"
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useState } from "react"

function Workshop_planing() {

  const lagerkapazität = [
    {
      label: "Kapazität",
      gesamt: 20000,
      frauen: 8000,
      herren: 7000,
      frei: 5000
    }
  ]

  const verfuegbarkeit = [
    {
      type: "Herren",
      bereit: 5000,
      defekt: 2000
    },
    {
      type: "Damen",
      bereit: 7500,
      defekt: 500
    }
  ]

  const tagesliste = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]

  
  const [tag, update_tag] = useState(14);
  const [monat, update_monat] = useState(6);
  const [jahr, update_jahr] = useState(2021)
  const [wochentag, update_wochentag] = useState("Montag")
  const [reparatur_liste_voll, update_reparatur_liste] = useState()

  var tmp_tag = 0
  var tmp_monat = 0
  var tmp_jahr = 0
  var index = 0
  var tmp_wochentag = ""

  const date_back = () => {
    tmp_tag = tag
    tmp_monat = monat
    tmp_jahr = jahr
    
    index = tagesliste.indexOf(wochentag)
    if (index > 0) {
      index -= 1
    }
    else {
      index = 6
    }

    tmp_wochentag = tagesliste[index]
    update_wochentag(tmp_wochentag)
    
    if (tmp_tag > 1) {

      tmp_tag -= 1
    }
    else {

      if (tmp_monat > 1) {

        tmp_monat -= 1
        tmp_tag = 30
      }

      else {

        tmp_jahr -= 1
        tmp_monat = 12
        tmp_tag = 30

      }
    }

    update_tag(tmp_tag)
    update_monat(tmp_monat)
    update_jahr(tmp_jahr)
    get_reparaturen()

  }

  const date_next = () => {
    tmp_tag = tag
    tmp_monat = monat
    tmp_jahr = jahr
    index = tagesliste.indexOf(wochentag)

    if (index < 7) {
      index += 1
    }
    else {
      index = 0
    }
    tmp_wochentag = tagesliste[index]
    update_wochentag(tmp_wochentag)

    if (tmp_tag < 30) {

      tmp_tag += 1
    }
    else {

      if (tmp_monat < 12) {

        tmp_monat += 1
        tmp_tag = 1
      }

      else {

        tmp_jahr += 1
        tmp_monat = 1
        tmp_tag = 1

      }
    }

    update_tag(tmp_tag)
    update_monat(tmp_monat)
    update_jahr(tmp_jahr)
    get_reparaturen()

  }

  const reparatur_daten = [
    {
      'BikeService_ID': 1,
      'Serviceart': "Felgen wechseln",
      'Bike_ID': 1248,
      'Erstellungsdatum': "12.6.2021",
      'Bearbeitungsdatum': "14.6.2021"
    },
    {
      'BikeService_ID': 2,
      'Serviceart': "Reifen aufpumpen",
      'Bike_ID': 9756,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "14.6.2021"
    },
    {
      'BikeService_ID': 3,
      'Serviceart': "Sessel austauschen",
      'Bike_ID': 9756,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "15.6.2021"
    },
    {
      'BikeService_ID': 4,
      'Serviceart': "Sessel einstellen",
      'Bike_ID': 9756,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "15.6.2021"
    },
    {
      'BikeService_ID': 5,
      'Serviceart': "Sessel austauschen",
      'Bike_ID': 9762,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "17.6.2021"
    }
  ]

  
  const get_reparaturen = () => {
    tmp_tag = tag
    tmp_monat = monat
    tmp_jahr = jahr
    
    let tmp_datum = String(tmp_tag) + "." + String(tmp_monat) + "." + String(tmp_jahr)
    
    let reparatur_list = []
    reparatur_list.push(
      <div class = "flex-container">
        <div>
            ID
          </div>
          <div>
            BikeID
          </div>
          <div>
            Servie Leistung
          </div>
      </div>
    )

    reparatur_daten.forEach((element) => {

      if (element.Bearbeitungsdatum === tmp_datum) {

        reparatur_list.push(
          <div class = "flex-container">
              <div>
                {element.BikeService_ID}
              </div>
              <div>
                {element.Bike_ID}
              </div>
              <div>
                {element.Serviceart}
              </div>
          </div>
        )
          
      }
      else {
        console.log("nichts")
      }
    
    })

    update_reparatur_liste(reparatur_list)
  }

  return (

    <div>

      <div>

        <h2>
          Lagerkapazität
        </h2>

        <BarChart 
          width = {1000} 
          height = {300} 
          data = {lagerkapazität}
          layout = "vertical"
          margin= {
            {
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <XAxis type = "number"/>
          <YAxis dataKey="label" type = "category"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="frauen" stackId="a" fill="#82ca9d" />
          <Bar dataKey="herren" stackId="a" fill="#8884d8" />
          <Bar dataKey="frei" stackId="a" fill="#5484d8" />

        </BarChart>

      </div>

      <div>

        <h2>
          Verfügbarkeit
        </h2>
        
        <BarChart 
          width = {1000} 
          height = {300} 
          data = {verfuegbarkeit}
          layout = "vertical"
          margin= {
            {
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <XAxis type = "number"/>
          <YAxis dataKey="type" type = "category"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="bereit" stackId="a" fill="#82ca9d" />
          <Bar dataKey="defekt" stackId="a" fill="#8884d8" />

        </BarChart>

      </div>

      <div style={{ backgroundColor: "white", borderRadius: '10px'}}>

        <h2>
          Werkstattplan
        </h2>
        <br/>

        <div class = "flex-container">

          <IconButton onClick = {() => date_back()}>

            <NavigateBeforeIcon/>

          </IconButton>

          <IconButton onClick = {() => date_next()}>

            <NavigateNextIcon/>

          </IconButton>

          <p>
            {wochentag}
          </p>

          <p>
            {tag}.{monat}.{jahr}
          </p>

        </div>
        <br/>

        <div class = "flex-container-col">
          {reparatur_liste_voll}
        </div>

      </div>

    </div>
  );
}

export default Workshop_planing;
