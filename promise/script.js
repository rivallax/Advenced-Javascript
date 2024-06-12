// $.ajax({
//     url : 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers'
//     success: movies => console.log(movies)
// });

//promise
// Object yang mempresentasikan  keberhasilan /kegagalan sebuah event yang asynchronous di masa yang akan datang
// jnji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then (akan menjalankan resolve)/ catch (menjalankan reject))


// contoh 1 
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) =>{
    // pengkondisian
//     if(ditepati){
//         resolve('janji telah ditepati!');   
//     }else{
//         reject('ingkar janji..');
//     }
// });

// // console.log(janji1);
// janji1 
//     .then(response => console.log('OK! : ' + response))
//     .catch(response =>console.log('NOT OK!' + response));

//contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) =>{
//     if(ditepati){
//         setTimeout(() =>{
//             resolve('ditepati setelah beberapa waktu !');
//         }, 2000);
//     }else{
//         setTimeout(() =>{
//             resolve('Tidak ditepati setelah beberapa waktu !');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2 
//     .finally(() => console.log('selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response =>console.log('NOT OK!' + response));

// console.log('selesai');


//promise.all()

const film = new Promise( resolve =>{
    setTimeout(()=>{
        resolve([{
            judul: 'Avengers',
            sutradara: 'rivaldi akbar',
            pemeran: 'rivall,jefrie jicol'
        }])
    }, 1000);

});

const cuaca = new Promise(resolve =>{ 
setTimeout(()=>{
    resolve([{
        kota: 'subang',
        temp: 26,
        kondisi: 'Cerah Berawan'
    }]);
    },5000);
 })

//  film
//  .then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
// .then(response => console.log(response))
.then(response =>{
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});
