import $ from 'jquery';
const Database_url = "https://fume-db-default-rtdb.europe-west1.firebasedatabase.app/"


export function loadAllCustomer() {
    let response
    $.ajax({
        url: Database_url + 'customer.json',
        dataType: "json",
        type: 'GET',
        async: false,
        success: function (serverResponse) {
            console.log(serverResponse)
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Errorlog: Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during loading of sales data");
        }
    });
    return response
}

export function loadAllBikes() {
    let response
    $.ajax({
        url: Database_url + 'bike.json',
        dataType: "json",
        type: 'GET',
        async: false,
        success: function (serverResponse) {
            console.log(serverResponse)
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Errorlog: Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during loading of sales data");
        }
    });
    return response
}

export function loadAllBikeServices() {
    let response
    $.ajax({
        url: Database_url + 'bikeServices.json',
        dataType: "json",
        type: 'GET',
        async: false,
        success: function (serverResponse) {
            console.log(serverResponse)
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Errorlog: Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during loading of sales data");
        }
    });
    return response
}


export function saveBike() {
    let response
    $.ajax({
        url: Database_url + 'bike.json',
        dataType: "json",
        data:  JSON.stringify(
            {
                'Bike_ID': 'currentDate',
                'Kunden_ID': 'currentDate',
                'Fahrradtyp': 'String',
                'Kaufdatum': 'Datum',
                'GPS': 'String',
                'Standort': 'String',
                'Status': 'String'
                }
        ),
        type: 'POST',
        async: false,
        success: function (serverResponse) {

            console.log(serverResponse)
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Errorlog: Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during loading of sales data");
        }
    });
    return response
}

export function saveCustomer() {
    let response
    $.ajax({
        url: Database_url + 'customer.json',
        dataType: "json",
        data:  JSON.stringify(
            {
                'Kunden_ID': 'currentDate',
                'Vorname':'String',
                'Nachname': 'String',
                'Adresse': 'String',
                'Aktiv': 'Boolean',
                'Beginndatum': 'Datum',
                'Enddatum': 'Datum'
                }
            ),
        type: 'POST',
        async: false,
        success: function (serverResponse) {

            console.log(serverResponse)
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Errorlog: Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during loading of sales data");
        }
    });
    return response
}

export function saveBikeServices() {
    let response
    $.ajax({
        url: Database_url + 'bikeServices.json',
        dataType: "json",
        data:  JSON.stringify(
            {
            'BikeService_ID': 'currentDate',
            'Serviceart': 'String',
            'Bike_ID': 'Datum',
            'Erstellungsdatum': 'Datum',
            'Bearbeitungsdatum': 'Datum'
            }
            ),
        type: 'POST',
        async: false,
        success: function (serverResponse) {

            console.log(serverResponse)
            response = serverResponse;
        },
        error: function (serverResponse) {
            console.log("Errorlog: Response: ", serverResponse);
            response = serverResponse;
            debugger;
            throw new Error("Error during loading of sales data");
        }
    });
    return response
}