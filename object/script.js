// cara untuk membuat object pada javascript

// ********************************1. object literal******************************//

// let mahasiswa1 = {
//              // property( nama: 'satrio', energi: 10,  (object))
//     nama: 'satrio',
//     energi: 10,
//                //method (function)
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     // property( nama: 'satrio', energi: 10,  (object))
//     nama: 'brian',
//     energi: 15,
//     //method (function)
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     }
// }

// ********************************1. object literal******************************//


//********************************2. Function Declaration******************************//

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain!`);
//     }
//     return mahasiswa;

// }

// let nanang = Mahasiswa('nanang', 10);
// let bagas = Mahasiswa('bagas', 20);

//********************************2. Function Declaration******************************//


//********************************3. Constructor Function******************************//

//          --menggunakan kyword new

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     }
//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain!`);
//     }
//     return this;

// }

// let nanang = new Mahasiswa('nanang', 10);
// let bagas = new Mahasiswa('bagas', 20);

//********************************3. Constructor Function******************************//


//******************************** 4. Object.create()******************************//


//rules -> ini Paling Efektif

// const rulesMahasiswa = {

//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain!`);
//     },
//     tidur : function(jam) {
//         this.energi += jam * 2;
//         console.log(`hallo ${this.nama}, selamat tidur!`);
//     }
// }

// // teknik Fungtion Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(rulesMahasiswa);
//     //           Object.create(rulesMahasiswaa);
//     // membuat object baru. bedanya kita bisa nyimpen parameter di dalamnya ...parameternya mengacu ke pernt objectnya yang berisi method method yang di butuhkan
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;

// }

// let nanang = Mahasiswa('nanang', 10);
// let bagas = Mahasiswa('bagas', 20);


//******************************** 4. Object.create()******************************//


//********************************object prototype******************************//
//object prototype
//prototype inheritens

// function Mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi){
//     this.energi += porsi;
//    return `hallo ${this.nama}, selamat makan!`
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `hallo ${this.nama}, selamat main!`
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//    return `hallo ${this.name}, selamat tidur !`
// }

// let rival = new Mahasiswa('rival',10);


//********************************object prototype******************************//


//********************************object versi Class******************************//
// versi Class
// ini paling gampang di pahami namun kmu harus tau dasar dari [proyotype]
// class Mahasiswa{
//     constructor(nama,energi){

//         this.nama=nama;
//         this.energi=energi;
//     }


//     makan(porsi){
//     this.energi += porsi;
//     return `hallo ${this.nama}, selamat makan!`;
//     }

//     main(jam){
//         this.energi -= jam;
//         return `hallo ${this.nama}, selamat main!`;
//     }

//     tidur(jam){
//         this.energi += jam * 2;
//         return `hallo ${this.nama}, selamat tidur! `;
//     }
    
// }

// let rival = new Mahasiswa('rival', 10);
// let elgin = new Mahasiswa('elgin',10);

//********************************Object Versi Class******************************//

const aktifitas = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`hallo ${this.nama}, selamat makan!`);
    },
    sekolah: function(waktu){
        this.energi -= waktu;
        console.log (`hallo ${this.nama}, terimakasih sudah belajar`);
    },
    bermain : function(jam){
        this.energi -= jam;
        console.log(`hallo ${this.nama}, hafun bermainnya!`);
    },
    tidur  : function(waktu){
        this.energi += waktu * 2;
        console.log(`hallo ${this.nama}, selamat bermain`);  
    },
    mandi : function(waktu){
        this.energi += waktu;
        console.log(`hallo ${this.nama}, selamat mandi`);
    }
}

function anakTK(nama,energi){
    let anakTK = Object.create(aktifitas);

    anakTK.nama = nama;
    anakTK.energi =energi;
    
    return anakTK;
}


let rivaldi = new anakTK('rival',20);


 