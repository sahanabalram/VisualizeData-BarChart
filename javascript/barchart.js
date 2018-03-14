$(document).ready(function () {
    let gdpUrl = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";

    let months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMEBER"];

    let currencyFormat = d3.format("$,.2f");
    $.ajax({
        url: gdpUrl,
        success: function(data){
            let graphData = data.graphData;
            console.log(graphData);
            console.log(JSON.stringify(graphData));
        }
    });
});