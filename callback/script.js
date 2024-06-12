// Callback
//syncronous Callback
// function halo(nama){
//     alert(`hallo ${nama}`);
// }


// function tampilanPesan(Callback){
//     const nama = prompt(`masukan nama : `);
//     Callback(nama);
   

// }

// tampilanPesan(nama => alert(`Hallo, ${nama}`));

// const mhs =[
//     {
//        "nama" : "rivaldi akbar",
//         "nit" : "2223606",
//         "email": "rivaldy@gmail.com",
//         "jurusan": "rekayasa perangkat lunak"
//     },
//     {
//        "nama" : "rizal syahputra",
//         "nit" : "2313606",
//         "email": "rivaldy@gmail.com",
//         "jurusan": "rekayasa perangkat lunak"
//     },
//     {
//        "nama" : "rendi ghacor",
//         "nit" : "222336",
//         "email": "rivaldy@gmail.com",
//         "jurusan": "rekayasa perangkat lunak"
//     },
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i =0; i< 1000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');


// asynchronous Callback
// function getDataMahasiswa(url, succsess, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if( xhr.status === 200){
//                 succsess(xhr.response);
//             }else if (xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results =>{
//     const mhs= JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('selesai');