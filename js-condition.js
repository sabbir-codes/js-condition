// combine everything from this module (comparison, logical operators, if-else, ternary).

let username = true;
let password = true;
let isAdmin = false;

if (username && password) {
    console.log("Login Successful");
    if (isAdmin) {
        console.log("Welcome Admin!");
    } else if (!isAdmin) {
        console.log("Welcome User!");
    } else { console.log("Unknown User."); }
} else {
    console.log("Invalid Username or Password");
}