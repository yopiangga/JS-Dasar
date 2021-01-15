
var pilihan  = prompt("Pilih : gajah, semut, orang");

var comp = Math.random();


if(comp < 0.34){
    comp = 'gajah';
} else if(comp >= 0.34 && comp < 0.67){
    comp = 'semut';
} else {
    comp = 'orang';
}


var hasil;

if(pilihan == comp){
    hasil = "SERI!";
} else if(pilihan == 'gajah'){
    if(comp == 'semut'){
        hasil = 'Kalah';
    } else {
        hasil = 'Menang';
    }
} else if(pilihan == 'semut'){
    if(comp == 'gajah'){
        hasil = 'Menang';
    } else {
        hasil = 'Kalah';
    }
} else if(pilihan == 'orang'){
    if(comp == 'gajah'){
        hasil = 'Kalah';
    } else {
        hasil = 'Menang';
    }
} else {
    hasil = "Pilihan anda salah";
}


alert("Komputer : " + comp + "\nAnda : " + pilihan + "\nHasil : " + hasil);