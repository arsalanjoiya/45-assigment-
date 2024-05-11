function make_car(manufacture: string, model: string, ...optians: [string, any][]) {
    let car = {manufacture, model };
    optians.forEach(([key,value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford","Fiesta", ["color", "blue"], ["sunroof", true]));

