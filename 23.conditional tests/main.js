"use strict";
let cars = 'subaru';
// test 1: equality comparison (true)
console.log("is car == 'subaru'? I predict true.");
console.log(cars == 'subaru'); //true
// test 2: equality comparison (true)
console.log("is car === 'subaru'? I predict true.");
console.log(cars === 'subaru'); //true
// test 3: equality comparison (false)
console.log("is car != 'subaru'? I predict true.");
console.log(cars != 'subaru'); //false
// test 4: strict equality comparison (fulse)
console.log("is car !== 'subaru'? I predict true.");
console.log(cars !== 'subaru'); //fulse
// test 5: less then comparison (fulse)
console.log("is car < 'subaru'? I predict true.");
console.log(cars < 'subaru'); //fulse (lexicographic comparicon)
// test 6: great then comparison (true)
console.log("is car > 'subaru'? I predict true.");
console.log(cars > 'subaru'); //true (lexicographic comparicon)
// test 7: less then or equal comparison (true)
console.log("is car <= 'subaru'? I predict true.");
console.log(cars <= 'subaru'); //true
// test 8: great then or equal comparison (true)
console.log("is car >= 'subaru'? I predict true.");
console.log(cars >= 'subaru'); //true
// test 9: checking truthiness (true)
console.log("is car? I predict true.");
console.log(cars); //true (non-empty string is truthy)
// test 10: checking falsiness (false)
console.log("is !car? I predict true.");
console.log(!cars); //false (negation of a truthy value)
