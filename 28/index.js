

var sKubusA = 8;
var sKubusB = 3;

function volumeKubus(sisi){
    var volume;
    volume = sisi * sisi * sisi;

    return volume;
}

var vKubusA = volumeKubus(sKubusA);
var vKubusB = volumeKubus(sKubusB);

var totalVolume = vKubusA + vKubusB;

console.log(totalVolume);