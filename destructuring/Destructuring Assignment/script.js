//Destructuring Variable /Destructuring Asignment


// destructuring Assignment merupakan sebuah Expression pada javascript yang membuat kita dapat membongkar nilai dari array atau property dari object kedalam variabel yang terpisah.(unpacking).


//    -->      Destructuring Array
// const perkenalan = ['hallo', 'nama','saya','rival'];

// const [salam, satu, dua, tiga] = perkenalan ;
// console.log(salam,dua,tiga); //nama saya rivaldi


//    -->      skipping items
// const  [salam, , , nama ] = perkenalan;
// console.log(nama); //rival

//    -->      swap items
// let a = 1;
// let no = 2;

// console.log(a);
// console.log(no);
// [a,no] =[no,a]
// console.log(no);
// console.log(a);

//    -->      return value pada function
// function coba(){
//     return[1,2];
// }

// const [a,b] = coba();
// console.log(b)

//    -->      rest parameter (...values)
// const [a,...values] = [1, 2, 3, 4, 5, 6,]

// console.log(a);
// console.log(3);
// console.log(values);



//    -->      Destructuring Object
// const mhs = {
//     nama: 'rivaldi akbar',
//     umur: '17'

// }

// const {nama,umur} = mhs;
// console.log(umur,nama);

//    -->      Assignment tanpa deklarasi object
// ({nama,umur} = {
//     nama: 'rivaldi akbar',
//     umur: '17'});

// console.log(nama,umur);


//    -->      Assignment ke variable baru
// const mhs = {
//     nama: 'rivaldi akbar',
//     umur: '17'

// }

// const {nama:a ,umur:b} = mhs; //Assignment ke variable baru
// console.log(b,a);


//     -->      Memberikan Default Value
// const mhs = {
//     nama: 'rivaldi akbar',
//     umur: '17',
// }

// const {nama,umur, email ='email@default.com'} = mhs;
// console.log(umur,nama,email);


//      -->      Memberikan nilai Default Value + assign ke variable baru
// const mhs = {
//     nama: 'rivaldi akbar',
//     umur: '17',
// }

// const {nama:n,umur:u, email:e ='email@default.com'} = mhs;
// console.log(u,n,e);

//      -->      Rest Parameter
// const mhs ={
//     nama: 'rivaldi akbar',
//     umur: '17',
//     email: 'rivaldi@gmail.com'
// }

// const {nama, ...value } =mhs;
// console.log(nama);  //string
// console.log(value); //object

//      -->      Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs ={
    id:1,
    nama: 'rivaldi akbar',
    umur: '17',
    email: 'rivaldi@gmail.com'
}

function getIdMhs({nama}){
    return nama;
}

console.log(getIdMhs(mhs))

