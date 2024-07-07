// Code your solution here
// Initialize the drivers data
const drivers = [
    { name: 'Sally', hometown: 'New York' },
    { name: 'Bob', hometown: 'Los Angeles' },
    { name: 'Alice', hometown: 'San Francisco' },
    { name: 'Derek', hometown: 'Seattle' },
    { name: 'Samantha', hometown: 'New York' }
];

// Function to find matching drivers by name (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver =>
        driver.toLowerCase() === name.toLowerCase()
    );
}

// Function to find drivers whose names start with provided letters (case insensitive)
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
        driver.toLowerCase().startsWith(letters.toLowerCase())
    );
}

// Function to find drivers whose name matches exactly (case insensitive)
function matchName(drivers, name) {
    return drivers.filter(driver =>
        driver.name.toLowerCase() === name.toLowerCase()
    );
}

// Example usage
console.log("Drivers matching 'Sally':", findMatching(['Sally', 'Bob', 'Alice', 'Derek', 'Samantha'], 'sally'));
console.log("Drivers with names starting with 'Sa':", fuzzyMatch(['Sally', 'Bob', 'Alice', 'Derek', 'Samantha'], 'sa'));
console.log("Driver object matching 'Sally':", matchName(drivers, 'Sally'));
