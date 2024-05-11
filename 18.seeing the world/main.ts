//  seeing the world: think of at least five place in the world you'd like to visit.
//  store the location in the array. make sure the array is not in alphabetical order.
//  print your array in its original order.

import { reverse } from "dns/promises";

let place : string [] = ['cape town' ,'delhi','faislabad','bankok','ahmedabad']
console.log('original ' + place);

console.log('copy ' + [...place].sort());

console.log('original :' + place);

console.log('copy ' + [...place].sort().reverse());

console.log('copy ' + [...place].sort().reverse());

console.log('original :' + place.sort());

console.log('original :' + place.sort().reverse);
