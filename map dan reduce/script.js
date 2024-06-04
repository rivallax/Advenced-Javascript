//higher order function adalah:
//function yang beropoprasi pada function yang lain,
//baik itu digunakan dalam argument.maupun sebgai return value!



// Karakteristik Higher-Order Functions

// Menerima Fungsi sebagai Argumen: Higher-order functions dapat menerima satu atau lebih fungsi sebagai parameter.
// Mengembalikan Fungsi sebagai Hasil: Higher-order functions dapat mengembalikan fungsi lain sebagai hasil dari eksekusinya.

//Contoh Higher-Order Functions

// 1.Fungsi yang Menerima Fungsi sebagai Argumen

// 1. Fungsi yang Menerima Fungsi sebagai Argumen
// Contoh paling umum adalah metode array seperti (map, filter, dan reduce).


//    *map: Menerapkan fungsi ke setiap elemen dalam array dan mengembalikan array baru dengan hasil dari fungsi tersebut.
// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(doubled); // Output: [2, 4, 6, 8, 10]

//      *filter: Memfilter elemen dalam array berdasarkan kondisi yang ditentukan oleh fungsi dan mengembalikan array baru dengan elemen yang memenuhi kondisi tersebut.

//contoh 1
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4]

//contoh 2
const angka = [-1, 3, 6, 8, 7, 3, 2, 4,8,-2]
const newAngka = angka. filter (function (a){
    return a >= 3;
});
console.log(newAngka);
//       *reduce: Mengakumulasi nilai array menjadi satu nilai berdasarkan fungsi yang diberikan.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(total, num) {
//     return total + num;
// }, 0);

// console.log(sum); // Output: 15


