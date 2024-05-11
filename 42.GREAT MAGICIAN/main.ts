let magicians: string[] = ["Don","Rameez","Chris"];

function make_great(magicians: string[]) {
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magicians);
//  show_magician(magicians)
console.log(magicians)