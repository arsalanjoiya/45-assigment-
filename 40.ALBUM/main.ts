function myAlbum(artistName: string, albumTitle: string){
    return{artistName, albumTitle}
}

let album1 = myAlbum("Ali", "Rang-e-Mohabat");
let album2 = myAlbum("Madad","Rosahan andhera");
let album3 = myAlbum("Ayaz", "Muasam-e-DIl");

console.log(album1);
console.log(album2);
console.log(album3);

function myAlbum2(artistName: string, albumTitle: string, numberOfTracks: number){
    return{artistName, albumTitle, numberOfTracks}
}

let album4 = myAlbum2("Ali", "dil hai", 30);
let album5 = myAlbum2("Madad","ajeeb kahani" 25);
let album6 = myAlbum2("bilal abbas", "Ish murshid" );

console.log(album4);
console.log(album5);
console.log(album6);





