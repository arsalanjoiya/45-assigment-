var car = 'subaru';
var age = 25;
var numbers = [1, 2, 3, 4,];
//**srting tests**
// test 1: Equality (true)
console.log("is car == 'subaru'? I predict true.");
console.log(car == 'subaru'); // true (case-insensitive)
// test 2: strict Equality (false)
console.log("is car === 'subaru'? I predict true.");
console.log(car === 'subaru'); // false (case-insensitive)
// test 3: Inequality (true)
console.log("is car !== 'subaru'? I predict true.");
console.log(car !== 'subaru'); // true 
// test 4: Inequality (false)
console.log("is car == 'subaru'? I predict false.");
console.log(car == 'subaru'); // false (case-insensitive)
//**Lowercase function tests**
// test 5: Lowercase conversion (true)
console.log("is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru'); // true (converted to lowercase)
// test 6: Equality (true)
console.log("is car === car.toLowerCase()? I predict false.");
console.log(car === car.toLowerCase()); // false (original value remains uppercase)
//**numarical tests**
// test 7: Equality (true)
console.log("is age == 25? I predict true.");
console.log(age == 25); // true
// test 8: inequality (false)
console.log("is age != 30? I predict true.");
console.log(age != 30); // true 
// test 9: great than (false)
console.log("is age > 30? I predict false.");
console.log(age > 30); // false 
// test 10: less than or equal (true)
console.log("is car <= 25? I predict true.");
console.log(age <= 25); // true 
//**logical Operator**
// test 11: AND (true)
console.log("is age > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30); // true (both conditions met)
// test 12: false (false)
console.log("is age > 30 || age < 18? I predict false.");
console.log(age > 30 || age < 18); // false (neither condition met)
//**array tests**
// test 13: in array (true)
console.log("is 3 in numbers? I predict true.");
console.log(3 in numbers); // true (checks for index existence)
// test 14: Not in array (true)
console.log("is 5 not in numbers? I predict true.");
console.log(5, not in numbers); // true (case-insensitive)
