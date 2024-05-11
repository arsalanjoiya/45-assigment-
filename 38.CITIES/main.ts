// function describe_city(nameOfCity: string, country: string = "pakistan") {
//     return `${nameOfCity} is in ${country}`;
// };

// let city1 = describe_city("South africa,cape town");
// let city2 = describe_city("India,Larkana");
// let city3 = describe_city("Pakistan, Hyderabad");
// let city4 = describe_city("Dubai", "UAE");

// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(city4);

function describe_city(nameOfCity: string, country: string = "pakistan") {
    return `${nameOfCity} is in ${country}`;
};

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");