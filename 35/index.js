

var students = [];

students = [
    ["001", "Yopiangga1", "D4 TIA", "KP"],
    ["002", "Yopiangga2", "D4 TIB", "PKP"],
    ["003", "Yopiangga3", "D4 TIC", "KK"],
];

// for(var i=0; i<students.length; i++){
//     for(var j=0; j<4; j++){
//         console.log(students[i][j] + " ");
//     }
// }

for(var i=0; i<students.length; i++){
    console.log(students[i].join());
}