// As an SDET, you receive an API response status code and need to classify it. Write a JavaScript program using a switch statement that takes an HTTP status code stored in a variable and prints the category and a QA-friendly message.


let statusCode = 200;
switch (true) {
    case (statusCode = 200):
        console.log("PASS - OK: Request successful");
        break;

    case (statusCode = 201):
        console.log("PASS - Created: Resource created successfully");
        break;

    case (statusCode = 301):
        console.log("WARNING - Moved Permanently: URL has changed");
        break;

    case (statusCode = 400):
        console.log("FAIL - Bad Request: Check request payload");
        break;

    case (statusCode = 401):
        console.log("FAIL - Unauthorized: Check auth token");
        break;

    case (statusCode = 403):
        console.log("FAIL - Forbidden: Insufficient permissions");
        break;

    case (statusCode = 404):
        console.log("FAIL - Not Found: Check endpoint URL");
        break;

    case (statusCode = 500):
        console.log("FAIL - Internal Server Error: Backend issue");
        break;

    default:

        console.log("UNKNOWN - Unhandled status code");
}