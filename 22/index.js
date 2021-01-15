


var i;

for(i=1; i<=10; i++){
    if(i <= 6){
        console.log("Angkot No. " + i + " beroperasi dengan baik.");
    } else {
        if(i==8){
            console.log("Angkot No. " + i + " sedang lembur");
        } else {
            console.log("Angkot No. " + i + " sedang tidak beroperasi.");
        }
    }
}