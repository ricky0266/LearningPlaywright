//Step1 ->Defination of function
function getUserStatus() {
    //var status_code = undefined; -> not shown to you.
    console.log(status_log);
    var status_log = "Active";
    console.log(status_log);


}
//Step 2-> Calling of the function
getUserStatus();

//Note: var is function-scoped,so status is hoisted to
// the top of getUserStatus(),Not the global scope.