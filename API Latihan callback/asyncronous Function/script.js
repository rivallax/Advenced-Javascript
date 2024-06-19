// Asyncronous Function

// "Sebuah function yang bekerja secara ayncronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya,tapi cara penulisan code-nya menggunakan penulisan yang syncronous (standard)".

    //asyncronous Function
            // DEFINISI
        // Fungsi yang berjalan secara asyncronous 
        //menghasilkan (implisit) promise
        //cara penulisannya sama seperti syncronous function(function biasa)

// FUNCTION YANG DI BERI (async) dapat memiliki kyword await (await bisa memberhentikan peng eksekusian semntara sambil mennggu promise resolve)


//contoh :

// callback function (resolve,reject)
// const coba = new Promise(resolve => resolve('selesai'));// callback function (resolve,reject)
// console.log('coba');

// const coba = new Promise(resolve =>{
//     setTimeout(() =>{
//         resolve('selesai')
//     }, 2000);
// });

// coba.then(() => console.log());

function cobaPromise(){
    return new Promise((resolve, reject)=>{
        const waktu = 5000;
        if(waktu < 5000){
            setTimeout(() =>{
                resolve('selesai')
            }, 3000);
        }else{
            reject('kelamaan!');
        }
    });    
}

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));


// const coba = cobaPromise();
// coba.then(() => console.log(coba));

// async function cobaAsync(){ 
//     const coba =await  cobaPromise(); //contoh sederhana async dan await
//     console.log(coba);
//  }

//  cobaAsync();


async function cobaAsync() {
    try{
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err){
        console.error(err)
    }
}

cobaAsync();


