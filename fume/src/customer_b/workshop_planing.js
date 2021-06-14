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

  var aktuellerTag = "Montag"

  // var tag = 14
  var monat = 6
  var jahr = 2021

  const tagesliste = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]

  const [tag, date_back] = useState(0);

  // const date_back = () => {
  //   tag -= 1
  // }

  const date_next = () => {
    tag += 1
    console.log("tag", tag)
  }

  return (

    <div>

      <div>

        <h2>
          Lagekapazität
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

      <div>

        <h2>
          Werkstattplan
        </h2>

        <div>

          <IconButton onClick = {() => date_back(tag+1)}>

            <NavigateBeforeIcon/>

          </IconButton>

          <IconButton onClick = {() => date_next()}>

            <NavigateNextIcon/>

          </IconButton>

          <p>
            {aktuellerTag}
          </p>

          <p>
            {tag}.{monat}.{jahr}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Workshop_planing;
