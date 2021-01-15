

var penumpang = [];

function tambahPenumpang(nama){
    var namaDuplikat = 0;
    for(var i = 0; i<=penumpang.length; i++){
        if(penumpang[i] == nama){
            namaDuplikat = 1;
        }
    }
    if(namaDuplikat == 1){
        console.log("Nama Sudah Masuk Angkot");
    } else {
        if(penumpang.length > 0){
            for(var i = 0; i<=penumpang.length; i++){
                if(penumpang[i] == undefined){
                    penumpang[i] = nama;
                    return;
                }
            }
            penumpang.push(nama);
    
        } else {
            penumpang.push(nama);
        }
    }
}

function hapusPenumpang(nama){
    var orang;
    var kosong = 0;
    for(var i = 0; i<penumpang.length; i++){
        if(penumpang[i] == undefined || penumpang[i] == null){
            kosong = kosong + 1;
        }
    }

    orang = penumpang.length - kosong;
    
    if(orang == 0){
        console.log("Penumpang masih kosong");
    } else {
        penumpang.forEach(function(e, i){
            if(e == nama){
                delete penumpang[i];
                return;
            } else {
                console.log("Nama penumpang salah");
            }
        })
    }
}
