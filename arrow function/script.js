    // ARROW FUNCTION ADALAH
//  cara menulis fungsi di JavaScript yang lebih ringkas dibandingkan dengan fungsi tradisional. Arrow function diperkenalkan di ECMAScript 6 (ES6) dan memiliki sintaks yang lebih singkat, terutama bermanfaat dalam konteks fungsi anonim dan callback. Berikut adalah penjelasan lebih lengkap mengenai arrow function, cara menulis, serta menjalankannya:

//********************************************************** */

// 1. Sintaks Arrow Function
//Arrow function ditulis menggunakan tanda panah (=>) setelah parameter fungsi.

//contoh:
// Fungsi tradisional
// function sum(a, b) {
//     return a + b;
// }

// Arrow function
// const sum = (a, b) => {
//     return a + b;
// };

// //belajar arrow function:
// const Tampilnama = (nama,waktu ) => {
//     return `selamat ${nama} , ${waktu}`
// };
// console.log(Tampilnama('rivaldi','malam'));


//implisite return 
// Jika hanya ada satu baris kode, kita bisa menghilangkan kurung kurawal dan return
// contoh 1:
// const namaHewan = nama => `ini ${nama}`;
// console.log('kangguru','jerapah');

// contoh 2:
// const sum = (a, b) => a + b;
// console.log(sum('a','b'));



//   CONTOH 3:
// let mahasiswa = ['rivaldi akbar','elgin al-wafi','ucok karlos'];

        // dengan menggunakan function tradisional(biasa)
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);


        //dengan menggunakan arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.table(jumlahHuruf);

        // ini sebagai object
// let jumlahHuruf = mahasiswa.map(nama =>({nama: nama, jmlHuruf:nama.length}));
 
// console.table(jumlahHuruf);

//********************************************************** */

//********************************************************** */

//Constructor Function
// const Mahasiswa = function () {
//     this.nama = "rivaldi";
//     this.umur = '17';
//     this.sayHello = function(){
//         console.log(`hallo, saya ${this.nama}, dan saya ${this.umur} tahun`);
//         // output
//     }
// }

// const rivaldi = new Mahasiswa();


//object literal
