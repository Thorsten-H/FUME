import { BarChart, Bar, Pie, PieChart, XAxis, YAxis, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, LineChart, Legend, 
  ResponsiveContainer, Line, Cell } from 'recharts';

import "./salesdashboard.css"

function salesdashboard() {

  const lineData = [
    {
      year: "2020/10",
      value: 8456
    },
    {
      year: "2020/11",
      value: 7323
    },
    {
      year: "2020/12",
      value: 5900
    },
    {
      year: "2021/01",
      value: 6312
    },
    {
      year: "2021/02",
      value: 7000
    },
    {
      year: "2021/03",
      value: 7340
    },
    {
      year: "2021/04",
      value: 9150
    },
    {
      year: "2021/05",
      value: 13289
    },
    {
      year: "2021/06",
      value: 14333
    }
  ]

  const fahrradverteilung = [
    {
      type: "Herren",
      total_bikes : 10000,
      geblockt: 6400,
      frei: 3600   //{total_bikes} - {in_use} 
    },
    {
      type: "Damen",
      total_bikes: 9000,
      geblockt: 6800,
      frei: 2200    //{total_bikes} - {in_use}
    }
  ]

  const abopreisteile = [
    {
      name: "Fahrrad",
      price: 6.77
    },
    {
      name: "GPS",
      price: 1.25
    },
    {
      name: "Wartung",
      price: 8.33
    },
    {
      name: "Service",
      price: 2.32
    },
    {
      name: "Verwaltung",
      price: 0.5
    },
    {
      name: "IT",
      price: 0.03
    },
    {
      name: "Marketing",
      price: 0.72
    },
    {
      name: "Lager",
      price: 0.23
    },
  ]

  const marktdaten = [
    {
      target_group: "Studenten",
      male: 1000,
      female: 2000,
      full: 10000,
    },
    {
      target_group: "Schüler",
      male: 800,
      female: 200,
      full: 1000,
    },
    {
      target_group: "Young Professionals",
      male: 2200,
      female: 2100,
      full: 5000,
    },
    {
      target_group: "Alternative Erwachsene",
      male: 800,
      female: 900,
      full: 4000,
    },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#FF8043", "#FF8046", "#FF8049", "#FF8041"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
    <div class = "flex-container">
      <div>

        <h2>
          Kundenentwicklung
        </h2>

        <LineChart width = {1000} height = {600} data = {lineData}>

          <XAxis dataKey = "year"/>
          <YAxis/>
          <Line type = "monotone" dataKey = "value" stroke = "#8884d8"/>
          <Tooltip/>

        </LineChart>

      </div>

      <div>

        <h2>
          Variantenauslastung
        </h2>

        <BarChart 
          width = {500} 
          height = {300} 
          data = {fahrradverteilung}
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
          <Bar dataKey="geblockt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="frei" stackId="a" fill="#8884d8" />

        </BarChart>

      </div>

      <div>

        <h2>
          Abopreisbestandteile
        </h2>
          <PieChart width={400} height={400}>

              <Pie
                dataKey="price"
                isAnimationActive={false}
                data={abopreisteile}
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius = {50}
                fill="#8884d8"
                label = {renderCustomizedLabel}
                labelLine = {false}
              >
              {abopreisteile.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
          </PieChart>

      </div>


      <div>

        <h2>
          Kundenverteilung
        </h2>

        <RadarChart cx="50%" cy="50%" data={marktdaten} width = {500} height = {500}>

          <PolarGrid />
          <PolarAngleAxis dataKey="target_group" />
          <PolarRadiusAxis angle={30}/>
          <Radar name="Mann" dataKey="male" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Frau" dataKey="female" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
          <Tooltip/>

        </RadarChart>

      </div>
    </div>

  </>
  );
}

export default salesdashboard;
