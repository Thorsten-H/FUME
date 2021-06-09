import $ from 'jquery';
const Database_url = "https://murat-db-default-rtdb.europe-west1.firebasedatabase.app/"


export function getSalesData() {
    let response
    $.ajax({
        url: Database_url + 'songs.json',
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