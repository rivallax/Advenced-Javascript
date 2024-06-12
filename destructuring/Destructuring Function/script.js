//destructuring

// function penjumlahanPerkalian(a,b){
//     return [a + b, a * b];
// }

// const [jumlah,kali]= penjumlahanPerkalian(2,5);
// console.log(jumlah,kali);


// function kalkulasi(a, b){
//     return [a + b, a * b, a / b];
// }

// const [tambah,kali,bagi = 'tidak ada!']= kalkulasi(2,3);
// console.log(kali);

//  --> object destructuring
// function kalkulasi(a,b){
//     return{
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a/b
//     }
 
// }

// const {bagi,tambah,kali,kurang} = kalkulasi(3,3);
// console.log(kurang,bagi,tambah,kali);


// -->destructuring function arguments

// const mhs1 = {
//     nama:'rivaldi akbar',
//     umur:'17',
//     email:'rivaldiakbar@gmail.com',
//     jurusan :{
//         b:'REKAYASA PENGKAT lUNAK',
//         a:'REKAYASA PENGKAT GAME',
//         c:'REKAYASA PENGKAT SOFTWARE',

//         }
// }
// const mhs2 = {
//     nama:'deden',
//     umur:'17',
//     email:'rivaldiakbar@gmail.com',
//     jurusan :{
//         b:'REKAYASA PENGKAT lUNAK',
//         a:'REKAYASA PENGKAT GAME',
//         c:'REKAYASA PENGKAT SOFTWARE',
 
//          }
// };



//cara 1
// function cetakMhs(mhs){
//     const jurusanB = mhs.jurusan.b;
//     return `hallo nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun jurusan saya ${ jurusanB }`;
// }
// console.log(cetakMhs(mhs1));


// cara 2 
// function cetakmhs({nama,umur,jurusan:{a,b,c}}){
//     return `hallo,nama saya ${nama}, saya berumur ${umur} tahun jurusan saya ${b}.`;
// }
// console.log(cetakmhs(mhs1));
// console.log(cetakmhs(mhs2));




const Taruna ={
    nama:'muhammad rivaldi akbar',
    kelas:'11 RPL',
    umur: 17,
    jurusan:{
        a:'Rekayasa Perangkat Lunak',
        b:'Teknik informatika'
    }


};

function cetakNama({nama,kelas,umur,jurusan:{a,b}}){
    const jurusan = `${a,b}`
    return `hallo nama saya ${nama}, kelas ${kelas}, umur ${umur} dan jurusan saya adalah ${a}`
}

console.log(cetakNama(Taruna));

