import React, { Component }  from 'react';

function customer_overview() {
  const customerData = [
    { 'Kunden_ID': '14', 'Vorname': 'Jan', 'Nachname': 'Bern', 'Adresse': 'Q 7 68161 Mannheim', 'Aktiv': true, 'Beginndatum': '01.01.21', 'Enddatum': 'Datum' },
  ]

  customerData.sort(function (a, b) {
    if (a.Aktiv != b.Aktiv) {
      return b.Aktiv ? 1 : -1;
    }
    if (a.Nachname != b.Nachname) {
      return a.Nachname - b.Nachname; // descending
    }
  });

  let table_content = []

  customerData.forEach(e => {
    console.log(e.Aktiv)
    table_content.push(
      <tr>
        <td className="Cell">
          {e.Kunden_ID}
        </td >
        <td className="Cell"> 
          {e.Vorname}
        </td>
        <td className="Cell">
          {e.Nachname}
        </td>
        <td className="Cell">
          {e.Adresse}
        </td>
        <td className="Cell">
          {e.Beginndatum}
        </td>
        <td className="Cell">
          {e.Enddatum}
        </td>
        <td className="Cell">
          {e.Aktiv.toString()}
        </td>
      </tr>
    )
  });
  console.log(table_content)
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
      <br></br>
      <table style={{
        borderCollapse: "separate",
        backgroundColor: "white",
        border: "solid black 1px",
        borderRadius: "6px"
  }}
    
    className="kudentable">
      <tr>
        <th className="Cell">Kunden_ID</th>
        <th className="Cell">Vorname</th>
        <th className="Cell">Nachname</th>
        <th className="Cell">Adresse</th>
        <th className="Cell">Beginndatum</th>
        <th className="Cell">Enddatum</th>
        <th className="Cell">Aktiv</th>
      </tr>
      {table_content}

    </table>
    </div>
  );
}

export default customer_overview;
