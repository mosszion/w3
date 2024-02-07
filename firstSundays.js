console.log('--------------------');


for (var year = 2014; year <= 2050; year++) {
    // Create a Date object for January 1st of the current year
    var d = new Date(year, 0, 1);

    // Check if January 1st is a Sunday (where Sunday corresponds to day index 0)
    if (d.getDay() === 0) {
        // Log a message if January 1st is a Sunday for the current year
        console.log("1st January is being a Sunday  " + year);
    }
}

// Log another separator to conclude the output
console.log('--------------------'); 