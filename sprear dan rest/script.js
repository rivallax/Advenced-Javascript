//spread Oprator
//memecah iterables mennjadi single element
// const mhs = ['rivaldi','dody', 'mahesa'];

// console.log(...mhs[0]);


// const murid= ['rival','elgin','ikhsan'];
// const guru = ['heru','rudy','waluyo'];
// const orang =[...murid,'kurniawan',...guru];

// console.log(orang);

//meng-copy array

// const mhs = ['rival','bowo', 'jajang'];
// //const mhs1 = [... mhs];
// const mhs1 = [...mhs]
// mhs1[0] = 'fajar';
// console.log(mhs1);

// const liMhs= document.querySelectorAll('li');
// // const mhs =[];
// // for(let i =0 ; i <liMhs.length; i ++){
// //     mhs.push(liMhs[i].textContent);
// // }

// // console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(liMhs);

// const namaList = document.querySelectorAll('.nama');
// namaList.forEach(nama => {
//     const huruf = Array.from(nama.textContent).map(h => `<span class="animasi">${h}</span>`).join('');
//     nama.innerHTML = huruf;
// });



//Rest Parameter

//'Mempresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array'

// Rest parameter digunakan dalam deklarasi fungsi untuk mengumpulkan argumen sisa ke dalam array.
// Rest parameter digunakan di dalam definisi parameter fungsi dan hanya bisa muncul sebagai parameter terakhir.
// Rest parameter mengonversi argumen menjadi array.
// Rest parameter digunakan untuk mengatasi jumlah argumen yang tidak terbatas.

contoh :

function jumlahAngka(...angka){
    let total = 0;
    for(let i = 0; i< angka.length; i++){
        total += angka[i];
    }

    return total;
}

console.log(jumlahAngka(1, 2, 3, 4, 5,));





// Jadi, intinya:

// Rest parameter digunakan untuk mengumpulkan argumen menjadi array dalam definisi fungsi.
// Spread operator digunakan untuk mengurai array atau objek menjadi nilai-nilai terpisah di luar definisi fungsi.

