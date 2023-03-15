import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  let target = 0;
  let targetIndex = 0;
  const discoveryYears = data.asteroids.map(
    (asteroid) => asteroid.discoveryYear
  );

  discoveryYears
    .map(
      (mappedYear) =>
        discoveryYears.filter((year) => year === mappedYear).length
    )
    .map((value, index) => {
      if (value > target) {
        target = value;
        targetIndex = index;
      }
    });

  return discoveryYears[targetIndex];
}

// failed initial attempt
//export function getGreatestDiscoveryYear(data) {
//  let mf = 1;
//  let m = 0;
//  let item;
//  for (let i = 0; i < data.asteroids.discoveryYear.length; i++) {
//    for (let j = i; j < data.asteroids.discoveryYear.length; j++) {
//      if (data.asteroids.discoveryYear[i] == data.asteroids.discoveryYear[j])
//        m++;
//      if (mf < m) {
//        mf = m;
//        item = data.asteroids.discoveryYear[i];
//      }
//    }
//    m = 0;
//  }
//  return item;
//}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
