
var kumpulanAngkot = [];

kumpulanAngkot[0] = new AngkotDeclaration("Yopiangga0", "Kediri - Nganjuk", 0);
kumpulanAngkot[1] = new AngkotDeclaration("Yopiangga1", "Kediri - Nganjuk", 0);

function AngkotDeclaration(sopir, trayek, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = [];
    this.kas = kas;
}

function tambahPenumpang(namaAngkot, namaPenumpang){
    var namaDuplikat = 0;
    for(var i = 0; i<=kumpulanAngkot[namaAngkot].penumpang.length; i++){
        if(kumpulanAngkot[namaAngkot].penumpang[i] == namaPenumpang){
            namaDuplikat = 1;
        }
    }
    if(namaDuplikat == 1){
        console.log("Nama Sudah Masuk Angkot");
    } else {
        if(kumpulanAngkot[namaAngkot].penumpang.length > 0){
            for(var i = 0; i<=kumpulanAngkot[namaAngkot].penumpang.length; i++){
                if(kumpulanAngkot[namaAngkot].penumpang[i] == undefined){
                    kumpulanAngkot[namaAngkot].penumpang[i] = namaPenumpang;
                    return;
                }
            }
            kumpulanAngkot[namaAngkot].penumpang.push(namaPenumpang);
    
        } else {
            kumpulanAngkot[namaAngkot].penumpang.push(namaPenumpang);
        }
    }
}


function hapusPenumpang(namaAngkot, namaPenumpang){
    var banyakOrang;
    var kosong = 0;
    var statusOrang = 0;
    for(var i = 0; i<kumpulanAngkot[namaAngkot].penumpang.length; i++){
        if(kumpulanAngkot[namaAngkot].penumpang[i] == undefined || kumpulanAngkot[namaAngkot].penumpang[i] == null){
            kosong = kosong + 1;
        }
    }

    banyakOrang = kumpulanAngkot[namaAngkot].penumpang.length - kosong;
    
    if(banyakOrang == 0){
        console.log("Penumpang masih kosong");
    } else {
        for(var i=0; i<kumpulanAngkot[namaAngkot].penumpang.length ; i++){
            if(kumpulanAngkot[namaAngkot].penumpang[i] == namaPenumpang){
                statusOrang = i;
            }
        }

        if(statusOrang){
            kumpulanAngkot[namaAngkot].kas = kumpulanAngkot[namaAngkot].kas + 10000;
            delete kumpulanAngkot[namaAngkot].penumpang[statusOrang];
        } else {
            console.log("Nama Penumpang Salah");
            console.log(statusOrang);
        }
    }
}
