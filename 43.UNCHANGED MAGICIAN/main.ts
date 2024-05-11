let magicians: string[] =["Alice","David","chris"];
function make_great(magicians:string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magicians => {
        greatMagicians.push(`${magicians} the Great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice());
console.log("Orignal magicians");
// show_magicians(magicians);
console.log("great magicians");
// show_magicians(greatMagicians);
console.log(magicians);