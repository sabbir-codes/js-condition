let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    if (isLoggedIn && isAdmin) {
        console.log("Admin Dashboard");
    } else {
        console.log("User Dashboard");
    }
} else {
    console.log("Please Login");
}