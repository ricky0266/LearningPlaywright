// As an SDET, you receive an API response status code and need to classify it. Write a JavaScript program using a switch statement that takes an HTTP status code stored in a variable and prints the category and a QA-friendly message.


let statusCode = 401;
if (statusCode = 200) {
    console.log("PASS - OK: Request successful")
}

else if (statusCode = 201) {
    console.log("PASS - Created: Resource created successfully")
}

else if (statusCode = 301) {
    console.log("WARNING - Moved Permanently: URL has changed")
}

else if (statusCode = 400) {
    console.log(FAIL - Bad Request: Check request payload")
}

else if (statusCode = 401) {
    console.log("FAIL - Unauthorized: Check auth token")
}

else if (statusCode = 403) {
    console.log("FAIL - Forbidden: Insufficient permissions")
}

else if (statusCode = 404) {
    console.log("FAIL - Not Found: Check endpoint URL")
}

else if (statusCode = 500) {
    console.log("FAIL - Internal Server Error: Backend issue")
}

else {
    console.log("UNKNOWN - Unhandled status code")
}