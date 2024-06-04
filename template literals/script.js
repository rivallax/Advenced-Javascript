//**************************Template Literal*****************************\\

//* menggunakan (``) back tick
//* Multi-line String
//* Embedded Expression
//* HTML Fragments
//* Expression Interpolation
//* Tagged Tempplate

//contoh 
// `string text baris 1
// string text baris 2                                 //multi-line string
// string text baris 3`


//`string text ${expression} string text`              //embedded expression

//tag `string text ${expression} string text`          //tagged template



//      Template Literals/ template string
// const nama ='rivaldi';
// const umur =17;
// // console.log(`nama saya ${nama}, dan saya ${umur} tahun`);
// console.log('hallo nama saya ' + nama + ' umur saya ' +umur+ ' tahun')


// 1. EMBEDDED EXPRESSIONS 
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);

// const x = 11;
// console.log(`${(x % 2 ==0 ) ? 'genap':'ganjil'}`);


//        HTML fragment
// const mhs = {
//     nama : 'rivaldi akbar',
//     umur : '17 tahun',
//     nit  : '2223606',
//     email : 'rivaldiakbar@gmail.com'
// };

// const el = `<div class = "mhs">
//     <h1 class="nama">${mhs.nama}</h1>
//     <span class="umur">${mhs.umur}</span>
//     <br>${mhs.nit}</br>

// </div>`


//2. lOOPING
// const mhs = [
//     {
//         nama:'rivaldi akbar',
//        email:'rivlasdf@yahoo.com'
//     },
//     {
//         nama:'koswara denzz',
//        email:'koswara@yahoo.com'
//     },
//     {
//         nama:'mukhti asep',
//        email:'mukhti@yahoo.com'
//     },
//     {
//         nama:'elgin jemping',
//        email:'elgin@yahoo.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>      //mempetakan sebuah li yang isi nya data baru
// <li class= "nama">${m.nama}</li>
// <li class= "nama">${m.email}</li>
// </ul>`).join('')}                   //method join menghilangkan kutip di atas
// </div>`

// document.body.innerHTML = el;


//3. Conditionals
//ternary

// const lagu = [{
//     judul :"tetap dalam jiwa",
//     penyanyi : "isyana syaraswati",
//     feat: "Rayi Putra"
// },
// {judul :"berondong tua",    //menambahkan lopping
//     penyanyi : "isyana syaraswati",
   
// },
// {judul :"dear god",
//     penyanyi : "avenged sevendfold",
   
// },
// ]

// const el =`<div class="lagu">
//     ${lagu.map(lagu =>`<ul> ////mempetakan sebuah li yang isi nya data baru (menambahkan lopping)
//     <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})`: ''}</li>

//     </ul>`).join('')}    //join menghilangkan kutip di atas
// </div>`


// document.body.innerHTML = el;


//4. Nested
// HTML Fragments bersarang


const mhs ={
    nama: 'rivaldi akbar',
    semester:'11',
    mapel:[
        'Rekayasa Perangkat Lunak',
        'Teknik Permesinan',
        'Teknik Sepeda Motor',
        'Nahkoda Kapal Niaga'
    ] 
};

function cetakMataKuliah(mapel){
    return `
    <ol>
        ${mapel.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs"> 
    <h2>${mhs.nama}</h2>
    <span class="semester">Kelas :${mhs.semester}</span>
    <h4 >mata pelajaran : </h4>
    ${cetakMataKuliah(mhs.mapel)}
</div>`;
document.body.innerHTML = el;






