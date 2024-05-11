function make_car(manufacture, model) {
    var optians = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optians[_i - 2] = arguments[_i];
    }
    var car = { manufacture: manufacture, model: model };
    optians.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
