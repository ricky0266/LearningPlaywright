//10March2026
// Exercise 1 : API Response Validation
// You receive an array of API response codes. Write code to:
// Check if ALL responses are successful (200–299)
// Find the FIRST non-success code
// Return all unique error codes
// let responses = [200, 201, 404, 500, 404, 200, 503];

let responses = [200, 201, 404, 500, 404, 200, 503];
if (responses.every(r => r >= 200 && r <= 299)) {
    console.log("All responses are successful")
} else {
    console.log("All responses are not successful")
}

console.log(responses.find(r => r < 200 || r > 300));


let uniqueErrors = [...new Set(
    responses)];

console.log(uniqueErrors); //Set stores all unique values

