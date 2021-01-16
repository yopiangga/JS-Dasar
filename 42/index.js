
// function buatObjectOrang(nama, pekerjaan, alamat){
//     var orang = {}

//         orang.nama = nama,
//         orang.pekerjaan = pekerjaan,
//         orang.alamat = alamat 

//     return orang;
// }

// orang1 = buatObjectOrang("Yopiangga", "Programmer", "Gambyok, Grogol, Kediri");

function Orang(nama, pekerjaan, alamat){
    this.nama = nama;
    this.pekerjaan = pekerjaan;
    this.alamat = alamat;
}


var orang1 = new Orang("Yopiangga", "Programmer", "Gambyok, Grogol, Kediri");