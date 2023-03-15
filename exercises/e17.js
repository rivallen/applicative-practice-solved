const people = [
  { name: "jon", age: 29 },
  { name: "peter", age: 30 },
  { name: "andrey", age: 22 },
];

export function minBy(array, cb) {
  let lowest = array[0];
  for (const person of array) {
    if (cb(person) < cb(lowest)) {
      lowest = person;
    }
  }
  return lowest;
}

export function maxBy(array, cb) {
  let highest = array[0];
  for (const person of array) {
    if (cb(person) > cb(highest)) {
      highest = person;
    }
  }
  return highest;
}

//export function minBy(array, cb) {
//  console.log(Math.min(people.age));
//}
//
//export function maxBy(array, cb) {
//  console.log(Math.max(people.age));
//}
