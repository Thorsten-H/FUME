import "./customerdashboard.css"

function customerdashboard() {
  const customerData = [
    { 'Kunden_ID': '14', 'Vorname': 'Jan', 'Nachname': 'Bern', 'Adresse': 'Q 7 68161 Mannheim', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    { 'Kunden_ID': '45564351', 'Vorname': 'Niklas', 'Nachname': 'Müller', 'Adresse': 'Müllerstraße 555 64521 Groß Gerau', 'Aktiv': false, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    { 'Kunden_ID': '12345', 'Vorname': 'Simon', 'Nachname': 'Stein', 'Adresse': 'Q 8 68161 Mannheim', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    { 'Kunden_ID': '55', 'Vorname': 'Andres', 'Nachname': 'Gärtner', 'Adresse': 'Zeil 155 64135 Frankfurt', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    { 'Kunden_ID': '2345310', 'Vorname': 'Thorsten', 'Nachname': 'Becker', 'Adresse': 'Bäckerstraße 3 63215 Darmstadt', 'Aktiv': false, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' }
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
      </tr>
    )
  });
  console.log(table_content)
  return (
    <>
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
      </tr>
      {table_content}

    </table>
    </>
  );
}

export default customerdashboard;
