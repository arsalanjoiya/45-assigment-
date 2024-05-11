var magicians = ["Don", "Rameez", "Chris"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magicians);
//  show_magician(magicians)
console.log(magicians);
