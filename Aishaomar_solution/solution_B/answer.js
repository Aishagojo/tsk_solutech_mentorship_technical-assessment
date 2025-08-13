
Pseudocode:

// FUNCTION getTopThree(services):
//     1. Make a copy of services list
//     2. Sort the copy so that highest rating comes first
//     3. Take the first 3 items from the sorted copy
//     4. RETURN those 3 items



 // This function takes a list of services with ratings
// and returns the top 3 services sorted by highest rating first
function getTopThree(services) {
  // Step 1: Make a copy of the list
  let listCopy = services.slice();

  // Step 2: Sort the list so highest rating comes first
  listCopy.sort(function(a, b) {
    return b.rating - a.rating;
  });

  // Step 3: Take the first 3 items
  let topThree = listCopy.slice(0, 3);

  return topThree;
}

// Example input
let services = [
  { name: "Tutoring", rating: 4.6 },
  { name: "Food Delivery", rating: 4.9 },
  { name: "Tech Support", rating: 4.3 },
  { name: "Child Care", rating: 4.8 }
];

// Run the function and show result
console.log(getTopThree(services));




//Explanation in  English:

//First, I copied the list so I don’t change the original.

//Then, I sorted the copy from highest rating to lowest rating.

//Finally, I picked only the first three services from the sorted list — these are the top 3.



// RUN THIS FILE TO SEE THE OUTPUT
// GO THE SOLUTION B DIRECTORY AND RUN: node answer.js
// YOU SHOULD SEE THE TOP 3 SERVICES WITH HIGHEST RATINGS
//OUTPUT:

//[
 // { name: 'Food Delivery', rating: 4.9 },
 // { name: 'Child Care', rating: 4.8 },
 // { name: 'Tutoring', rating: 4.6 }  ]//


