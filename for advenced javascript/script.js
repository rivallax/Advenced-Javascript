//method baru
        // FOR OF
        // FOR IN
//method baru



//for of adalah sebuah loppingg atau mengulang atau menelusuri object yang iterable.


//iterable object

//string
//array
//arguments/nodelist
//typedarray
//map
//set
//user-defined iterables (iterables yang di buat oleh user)



//  -->fo...of 
//array
// const mhs = ['rival','elgin','deden'];

// // for(let i = 0; i < mhs.length; i++){    //for biasa
// //     console.log(mhs(i));    //rival, elgin, deden
// // }
 
// mhs.forEach(m =>console.log(m));  //forEach


//           //  for..of

// for(const m of mhs){
//     console.log(m);
// }

//string
// const nama ='rival';
// for (const n of nama){
//     console.log(n);  // melooping string  
//                     // r i v a l
// }


// const mhs = ['rival','elgin','deden'];

// // mhs.forEach((m, i) =>{
// //     console.log(`${m} adalah mahasiswa ke- ${i + 1}`);
// // });          //forEach mempunyai index


// for (const [i,m] of mhs.entries()){  //bisa melopping index namun harus menggunakan metod (entries)
//     console.log(`${m} adalah mahasiswa ke- ${i + 1}`);
// }   //for...of tidak mempunyai index namun bisa menggunakan method(entries)


// -->nodelist

// const linama = document.querySelectorAll('.nama');

    // linama.forEach(n => console.log(n.textContent)) //forEach

    // for(n of linama){
    //     console.log(n.innerHTML);
    // } //nodeList


    // -->arguments

// function jumlahAngka(){
//  let jumlah = 0
//  for (a of arguments){
//     jumlah += a;
//  }
//  return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));


// for .. im
const Taruna ={
    nama: 'muhammad rivaldi',
    kelas: '11 rpl',
    umur :17,
    ttl : 'jawa barat'
}

for (m in Taruna) {
    console.log(m);

}






