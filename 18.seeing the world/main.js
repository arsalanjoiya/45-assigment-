"use strict";
//  seeing the world: think of at least five place in the world you'd like to visit.
//  store the location in the array. make sure the array is not in alphabetical order.
//  print your array in its original order.
Object.defineProperty(exports, "__esModule", { value: true });
let place = ['cape town', 'delhi', 'faislabad', 'bankok', 'ahmedabad'];
console.log('original ' + place);
console.log('copy ' + [...place].sort());
console.log('original :' + place);
console.log('copy ' + [...place].sort().reverse());
console.log('copy ' + [...place].sort().reverse());
console.log('original :' + place.sort());
console.log('original :' + place.sort().reverse);
