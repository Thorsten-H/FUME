import "./customerdashboard.css"

function customerdashboard() {
  const customerData = [
    { 'Kunden_ID': '14', 'Vorname': 'Jan', 'Nachname': 'Bern', 'Adresse': 'Q 7 68161 Mannheim', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    { 'Kunden_ID': '45564351', 'Vorname': 'Niklas', 'Nachname': 'Müller', 'Adresse': 'Müllerstraße 555 64521 Groß Gerau', 'Aktiv': false, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    { 'Kunden_ID': '12345', 'Vorname': 'Simon', 'Nachname': 'Stein', 'Adresse': 'Q 8 68161 Mannheim', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    { 'Kunden_ID': '55', 'Vorname': 'Andres', 'Nachname': 'Gärtner', 'Adresse':'Zeil 155 64135 Frankfurt', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    { 'Kunden_ID': '2345310', 'Vorname': 'Thorsten', 'Nachname': 'Becker', 'Adresse':'Bäckerstraße 3 63215 Darmstadt', 'Aktiv': false, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' }
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
        <td>
          {e.Kunden_ID}
        </td>
        <td>
          {e.Vorname}
        </td>
        <td>
          {e.Nachname}
        </td>
        <td>
          {e.Adresse}
        </td>
        <td>
          {e.Beginndatum}
        </td>
        <td>
          {e.Enddatum}
        </td>
      </tr>
    )
  });
  console.log(table_content)
  return (
    <>
    <br></br>
    <table id="Kundentable">
      <tr>
        <th>Kunden_ID</th>
        <th>Vorname</th>
        <th>Nachname</th>
        <th>Adresse</th>
        <th>Beginndatum</th>
        <th>Enddatum</th>
      </tr>
      {table_content}

    </table>
    </>
  );
}

export default customerdashboard;
