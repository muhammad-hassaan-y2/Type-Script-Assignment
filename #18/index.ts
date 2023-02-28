// Define an array of 5 places to visit
let placesToVisit = ['Japan', 'New Zealand', 'Brazil', 'Greece', 'Iceland'];

// Print the original array
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying it
console.log("Alphabetical order:");
console.log([...placesToVisit].sort());

// Show that the array is still in the original order
console.log("Still in original order:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without modifying it
console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in the original order
console.log("Still in original order:");
console.log(placesToVisit);

// Reverse the order of the array
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);

// Reverse the order of the array again to get the original order back
placesToVisit.reverse();
console.log("Original order again:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order:");
console.log(placesToVisit);
