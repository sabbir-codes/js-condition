let month = 10;

if (month === 12 || month === 1 || month === 2) {
    console.log("Winter");
} else if (3 <= month && month <= 5) {
    console.log("Summer");
} else if (6 <= month && month <= 9) {
    console.log("Monsoon");
} else if (10 <= month && month <= 11) {
    console.log("Autumn");
} else {
    console.log("Invalid month number");
}