import $ from 'jquery';
const Database_url = "https://fume-db-default-rtdb.europe-west1.firebasedatabase.app/"


export function loadCustomer() {
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

export function saveBike() {
    let response
    $.ajax({
        url: Database_url + 'bikes.json',
        dataType: "json",
        data:  JSON.stringify({'test':13}),
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
        data:  JSON.stringify({'test':13}),
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
        data:  JSON.stringify({'test':13}),
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