// from data.js
var tableData = data;

// YOUR CODE HERE!

// select the filter type
var filterType = d3.select("#filter-type");

var filterTypeValue = d3.select("#filter-type-value");

// Select the submit button
var submit = d3.select("#filter-btn");


// Get the value property of the input element
var inputValue = inputElement.property("value");
var inputValueCity = d3.select("#city").property("value");
var inputValueState = d3.select("#state").property("value");
var inputValueCountry = d3.select("#country").property("value");
var inputValueShape = d3.select("#shape").property("value");

if (inputValue != "") {
  tableData = tableData.filter(UFOsighting=> UFOsighting.datetime === inputValue); 
}

if (inputValueCity!="") {
  tableData = tableData.filter(UFOsighting=> UFOsighting.city === inputValueCity); 
}

if (inputValueState != "") {
  tableData = tableData.filter(UFOsighting=> UFOsighting.state === inputValueState); 
}

if (inputValueCountry != "") {
  tableData = tableData.filter(UFOsighting=> UFOsighting.country === inputValueCountry); 
}

if (inputValueShape != "") {
  tableData = tableData.filter(UFOsighting=> UFOsighting.shape === inputValueShape); 
}

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the alien data from data.js
console.log(tableData);
autoPopulate(tableData);

function autoPopulate(tableData) {

    // Use d3 to automatically populate tableData by creating table rows
// and cells.

 tableData.forEach((alienT) => {
    // Creating table rows
    var row = tbody.append("tr");

    //Inserting objects
    Object.entries(alienT).forEach(([key, value]) => {

        // Creating cells
        var cell = row.append("td");
        cell.text(value);
    });
});

}