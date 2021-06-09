import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function salesdashboard() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
    },
    {
      name: 'Page B',
      uv: 3000,
    },
  ];
  return (
    <>
    <h1>salesdashboard:</h1>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  </>
  );
}

export default salesdashboard;
