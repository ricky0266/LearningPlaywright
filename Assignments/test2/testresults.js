// After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

for (testResults = 1; testResults <= 100; testResults++) {
    if (testResults === "pass")

        console.log(testResults)
}


//In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.
//In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.
//States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
// Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).


//As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

//As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4


//As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.

//In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

//Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.


//Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).

//Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

//Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.





