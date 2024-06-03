// 2.1 EXECUTION CONTEXT,HOISTING & SCOPE

//perbedan console dan return javascript

//          console.log()
//     Tujuan: Digunakan untuk menampilkan output atau informasi ke konsol peramban (browser console).
//     Penggunaan: Sering digunakan untuk debugging atau memeriksa nilai variabel dan status kode selama pengembangan.
//     Efek: Tidak mengubah alur eksekusi program. Hanya mencetak informasi ke konsol dan tidak memengaruhi nilai kembalian dari fungsi.

//      return
//       Tujuan: Digunakan untuk mengembalikan nilai dari sebuah fungsi dan menghentikan eksekusi fungsi tersebut.
//       Penggunaan: Memberikan hasil akhir dari eksekusi fungsi kepada pemanggil fungsi.
//       Efek: Menghentikan eksekusi fungsi pada titik dimana return ditemui dan mengembalikan nilai yang ditentukan.


//contoh :
// var nama = 'rival';
// console.log(nama);


// console.log(nama);           //tampilannya undefined
// var nama = 'rival';

//***creation phase

// creation phase pada Global Context(fase kreasi pada global konteks)
// membuat nama var = undefined
//nama function = fn()

//***hoisting

//objek window = global object
//dan javascript mendefinisikan this = window

//lalu..
//execution phase


// var nama = 'rival';
// var umur = '17';
// //jika variabel di isi dengan undifined

// console.log(Hallo())
// function Hallo(){
//    return(`hallo saya ${nama}, saya ${umur} tahun`);
// }

//function membuat local execution context
//yang di dalam nya terdapat creation dan execution phase
//window
//arguments
//lalu di dalamnya ada hoisting 


// var nama = 'rivaldi';
// var username = "rivaldy@gmail.com";

// function cetakURL(username){
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));


//closure 

//"closure merupakan kombinasi antara function dan lingkungan leksikal(lexcial scope) di dalam function tersebut"


// Lexical Scope

function init (){
    let nama =  'rivaldi';     //local variable
    function tampilanNama(){    //inner function(closure*)
        console.log(nama);      //akses ke parent variable
    }
    tampilanNama();

}
init();
