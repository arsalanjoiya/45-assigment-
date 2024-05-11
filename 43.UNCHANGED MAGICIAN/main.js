var magicians = ["Alice", "David", "chris"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magicians) {
        greatMagicians.push("".concat(magicians, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice());
console.log("Orignal magicians");
// show_magicians(magicians);
console.log("great magicians");
// show_magicians(greatMagicians);
console.log(magicians);
