
let resultsData = [];
let resultCount = 0;
let totalResults = 0;
let minResults = 0;
let maxResults = 0;
let averageResults = 0;

// calculate the results and return a list with the first number, second number, operation, and the computation result.
function calculate(a, b, op) {
    if (isNaN(a) || isNaN(b)) {
        return [a, op, b, "Wrong Input Type"];
    }

    // I could pass an object for the table.

    let result = 0;
    switch (op) {
        case "+":
            result = Number(a) + Number(b);
            return [a, op, b, result];
        case "-":
            result = Number(a) - Number(b);
            return [a, op, b, result];
        case "*":
            result = Number(a) * Number(b);
            return [a, op, b, result];
        case "/":
            result = Number(a) / Number(b);
            return [a, op, b, result]
        case "%":
            result = Number(a) % Number(b);
            return [a, op, b, result];
        default:
            return [a, op, b, "Computation Error"]
    }
}

// update the results list and return a list of the current results information
function updateResultsList(res) {
    // no change can be made, pass the same array unchanged
    if (isNaN(res)) {
        return resultsData;
    }

    // first element in the array, so use this as the first minimum
    if (resultCount < 1) {
        minResults = res;
    }

    resultCount += 1;

    // set the current minimum
    if (res < minResults) {
        minResults = res;
    }

    // set the current maximum
    if (res > maxResults) {
        maxResults = res;
    }

    // add to the total result
    totalResults += res;

    // calculate the current average
    averageResults = totalResults / resultCount;

    return [minResults, maxResults, averageResults, totalResults];
}

function resultsInfoTable(resData) {
    document.write("<h2>Results Summary:</h2>");
    document.write("<table>");

    // first table row
    document.write("<tr>");
    document.write("<th> Min </th>");
    document.write("<th> Max </th>");
    document.write("<th> Avg </th>");
    document.write("<th> Total </th>");
    document.write("</tr>");

    // second table row
    document.write("<tr>");
    document.write("<td>" + resData[0] + "</td>");
    document.write("<td>" + resData[1] + "</td>");
    document.write("<td>" + resData[2] + "</td>");
    document.write("<td>" + resData[3] + "</td>");
    document.write("</tr>");

    document.write("</table>");
}

// start creating the table
document.write("<h2>Calculation Results:</h2>");
document.write("<table>");           

// header table row
document.write("<tr>");
document.write("<th> Number 1 </th>");
document.write("<th> Op </th>");
document.write("<th> Number 2 </th>");
document.write("<th> Result </th>");
document.write("</tr>");

while (true) {
    let num1 = prompt("First Number? [CANCEL to see results]");

    // show the results info table only after exiting
    if (num1 == null) {
        document.write("</table>");             // finally finish the table
        resultsInfoTable(resultsData);
        break;
    }

    let num2 = prompt("Second Number?");

    if (num2 == null) {
        document.write("</table>");             // finally finish the table
        resultsInfoTable(resultsData);
        break;
    }

    let op = prompt("What operation? (+, -, *, /, %)");

    if (op == null) {
        document.write("</table>");             // finally finish the table
        resultsInfoTable(resultsData);
        break;
    }

    calculation = calculate(num1, num2, op);
    console.log(calculation);

    alert("Calculation completed . . . ");

    // feed the computation result into the function to update the results
    resultsData = updateResultsList(calculation[3]);
    console.log(resultsData);

    // 'data' table row
    document.write("<tr>");
    document.write("<td>" + calculation[0] + "</td>");
    document.write("<td>" + calculation[1] + "</td>");
    document.write("<td>" + calculation[2] + "</td>");
    document.write("<td>" + calculation[3] + "</td>");
    document.write("</tr>");
}